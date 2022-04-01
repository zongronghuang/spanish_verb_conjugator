<template>
  <div
    class="
      search-page
      d-flex
      flex-column
      align-items-center
      justify-content-around
      w-100
      pb-1
    "
  >
    <!-- 搜尋區域 -->
    <h1 class="app-title mt-5 mb-0 text-center">Spanish Verb Conjugator</h1>
    <SearchBar class="mx-auto" />
    <SearchFooter  />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import SearchFooter from "../components/SearchFooter.vue";

export default {
  name: "search-page",
  components: {
    SearchBar,
    SearchFooter,
  },
  created() {
    console.log("[created] SearchPage");
  },
};
</script>

<style scoped>
.search-page {
  height: 100vh;
  width: 100vw;
}

.app-title {
  color: var(--spanish-yellow);
  font-size: 2.4rem;
  font-family: "Montserrat", sans-serif;
}

@media screen and (min-width: 360px) {
  .app-title {
    font-size: 3rem;
  }
}

/* portrait small tablets */
@media screen and (min-width: 600px) {
  .app-title {
    font-size: 3.5rem;
  }
}

/* landscape tablets */
@media screen and (min-width: 768px) {
  .app-title {
    font-size: 3.6rem;
  }
}

/* large laptops and desktops */
@media screen and (min-width: 1024px) {
  .app-title {
    font-size: 4.5rem;
  }
}
</style>