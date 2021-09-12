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
    <div id="left-buttons" class="d-flex justify-content-around flex-row w-25">
      <IrregularVerbsButton />

      <RandomVerbButton />
    </div>

    <SearchBar class="search-bar" />

    <div
      id="right-buttons"
      class="d-flex justify-content-around flex-row w-25 d-none"
    >
      <ReportButton :lastSearchTime="lastSearchTime" />

      <SettingsButton />
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import IrregularVerbsButton from "./IrregularVerbsButton.vue";
import SettingsButton from "./SettingsButton.vue";
import ReportButton from "./ReportButton.vue";
import RandomVerbButton from "./RandomVerbButton.vue";

export default {
  name: "nav-bar",
  components: {
    SearchBar,
    IrregularVerbsButton,
    SettingsButton,
    ReportButton,
    RandomVerbButton,
  },
  props: {
    lastSearchTime: {
      type: Number,
      required: true,
    },
  },
  created() {
    console.log("[created] NavBar");
  },
};
</script>

<style scoped>
nav {
  background-color: var(--spanish-red);
  max-height: 60px;
}

.search-bar {
  transform: scale(1.1);
}

@media only screen and (max-width: 800px) {
  #left-buttons,
  #right-buttons {
    visibility: hidden;
  }
}
</style>

