<template>
  <nav
    class="
      
      d-flex
      flex-row flex-nowrap
      justify-content-around
      align-items-center
    "
  >
    <div id="left-buttons" class="ml-2 d-flex justify-content-between flex-row flex-grow-1 border">
      <IrregularVerbsButton />
      <RandomVerbButton />
    </div>

    <SearchBar class="search-bar flex-grow-2" />

    <div
      id="right-buttons"
      class="mr-2 d-flex justify-content-beween flex-row flex-grow-1 border"
    >
      <ReportButton />
      <SettingsButton />
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import IrregularVerbsButton from "./navButtons/IrregularVerbsButton.vue";
import SettingsButton from "./navButtons/SettingsButton.vue";
import ReportButton from "./navButtons/ReportButton.vue";
import RandomVerbButton from "./navButtons/RandomVerbButton.vue";

export default {
  name: "nav-bar",
  components: {
    SearchBar,
    IrregularVerbsButton,
    SettingsButton,
    ReportButton,
    RandomVerbButton,
  },
  created() {
    console.log("[created] NavBar");
  },
};
</script>

<style scoped>
nav {
  background-color: var(--spanish-red);
  /* max-height: 40px; */
  height: 10%;
  width: 100%;
}

.search-bar {
  transform: scale(0.95, 0.95);
}

#left-buttons,
#right-buttons {
  visibility: hidden;
}

/* smart phones + portrait orientation */
@media screen and (min-width: 360px) and (orientation: portrait) {
  .search-bar {
    transform: scale(1, 1);
  }
}

@media screen and (min-width: 411px) and (orientation: portrait) {
  .search-bar {
    transform: scale(1.2, 1.2);
  }
}

/* tablets + portrait orientation */
@media screen and (min-width: 768px) and (orientation: portrait) {
  .search-bar {
    transform: scale(0.9, 0.9);
  }

  #left-buttons,
  #right-buttons {
  visibility: visible;
  }
}

@media screen and (min-width: 1024px) and (orientation: portrait) {
  .search-bar {
    transform: scale(1.1, 1.1);
  }
}

/* smart phones + landscape orientation */



/* tablets + landscape orientation */
@media screen and (min-width: 360px) and (orientation: landscape) {
  /* nav {
    height: 45px;
  } */

  #left-buttons,
  #right-buttons,
  .search-bar {
    transform: scale(0.7, 0.7);
  }
}

@media only screen and (min-width: 600px) and (orientation: landscape) {
  #left-buttons,
  #right-buttons {
    transform: scale(0.8, 0.8);
    visibility: visible;
  }
}

@media screen and (min-width: 600px) and (orientation: landscape) {
  nav {
    height: 30px;
  }
  #left-buttons,
  #right-buttons,
  .search-bar {
    transform: scale(0.6, 0.6);
  }
}

@media screen and (min-width: 1024px) and (orientation: landscape) {
  nav {
    height: 100px;
    max-height: 100px;
  }

  #left-buttons,
  #right-buttons,
  .search-bar {
    transform: scale(1.3, 1.3);
  }
}

/* desktops */


</style>

