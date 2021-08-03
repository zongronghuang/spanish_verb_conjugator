<template>
  <div
    class="pb-1 d-flex flex-column align-items-center justify-content-center"
    id="search-page"
  >
    <!-- 搜尋區域 -->
    <div class="" id="frame">
      <h3 class="w-100 mb-3 text-center" id="title">Feed a Spanish Verb</h3>
      <SearchBar class="mt-5 mx-auto" />
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
  background-color: #aa151b;
}

#title {
  color: #f1bf00;
}

#frame {
  transform: skewY(30deg) scaleX(2);
  transition: transform 2s;
}

#frame:hover {
  transform: skewY(0deg) scaleX(2) scaleY(2);
}
</style>