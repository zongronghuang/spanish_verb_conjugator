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
    datasetAPIs.fetchInfinitives();
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
</style>


