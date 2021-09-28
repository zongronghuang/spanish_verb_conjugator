<template>
  <div id="main-page" class="border d-flex flex-column justify-content-between">
    <NavBar :lastSearchTime="lastSearchTime" />

    <main class="d-flex border border-dark flex-grow-1 align-items-center">
      <ConjugationTable
        class="conjugation-table"
        :mode="mode"
        :selectedConjugations="selectedConjugations"
      />
    </main>

    <footer class="d-flex justify-content-between w-100 mb-2">
      <LeftArrow />
      <RightArrow />
    </footer>

    <!-- random spinner modal -->
    <div
      class="modal fade"
      id="spinner"
      tabindex="-1"
      aria-labelledby="modalSpinner"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-body text-center">
            <div>
              <font-awesome-icon
                :icon="['fas', 'spinner']"
                size="5x"
                :style="{ color: 'black' }"
                pulse
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- verb info modal -->
    <div
      class="modal fade"
      id="verbInfoDialog"
      tabindex="-1"
      aria-labelledby="verbInfoModalDialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
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
#main-page {
  padding: 0;
  height: 100vh;
  width: 100vw;
  margin-left: 0;
  margin-right: 0;
}

/* tablets + portrait orientation */
@media screen and (min-height: 1024px) and (orientation: portrait) {
  footer {
    height: 5%;
  }
}

/* small phones + landscape orientation */
@media screen and (min-height: 280px) and (orientation: landscape) {
  footer {
    height: 12%;
  }
}

/* desktops  */
@media screen and (min-width: 1366px) and (min-height: 900px) {
  footer {
    height: 5%;
  }
}
</style>