<template>
  <div>
    <ControlPanel />
    <TenseCategories />
  </div>
</template>

<script>
import TenseCategories from "../components/TenseCategories.vue";
import ControlPanel from "../components/ControlPanel.vue";

export default {
  name: "memory-card",
  components: {
    TenseCategories,
    ControlPanel,
  },
};
</script>

<style scoped>
</style>