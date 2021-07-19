<template>
  <div id="conjugation-page">
    <ControlPanel @change-mode="changeMode" @change-theme="changeTheme" />

    <div class="d-flex justify-content-between">
      <LeftPanel />
      <ConjugationTable
        :mode="mode"
        :selectedConjugations="selectedConjugations"
      />
      <RightPanel />
    </div>
    <BottomPanel />

    <TenseCategories @fetch-selected-conjugations="fetchSelectedConjugations" />
  </div>
</template>

<script>
import TenseCategories from "../components/TenseCategories.vue";
import ControlPanel from "../components/ControlPanel.vue";
import ConjugationTable from "../components/ConjugationTable.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import BottomPanel from "../components/BottomPanel.vue";

export default {
  name: "conjugation-card",
  components: {
    TenseCategories,
    ControlPanel,
    ConjugationTable,
    LeftPanel,
    RightPanel,
    BottomPanel,
  },
  data() {
    return {
      mode: "view",
      theme: "0",
      selectedConjugations: [],
    };
  },
  created() {},
  methods: {
    changeMode(option) {
      this.mode = option;
    },
    changeTheme(option) {
      this.theme = option;
    },
    fetchSelectedConjugations(selectedConjugations) {
      console.log("selected conjugations in MainPage", selectedConjugations);
      if (selectedConjugations.length > 0)
        this.selectedConjugations = selectedConjugations;
    },
  },
};
</script>

<style scoped>
#conjugation-page {
  height: 100vh;
}
</style>