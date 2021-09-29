<template>
  <nav
    class="
      py-2
      d-flex
      flex-row flex-nowrap
      justify-content-around
      align-items-center
    "
  >
    <div id="left-buttons" class="d-flex justify-content-between flex-row w-25">
      <IrregularVerbsButton />
      <RandomVerbButton />
    </div>

    <SearchBar class="search-bar" />

    <div
      id="right-buttons"
      class="d-flex justify-content-between flex-row w-25"
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
  max-height: 40px;
  width: 100%;
}

.search-bar {
  transform: scale(0.8, 0.8);
}

#left-buttons,
#right-buttons {
  visibility: hidden;
}

@media screen and (min-width: 360px) and (orientation: landscape) {
  nav {
    height: 45px;
  }

  #left-buttons,
  #right-buttons,
  .search-bar {
    transform: scale(0.7, 0.7);
  }
}

@media only screen and (min-width: 600px) {
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

@media screen and (min-width: 1024px) {
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
</style>

