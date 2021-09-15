<template>
  <div
    class="pb-1 d-flex flex-column align-items-center justify-content-center"
    id="search-page"
  >
    <!-- 搜尋區域 -->
    <div id="frame">
      <h3 class="w-100 text-center" id="title">Spanish Verb Conjugator</h3>
      <SearchBar class="py-2 mt-5 mx-auto" />
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
  height: 0;
  width: 0;
  background-color: gold;
}

#title {
  color: var(--spanish-yellow);
}

#frame {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -80%) skewY(30deg) scaleX(1.5);
  transition: transform 2s;
}

#frame:hover {
  transform: translate(-50%, -80%) skewY(0deg) scale(1.5);
}

#heart-icon {
  color: var(--spanish-yellow);
}

#heart-icon:hover {
  transform: scale(1);
  animation-name: beating-heart;
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
}

@keyframes beating-heart {
  0% {
    transform: scale(0.9);
    color: var(--spanish-yellow);
  }
  65% {
    transform: scale(2);
    color: var(--spanish-red);
  }
  100% {
    transform: scale(1);
  }
}
</style>