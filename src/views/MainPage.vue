<template>
  <div id="main-page">
    <NavBar @update-use-mode="updateUseMode" />

    <main
      class="
        w-100
        mt-5
        d-flex
        justify-content-center
        align-items-center
        mx-auto
        h-75
        border border-warning
      "
    >
      <LeftArrow />
      <ConjugationTable
        :mode="mode"
        :selectedConjugations="selectedConjugations"
      />
      <RightArrow />
    </main>

    <TenseMenu @fetch-selected-conjugations="fetchSelectedConjugations" />
  </div>
</template>

<script>
import TenseMenu from "../components/TenseMenu.vue";
import NavBar from "../components/NavBar.vue";
import ConjugationTable from "../components/ConjugationTable.vue";
import LeftArrow from "../components/subcomponents/LeftArrow.vue";
import RightArrow from "../components/subcomponents/RightArrow.vue";

import { mapState } from "vuex";
import datasetAPIs from "../apis/dataset.js";

export default {
  name: "main-page",
  components: {
    TenseMenu,
    NavBar,
    ConjugationTable,
    LeftArrow,
    RightArrow,
  },
  data() {
    return {
      mode: "view",
      selectedConjugations: [],
    };
  },
  // 未進入 app，直接輸入帶有 infinitive param 的 URL 的處理方法
  created() {
    const { infinitive } = this.$route.params;

    const conjugations = datasetAPIs.getAllConjugationsByVerb(
      infinitive,
      this.infinitives
    );

    // 如果 infinitive 存在 => 取出動詞變化放到 vuex 中，顯示 indicative present
    // 如果 infinitive 不存在 => 重新導向至 search page
    if (conjugations.length > 0) {
      this.$store.commit("setVerb", conjugations);
      localStorage.setItem("verb_conjugations", JSON.stringify(conjugations));
    } else {
      this.$router.push("/search");
    }
  },
  // 進入 app 後，直接修改 URL 的 verb param 的處理方法
  beforeRouteUpdate(to, from, next) {
    const { infinitive } = to.params;

    // 取得 infinitive 的所有動詞變化
    const conjugations = datasetAPIs.getAllConjugationsByVerb(
      infinitive,
      this.infinitives
    );

    // 如果存在指定的 infinitive => 取出動詞變化放到 vuex 中，顯示 indicative present
    // 如果 infinitive 不存在 => 重新導向至 search page
    if (conjugations.length > 0) {
      this.$store.commit("setVerb", conjugations);
      localStorage.setItem("verb_conjugations", JSON.stringify(conjugations));
    } else {
      this.$router.push("/search");
    }

    next();
  },
  methods: {
    updateUseMode(mode) {
      this.mode = mode;
    },
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
#main-page {
  height: 100vh;
}

main {
  min-width: 600px;
}
</style>