<template>
  <div id="conjugation-page">
    <ControlPanel @change-mode="changeMode" @change-theme="changeTheme" />

    <div class="d-flex justify-content-between">
      <LeftPanel />
      <ConjugationTable :chosen-mode="mode" :conjugation-set="conjugationSet" />
      <RightPanel />
    </div>
    <BottomPanel />

    <TenseCategories @fetch-conjugation-set="fetchConjugationSet" />
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
      mode: "0",
      theme: "0",
      conjugationSet: [],
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
    fetchConjugationSet(conjugationSet) {
      if (conjugationSet.length > 0) this.conjugationSet = conjugationSet;
    },
  },
};
</script>

<style scoped>
#conjugation-page {
  height: 100vh;
}
</style>