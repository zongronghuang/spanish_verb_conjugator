<template>
  <nav class="px-0 mx-0">
    <div id="left-buttons" class="px-1 mx-0">
      <IrregularVerbsButton />

      <RandomVerbButton />
    </div>

    <div class="search-bar mx-0">
      <SearchBar />
    </div>

    <div id="right-buttons" class="px-1 mx-0">
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
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.search-bar {
  transform: scale(0.95, 0.95);
  margin: 0 auto;
}

#left-buttons,
#right-buttons {
  visibility: hidden;
  width: 0;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}

/* smart phones + portrait orientation */
@media screen and (min-width: 360px) and (orientation: portrait) {
  .search-bar {
    transform: scale(1.1, 1.1);
  }
}

@media screen and (min-width: 411px) and (orientation: portrait) {
  .search-bar {
    transform: scale(1.2, 1.2);
  }
}

/* tablets + portrait orientation */
@media screen and (min-width: 768px) and (orientation: portrait) {
  nav {
    justify-content: space-around;
  }

  .search-bar {
    transform: scale(1, 1);
    width: 40%;
  }

  #left-buttons,
  #right-buttons {
    visibility: visible;
    width: 25%;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }

  #left-buttons {
    width: 30%;
  }
}

@media screen and (min-width: 1024px) and (orientation: portrait) {
  #right-buttons,
  #left-buttons {
    font-size: 1.5rem;
  }
}

/* smart phones + landscape orientation */
@media screen and (min-height: 280px) and (orientation: landscape) {
  nav {
    height: 13%;
  }
  .search-bar {
    display: none;
  }

  #left-buttons,
  #right-buttons {
    visibility: visible;
    width: 50%;
    font-size: 0.7rem;
  }
}

/* tablets + landscape orientation */
@media screen and (min-width: 1024px) and (orientation: landscape) {
  nav {
    height: 100px;
    max-height: 100px;
  }

  .search-bar {
    display: initial;
    width: 50%;
  }

  #left-buttons,
  #right-buttons,
  .search-bar {
    transform: scale(1, 1);
    font-size: 1rem;
  }
}

/* desktops */
</style>

