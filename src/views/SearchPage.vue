<template>
  <div
    class="pb-1 d-flex flex-column align-items-center justify-content-center"
    id="search-page"
  >
    <!-- 搜尋區域 -->
    <div class="" id="frame">
      <h3 class="w-100 mb-3 text-center" id="title">Spanish Verb Conjugator</h3>
      <SearchBar class="mt-5 mx-auto" />
    </div>

    <small
      class="fixed-bottom w-100 text-center mb-4 font-weight-bold text-light"
    >
      Made with
      <font-awesome-icon
        id="heart-icon"
        :icon="['fas', 'heart']"
        size="1x"
        class="mx-1"
      />
      by
      <a
        class="text-decoration-none"
        href="https://github.com/zongronghuang/spanish_verb_conjugator"
        target="_blank"
      >
        Zong-Rong
      </a>
    </small>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "search-page",
  components: {
    SearchBar,
  },
  created() {
    console.log("[created] SearchPage");
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
  transform: skewY(30deg) scaleX(1.5);
  transition: transform 2s;
}

#frame:hover {
  transform: skewY(0deg) scaleX(1.5) scaleY(1.5);
}

#heart-icon {
  color: #f1bf00;
  transform: scaleX(1) scaleY(1);
  transition: transform 1.5s;
}

#heart-icon:hover {
  transform: scaleX(2.5) scaleY(2.5);
}
</style>