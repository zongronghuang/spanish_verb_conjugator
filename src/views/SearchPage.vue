<template>
  <div
    class="
      pb-1
      d-flex
      w-100
      flex-column
      align-items-center
      justify-content-between
    "
    id="search-page"
  >
    <!-- 搜尋區域 -->
    <!-- <div id="frame">
      <h3 class="w-100 text-center" id="title">Spanish Verb Conjugator</h3>
      <SearchBar class="py-2 mx-auto" />
    </div> -->
    <h3 class="text-center mb-0 pb-0" id="title">Spanish Verb Conjugator</h3>
    <SearchBar class="mx-auto shadowed search-bar" />
    <Footer class="footer" />
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
#search-page {
  padding: 0;
  height: 100vh;
  width: 100vw;
  margin-left: 0;
  margin-right: 0;
}

#title {
  color: var(--spanish-yellow);
  font-family: "Montserrat", sans-serif;
  margin-top: 10%;
  font-size: 2.3rem;
}

.search-bar {
  margin-top: 0px;
  transform: scale(0.9, 0.9);
}

.shadowed {
  box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.6);
}

/* portrait small tablets */
@media screen and (min-width: 600px) {
  #title {
    font-size: 2rem;
    margin-top: 10%;
  }
  .search-bar {
    margin-top: 0px;
    transform: scale(1.2, 1.2);
  }
  .footer {
    font-size: 1rem;
  }
}

/* landscape tablets */
@media screen and (min-width: 768px) {
  #title {
    margin-top: 10%;
    font-size: 3.5rem;
  }
  .search-bar {
    transform: scale(1.8, 1.8);
  }
  .footer {
    font-size: 1.5rem;
  }
}

/* laptops and desktops */
@media screen and (min-width: 992px) {
  #title {
    margin-top: 10%;
    font-size: 4.5rem;
  }
  .search-bar {
    transform: scale(2.5, 2.5);
    margin-top: -100px;
  }
  .footer {
    font-size: 1.5rem;
  }
}

/* large laptops and desktops */
@media screen and (min-width: 1200px) {
  #title {
    margin-top: 10%;
  }
  .search-bar {
    margin-top: -50px;
  }
}
</style>