<template>
  <div id="main-page">
    <NavBar :lastSearchTime="lastSearchTime" />

    <main class="d-flex w-100 h-75 justify-content-between align-items-center">
      <ConjugationTable
        class="conjugation-table"
        :mode="mode"
        :selectedConjugations="selectedConjugations"
      />
    </main>

    <footer class="fixed-bottom d-flex justify-content-between w-100 mb-2">
      <LeftArrow />
      <RightArrow />
    </footer>

    <!-- modal -->
    <div
      class="modal fade"
      id="verbInfoDialog"
      tabindex="-1"
      aria-labelledby="verbInfoModalDialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="verbInfoModalDialog">Verb info</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body px-0 py-0">
            <section class="px-3 py-2 bg-light">
              <p>
                <span>Definition: </span>
                <span>
                  <strong>
                    {{ verb.infinitive_english }}
                  </strong>
                </span>
              </p>
              <p>
                <span>Gerund: </span>
                <span>
                  <strong>
                    {{ verb.gerund }}
                  </strong>
                </span>
              </p>
              <p>
                <span>Past participle: </span>
                <span>
                  <strong>
                    {{ verb.pastparticiple }}
                  </strong>
                </span>
              </p>
            </section>
          </div>
          <div class="modal-footer py-1 border-0"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ConjugationTable from "../components/ConjugationTable.vue";
import LeftArrow from "../components/subcomponents/LeftArrow.vue";
import RightArrow from "../components/subcomponents/RightArrow.vue";
//import Footer from '../components/Footer.vue'

import { mapState } from "vuex";
import { collectSearchedVerbToLocalStorage } from "../utils/mixins.js";
import datasetAPIs from "../apis/dataset.js";

export default {
  name: "main-page",
  components: {
    NavBar,
    ConjugationTable,
    LeftArrow,
    RightArrow,
  },
  mixins: [collectSearchedVerbToLocalStorage],
  data() {
    return {
      mode: "view",
      selectedConjugations: [],
      history: [],
      lastSearchTime: "",
    };
  },
  // 未進入 app，直接輸入帶有 infinitive param 的 URL 的處理方法
  created() {
    console.log("[created] MainPage");

    // 取得搜尋的 infinitive 所有動詞變化
    const { infinitive } = this.$route.params;

    const conjugations = datasetAPIs.getAllConjugationsByVerb(
      infinitive,
      this.infinitives
    );

    // 如果 infinitive 存在 => 取出動詞變化放到 vuex 中，顯示 indicative present
    // 如果 infinitive 不存在 => 重新導向至 search page
    if (conjugations.length > 0) {
      this.$store.commit("setVerbData", {
        ...conjugations[0],
        allConjugations: conjugations,
      });
      this.collectSearchedVerbToLocalStorage(infinitive);
      this.lastSearchTime = Date.now();
    } else {
      this.$router.push("/search");
    }
  },
  // 進入 app 後，直接修改 URL 的 verb param 的處理方法
  beforeRouteUpdate(to, from, next) {
    console.log("[beforeRouteUpdate] MainPage");
    const { infinitive } = to.params;

    // 取得 infinitive 的所有動詞變化
    const conjugations = datasetAPIs.getAllConjugationsByVerb(
      infinitive,
      this.infinitives
    );

    // 如果存在指定的 infinitive => 取出動詞變化放到 vuex 中，顯示 indicative present
    // 如果 infinitive 不存在 => 重新導向至 search page
    if (conjugations.length > 0) {
      this.$store.commit("setVerbData", {
        ...conjugations[0],
        allConjugations: conjugations,
      });
      this.collectSearchedVerbToLocalStorage(infinitive);
      this.lastSearchTime = Date.now();
    } else {
      this.$router.push("/search");
    }

    next();
  },
  computed: {
    ...mapState(["infinitives", "verb"]),
  },
};
</script>

<style scoped>
main {
  margin-top: 18%;
  width: 100%;
  height: 75%;
}

/* @media screen and (min-width: 600px) and (orientation: landscape) {
  main {
    top: 95%;
    transform: translate(-50%, -50%);
  }
  .conjugation-table {
    font-size: 1.3rem;
  }
}

@media screen and (width: 653px) and (orientation: landscape) {
  .conjugation-table {
    font-size: 1rem;
  }
}

@media screen and (min-width: 768px) {
  main {
    top: 95%;
  }
  .conjugation-table {
    transform: scale(1.05, 1.05);
    font-size: 1.8rem;
  }
}

@media screen and (min-width: 768px) and (orientation: landscape) {
  main {
    top: 93%;
  }

  .conjugation-table {
    transform: scale(0.8, 0.8);
    font-size: 1.4rem;
  }
}

@media screen and (min-width: 1024px) {
  main {
    top: 90%;
  }
  .conjugation-table {
    transform: scale(1.05, 1.05);
    font-size: 2rem;
  }
}

@media screen and (min-width: 1024px) and (orientation: landscape) {
  main {
    top: 90%;
  }
}

@media screen and (min-width: 1366px) and (orientation: landscape) {
  .conjugation-table {
    transform: scale(1.1, 1.1);
    font-size: 2rem;
  }
} */
</style>