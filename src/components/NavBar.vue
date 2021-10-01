<template>
  <nav
    class="

      px-0
      mx-0
    "
  >
    <div
      id="left-buttons"
      class="border px-1"
    >
   <IrregularVerbsButton />
      
      <RandomVerbButton />
    </div>

    <div class="search-bar border">
      <SearchBar />
    </div>

    <div
      id="right-buttons"
      class=" border px-1"
    >
      <ReportButton />
      <SettingsButton  />
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
  justify-content: space-around;
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
  flex-grow: 1;
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
  .search-bar {
    transform: scale(1, 1);
    width: 40%;
  }

  #left-buttons,
  #right-buttons {
    visibility: visible;
  }
}

@media screen and (min-width: 1024px) and (orientation: portrait) {
  #right-buttons, #left-buttons {
    font-size: 1.5rem;
  }
}

/* smart phones + landscape orientation */
@media screen and (min-height: 320px) and (orientation: landscape) {
  nav {
    display: flex;
    justify-content: space-around;
  }

  #right-buttons, #left-buttons {
    visibility: visible;
    width: 200px ;
    font-size: 0.5rem;
  }
}



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

@media only screen and (min-width: 768px) and (orientation: landscape) {
  #left-buttons,
  #right-buttons {
    transform: scale(0.8, 0.8);
    visibility: visible;
  }
}

/* @media screen and (min-width: 600px) and (orientation: landscape) {
  nav {
    height: 30px;
  }
  #left-buttons,
  #right-buttons,
  .search-bar {
    transform: scale(0.6, 0.6);
  }
} */

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

