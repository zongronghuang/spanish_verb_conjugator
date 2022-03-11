<template>
  <nav class="d-flex justify-content-between align-items-center py-0">
    <div id="left-buttons" class="left-buttons w-25 h-100 py-2">
      <IrregularVerbsButton />
      <ChanceButton />
    </div>

    <div class="search-bar pl-2">
      <InlineSearchBar />
    </div>

    <div class="mobile-menu text-center flex-grow-1 py-2">
      <MenuButton/>
    </div>

    <div id="right-buttons " class="right-buttons  w-25 h-100 py-2">
      <ReportButton />
      <SettingsButton />
    </div>
  </nav>
</template>

<script>
import InlineSearchBar from './InlineSearchBar.vue'
import IrregularVerbsButton from "./navButtons/IrregularVerbsButton.vue";
import SettingsButton from "./navButtons/SettingsButton.vue";
import ReportButton from "./navButtons/ReportButton.vue";
import ChanceButton from "./navButtons/ChanceButton.vue";
import MenuButton from './navButtons/MenuButton.vue'

export default {
  name: "nav-bar",
  components: {
    InlineSearchBar,
    IrregularVerbsButton,
    SettingsButton,
    ReportButton,
    ChanceButton,
    MenuButton
  },
  created() {
    console.log("[created] NavBar");
  },
};
</script>

<style scoped>
nav {
  background-color: var(--spanish-red);
  min-height: 7vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.search-bar, 
.left-buttons,
.right-buttons {
  display: none;
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }

  .search-bar {
    display: block;
    margin-top: 0;
  }

  .left-buttons,
  .right-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}
</style>

