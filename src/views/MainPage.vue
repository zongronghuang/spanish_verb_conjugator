<template>
  <div id="main-page">
    <NavBar :lastSearchTime="lastSearchTime" />
    <main
      class="w-75 d-flex justify-content-between align-items-center mx-auto"
    >
      <LeftArrow />
      <ConjugationTable
        :mode="mode"
        :selectedConjugations="selectedConjugations"
      />
      <RightArrow />
    </main>

    <div
      class="
        fixed-bottom
        d-flex
        justify-content-end
        align-items-center
        mr-2
        mb-2
        bg-transparent
        font-italic
      "
    >
      <small class="text-light d-flex align-items-center">
        <a
          class="text-decoration-none font-weight-light"
          href="https://unsplash.com/@rotivartic"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fas', 'camera']"
            size="1x"
            :style="{ color: 'white' }"
          />
          Rotiv Artic
        </a>
      </small>
    </div>

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
                    <i> {{verb.infinitive_english}} </i>
                  </strong>
                </span>
              </p>
              <p>
                <span>Gerund: </span>
                <span>
                  <strong>
                    <i> {{verb.gerund}} </i>
                  </strong>
                </span>
              </p>
              <p>
                <span>Past participle: </span>
                <span>
                  <strong>
                    <i> {{verb.pastparticiple}} </i>
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

import { collectSearchedVerbToLocalStorage } from "../utils/mixins.js";
import { mapState } from "vuex";
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
    ...mapState(["infinitives", 'verb']),
  },
};
</script>

<style scoped>
main {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 500px;
}

small > a {
  color: var(--spanish-yellow);
}
</style>