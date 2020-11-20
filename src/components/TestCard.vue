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
import RightPanel from "../components/RightPanel.vue";
import LeftPanel from "../components/LeftPanel.vue";

export default {
  name: "test-card",
  components: {
    TenseCategories,
    ControlPanel,
    ConjugationTable,
    RightPanel,
    LeftPanel,
  },
};
</script>

<style scoped>
</style>