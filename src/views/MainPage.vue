<template>
  <div id="conjugation-page">
    <NavBar @change-mode="changeMode" @change-theme="changeTheme" />

    <div class="d-flex justify-content-between">
      <LeftArrow />
      <ConjugationTable
        :mode="mode"
        :selectedConjugations="selectedConjugations"
      />
      <RightArrow />
    </div>
    <BottomPanel />

    <TenseMenu @fetch-selected-conjugations="fetchSelectedConjugations" />
  </div>
</template>

<script>
import TenseMenu from "../components/TenseMenu.vue";
import NavBar from "../components/NavBar.vue";
import ConjugationTable from "../components/ConjugationTable.vue";
import LeftArrow from "../components/LeftArrow.vue";
import RightArrow from "../components/RightArrow.vue";
import BottomPanel from "../components/BottomPanel.vue";

export default {
  name: "main-page",
  components: {
    TenseMenu,
    NavBar,
    ConjugationTable,
    LeftArrow,
    RightArrow,
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