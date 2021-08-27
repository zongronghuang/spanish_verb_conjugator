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
html,
body,
#verb-conjugator {
  margin: 0;
  padding: 0;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  border: none;
}

#verb-conjugator {
  background-image: url("./assets/sebastian-yepes-OdwjaP3GpqQ-unsplash.jpg");
  background-size: cover;
  min-width: 700px;
  min-height: 600px;
}
</style>


