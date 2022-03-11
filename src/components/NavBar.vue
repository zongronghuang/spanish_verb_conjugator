<template>
  <nav class="d-flex justify-content-between align-items-center py-0">
    <div id="left-buttons" class="left-buttons w-25 h-100 py-2">
      <IrregularVerbsButton />
      <ChanceButton />
    </div>

    <div class="search-bar pl-2">
      <!-- <SearchBar /> -->
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
//import SearchBar from "./SearchBar.vue";
import InlineSearchBar from './InlineSearchBar.vue'
import IrregularVerbsButton from "./navButtons/IrregularVerbsButton.vue";
import SettingsButton from "./navButtons/SettingsButton.vue";
import ReportButton from "./navButtons/ReportButton.vue";
import ChanceButton from "./navButtons/ChanceButton.vue";
import MenuButton from './navButtons/MenuButton.vue'

export default {
  name: "nav-bar",
  components: {
    // SearchBar,
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
  /* height: 10vh; */
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



/* .search-bar {
  transform: scale(0.95, 0.95);
  margin: 0 auto;
}

.left-buttons,
.right-buttons {
  visibility: hidden;
  width: 0;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
} */

/* smart phones + portrait orientation */
/* @media screen and (min-width: 360px) and (orientation: portrait) {
  .search-bar {
    transform: scale(1.1, 1.1);
  }
}

@media screen and (min-width: 411px) and (orientation: portrait) {
  .search-bar {
    transform: scale(1.2, 1.2);
  }
} */

/* tablets + portrait orientation */
/* @media screen and (min-width: 768px) and (orientation: portrait) {
  nav {
    justify-content: space-around;
  }

  .search-bar {
    transform: scale(1, 1);
    width: 40%;
  }

  .left-buttons,
  .right-buttons {
    visibility: visible;
    width: 25%;
    justify-content: space-between;
    text-align: center;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1024px) and (orientation: portrait) {
  .right-buttons,
  .left-buttons {
    font-size: 1.5rem;
  }
} */

/* smart phones + landscape*/
/* @media screen and (min-height: 280px) and (orientation: landscape) {
  nav {
    height: 13%;
  }

  .search-bar {
    display: none;
  }

  .left-buttons,
  .right-buttons {
    visibility: visible;
    width: 50%;
    font-size: 0.7rem;
    justify-content: center;
  }
}

@media screen and (min-height: 360px) and (orientation: landscape) {
  .left-buttons,
  .right-buttons {
    font-size: 1rem;
  }
} */

/* tablets + landscape orientation */
/* @media screen and (min-width: 1024px) and (orientation: landscape) {
  nav {
    height: 80px;
    max-height: 100px;
  }

  .search-bar {
    display: initial;
    width: 50%;
  }

  .left-buttons,
  .right-buttons,
  .search-bar {
    transform: scale(1, 1);
    font-size: 1.2rem;
  }

  .left-buttons,
  .right-buttons {
    justify-content: space-around;
  }
} */

/* desktops */
/* @media screen and (min-width: 1367px) {
  nav {
    height: 60px;
  }

  .search-bar {
    display: initial;
    width: 50%;
  }

  .left-buttons,
  .right-buttons,
  .search-bar {
    transform: scale(1, 1);
    font-size: 1.3rem;
  }
} */
</style>

