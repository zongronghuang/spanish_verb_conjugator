<template>
  <div>
    <ControlPanel
      @change-list="changeList"
      @change-mode="changeMode"
      @change-theme="changeTheme"
    />

    <div class="d-flex justify-content-between">
      <LeftPanel />
      <ConjugationTable :chosen-mode="mode" :selectedTense="tense" />
      <RightPanel />
    </div>
    <BottomPanel />

    <TenseCategories @selected-tense="registerSelectedTense" />
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
      list: "0",
      mode: "0",
      theme: "0",
      tense: "",
      indicative: {
        present: [],
        future: [],
        preterite: [],
        imperfect: [],
        presentPerfect: [],
        pastPerfect: [],
        futurePerfect: [],
        conditional: [],
      },
      subjunctive: {
        present: [],
        future: [],
        preterite: [],
        imperfect1: [],
        imperfect2: [],
        presentPerfect: [],
        pastPerfect: [],
        futurePerfect: [],
        conditional: [],
      },
      imperative: [],
      gerund: "",
      pastParticiple: "",
    };
  },
  created() {},
  methods: {
    changeList(option) {
      this.list = option;
    },
    changeMode(option) {
      this.mode = option;
    },
    changeTheme(option) {
      this.theme = option;
    },
    registerSelectedTense(tense) {
      this.tense = tense;
      console.log("this tense", this.tense);
    },
  },
};
</script>

<style scoped>
</style>