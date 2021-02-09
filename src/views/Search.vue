<template>
  <div class="pb-1">
    <!-- 搜尋區域 -->
    <div class="mx-auto my-2 w-75" id="search-area">
      <h3>Feed a Spanish Verb</h3>
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
</style>