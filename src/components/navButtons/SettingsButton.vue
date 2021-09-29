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
        text-decoration-none text-white
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <font-awesome-icon
        class="mr-1 align-middle"
        :icon="['fas', 'cog']"
        size="2x"
        :style="{ color: 'white' }"
      />
      <span class="h5 py-0 my-0">Settings</span>
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
</style>