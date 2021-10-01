<template>
  <div>
    <!-- 設定按鈕 -->
    <a
      href=""
      data-toggle="modal"
      data-target="#settingsDialog"
      title="View and change the app's settings"
      class="
        mx-1
        text-decoration-none
        d-flex
        flex-column
        align-items-center
      "
    >
      <font-awesome-icon
        class="mr-1 align-middle"
        :icon="['fas', 'cog']"
        size="3x"
      />
      <span class="h6 pt-2 my-0">Settings</span>
    </a>


  </div>
</template>

<script>
export default {
  name: "settings-button",
  created () {
    console.log('[created] SettingsButton')
  }
};
</script>

<style scoped>
a, a:visited {
  color: white;
}

a:hover, a:active {
  color: var(--spanish-yellow);
}
</style>