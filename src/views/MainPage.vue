<template>
  <div id="main-page">
    <NavBar @change-mode="changeMode" />

    <div class="d-flex justify-content-center">
      <LeftArrow />
      <ConjugationTable
        :mode="mode"
        :selectedConjugations="selectedConjugations"
      />
      <RightArrow @fetch-selected-conjugations="fetchSelectedConjugations" />
    </div>

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
  created() {},
  beforeRouteUpdate(to, from, next) {
    console.log("to", to, "from", from);

    const { infinitive } = to.params;
    console.log("to infinitive", infinitive);

    // 取得 infinitive 的所有動詞變化
    const conjugations = datasetAPIs.getAllConjugationsByVerb(
      infinitive,
      this.infinitives
    );

    console.log("conjugations in MainPage", conjugations);

    if (conjugations.length > 0) {
      this.$store.commit("setVerb", conjugations);
      localStorage.setItem("verb_conjugations", JSON.stringify(conjugations));
    } else {
      return;
    }
    // 放到 vuex 中

    next();
  },
  methods: {
    changeMode(option) {
      this.mode = option;
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
</style>