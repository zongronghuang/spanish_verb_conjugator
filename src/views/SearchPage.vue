<template>
  <div
    class="
      search-page
      pb-1
      d-flex
      w-100
      flex-column
      align-items-center
      justify-content-around
    "
  >
    <!-- 搜尋區域 -->
    <h1 class="app-title text-center mt-5 mb-0">Spanish Verb Conjugator</h1>
    <SearchBar class="mx-auto" />
    <Footer  />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "search-page",
  components: {
    SearchBar,
    Footer,
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