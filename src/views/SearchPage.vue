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

    <Footer />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import Footer from '../components/Footer.vue'

export default {
  name: "search-page",
  components: {
    SearchBar,
    Footer
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
  font-family: 'Montserrat', sans-serif;
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

/* #heart-icon {
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
} */
</style>