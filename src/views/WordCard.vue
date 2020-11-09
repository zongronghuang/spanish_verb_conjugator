<template>
  <div>
    <ControlPanel />

    <div class="d-flex justify-content-between">
      <LeftPanel />
      <ConjugationTable />
      <RightPanel />
    </div>

    <TenseCategories />
  </div>
</template>

<script>
import TenseCategories from "../components/TenseCategories.vue";
import ControlPanel from "../components/ControlPanel.vue";
import ConjugationTable from "../components/ConjugationTable.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";

export default {
  name: "word-card",
  components: {
    TenseCategories,
    ControlPanel,
    ConjugationTable,
    LeftPanel,
    RightPanel,
  },
};
</script>

<style scoped>
</style>