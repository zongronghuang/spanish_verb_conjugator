<template>
  <div>
    <ControlPanel />
    <ConjugationTable />
    <TenseCategories />
  </div>
</template>

<script>
import TenseCategories from "../components/TenseCategories.vue";
import ControlPanel from "../components/ControlPanel.vue";
import ConjugationTable from "../components/ConjugationTable.vue";

export default {
  name: "test-card",
  components: {
    TenseCategories,
    ControlPanel,
    ConjugationTable,
  },
};
</script>

<style scoped>
</style>