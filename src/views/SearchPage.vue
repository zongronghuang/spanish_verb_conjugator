<template>
  <div
    class="pb-1 d-flex align-items-center justify-content-center bg-danger"
    id="search-page"
  >
    <!-- 搜尋區域 -->
    <div
      class="
        h-50
        w-75
        d-flex
        justify-content-center
        flex-wrap
        align-items-center
        rounded
      "
      id="main-section"
    >
      <h3 class="w-100 text-center">Feed a Spanish Verb</h3>
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "search-page",
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
#search-page {
  height: 100vh;
}

#main-section {
  border: 3px solid gold;
}
</style>