<template>
  <div id="verb-conjugator" class="bg-light">
    <router-view />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import datasetAPIs from "./apis/dataset.js";

export default {
  name: "App",
  created() {
    const infinitives = datasetAPIs.fetchInfinitives();

    // 取得原形動詞陣列才會放到 vuex 內
    if (infinitives instanceof Array) {
      this.$store.commit("setInfinitives", infinitives);
      return console.log("=== App ready ===");
    }

    return console.log("Failed to initialize app");
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
</style>


