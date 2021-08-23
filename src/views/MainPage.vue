<template>
  <div id="main-page" class="">
    <NavBar :lastSearchTime="lastSearchTime" />
    <main
      class="w-100 d-flex justify-content-center align-items-center mx-autos"
    >
      <LeftArrow />
      <ConjugationTable
        :mode="mode"
        :selectedConjugations="selectedConjugations"
      />
      <RightArrow />
    </main>
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
  methods: {
    fetchSelectedConjugations(selectedConjugations) {
      // [{...}]
      console.log("selected conjugations in MainPage", selectedConjugations);
      if (selectedConjugations.length > 0)
        this.selectedConjugations = selectedConjugations;
    },
  },
  computed: {
    ...mapState(["infinitives"]),
  },
};
</script>

<style scoped>
/* #main-page {
  height: 100vh;
  min-height: 100%;
} */

main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  min-width: 600px;

  margin-top: 50px;
}
</style>