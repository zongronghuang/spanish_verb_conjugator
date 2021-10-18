<template>
  <div id="verb-conjugator">
    <router-view />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import datasetAPIs from "./utils/dataset.js";
import "./styles/custom.css";

export default {
  name: "App",
  created() {
    const infinitives = datasetAPIs.fetchInfinitives();
    if (infinitives instanceof Array) {
      this.$store.commit("setInfinitives", infinitives);
    }
  }
};
</script>

<style scoped>
</style>


