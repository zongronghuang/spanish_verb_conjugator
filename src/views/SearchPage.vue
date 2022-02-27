<template>
  <div
    class="
      search-page
      pb-1
      d-flex
      w-100
      flex-column
      align-items-center
      justify-content-between
    "
  >
    <!-- 搜尋區域 -->
    <h1 class="app-title text-center mb-0 pb-0">Spanish Verb Conjugator</h1>
    <SearchBar class="search-bar shadowed mx-auto" />
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
.search-page {
  height: 100vh;
  width: 100vw;
/* 
  margin: 0;
  padding: 0; */
  /* margin-left: 0;
  margin-right: 0; */
}

.app-title {
  margin-top: 30%;
  font-size: 5.3rem;
  color: var(--spanish-yellow);
  font-family: "Montserrat", sans-serif;
}

.search-bar {
  margin-top: 0px;
  margin-bottom: 60px;

  transform: scale(0.9, 0.9);
}

.shadowed {
  box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.6);
}

.footer {
  font-size: 0.5rem;
}

/* portrait small tablets */
@media screen and (min-width: 600px) {
  .app-title {
    font-size: 2rem;
    margin-top: 10%;
  }
  .search-bar {
    margin-top: 0px;
    transform: scale(1.2, 1.2);
  }

}

/* landscape tablets */
@media screen and (min-width: 768px) {
  .app-title {
    margin-top: 10%;
    font-size: 3.5rem;
  }
  .search-bar {
    transform: scale(1.8, 1.8);
  }
  .footer {
    font-size: 0.7rem;
  }
}

/* laptops and desktops */
@media screen and (min-width: 992px) {
  .app-title {
    margin-top: 10%;
    font-size: 3.5rem;
  }
  .search-bar {
    transform: scale(1.2, 1.2);
    margin-top: -10px;
  }
  .footer {
    font-size: 0.9rem;
  }
}

/* large laptops and desktops */
@media screen and (min-width: 1200px) {
  .app-title {
    margin-top: 10%;
  }
  .search-bar {
    margin-top: -50px;
  }
  .footer {
    font-size: 1.1rem;
  }
}
</style>