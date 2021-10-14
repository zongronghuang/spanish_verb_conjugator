<template>
  <div>
    <!-- 設定按鈕 -->
    <a
      href=""
      data-toggle="modal"
      data-target="#settingsDialog"
      title="View and change the app's settings"
      class="mx-1 text-decoration-none"
    >
      <font-awesome-icon class="" :icon="['fas', 'cog']" size="2x" />
      <span class="h6 pt-2 my-0">Settings</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "settings-button",
  created() {
    console.log("[created] SettingsButton");
  },
};
</script>

<style scoped>
a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a > * {
  display: inline-block;
  margin: 0 auto;
  text-align: left;
}

a,
a:visited {
  color: white;
}

a:hover,
a:active {
  color: var(--spanish-yellow);
}

/* smart phones + landscape orientation */
@media screen and (min-height: 280px) and (orientation: landscape) {
  a {
    flex-direction: row;
    align-items: center;
  }

  a > * {
    width: 50px;
    line-height: 100%;
    margin: 0 3px;
  }

  span {
    margin-left: 1px;
  }
}

@media screen and (min-height: 320px) and (orientation: landscape) {
  a > * {
    width: 70px;
    line-height: 100%;
    margin-top: 3px;
  }
}

/* tablets & desktops + landscape orientation */
@media screen and (min-width: 768px) and (orientation: portrait) {
  svg {
    font-size: 3rem;
  }
  span {
    font-size: 1.2rem;
  }
}

@media screen and (min-height: 768px) and (orientation: landscape) {
  svg {
    font-size: 3rem;
  }

  span {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 1024px) and (orientation: portrait) {
  svg {
    font-size: 4rem;
  }

  span {
    font-size: 1.5rem;
  }
}

@media screen and (min-height: 1024px) and (orientation: landscape) {
  a > * {
    width: 90px;
  }

  svg {
    font-size: 3.5rem;
  }

  span {
    font-size: 1.5rem;
    margin-left: 10px;
  }
}

/* desktops */
@media screen and (min-width: 1367px) {
  span {
    font-size: 1.5rem;
  }
}
</style>