<template>
  <div id="verb-conjugator">
    <router-view />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getInfinitiveList } from "./utils/datastore/getInfinitiveList";
import "./styles/custom.css";

export default {
  name: "App",
  created() {
    const infinitiveList = getInfinitiveList();
    this.$store.commit('setInfinitives', infinitiveList)
  }
};
</script>

<style scoped>
</style>


