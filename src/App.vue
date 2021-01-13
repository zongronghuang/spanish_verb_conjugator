<template>
  <div id="verb-conjugator">
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
    if (infinitives instanceof Array) {
      this.$store.commit("setInfinitives", infinitives);
    }
  },
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  border: none;
  background-color: gray;
}
</style>


