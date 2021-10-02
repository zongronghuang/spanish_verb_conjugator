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
      <font-awesome-icon class="" :icon="['fas', 'cog']" size="3x" />
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
  display: block flex;
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
    width: 100px;
    line-height: 100%;
    margin: 0 3px;
  }

  span {
    margin-left: 3px;
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
@media screen and (min-width: 1024px) {
  a > * {
    width: 90px;
  }
  span {
    font-size: 1.6rem;
    margin-left: 10px;
  }
}
</style>