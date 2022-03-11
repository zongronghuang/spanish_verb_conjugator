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
</style>