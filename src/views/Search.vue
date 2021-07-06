<template>
  <div
    class="
      pb-1
      d-flex
      align-items-center
      justify-content-center
      bg-danger
      search-page
    "
  >
    <!-- 搜尋區域 -->
    <div
      class="
        h-50
        w-50
        d-flex
        flex-nowrap
        align-items-center
        border border-warning
        rounded
      "
      id="search-area"
    >
      <h3 class="text-center">Feed a Spanish Verb</h3>
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "search",
  components: {
    SearchBar,
  },
};
</script>


<style scoped>
.search-page {
  height: 100vh;
}
</style>