<template>
  <nav class="nav d-flex justify-content-around py-2">
    <!-- 使用模式選單 -->
    <select
      class="custom-select custom-select-lg w-25 text-white bg-primary"
      v-model="mode"
      @change.prevent.stop="$emit('change-mode', mode)"
    >
      <option value="0" :selected="mode === '1'">查詢</option>
      <option value="1" :selected="mode === '2'">記憶</option>
      <option value="2" :selected="mode === '3'">填空</option>
    </select>

    <!-- 主題模式 -->
    <select
      class="custom-select custom-select-lg w-25 text-white bg-primary"
      v-model="theme"
      @change.prevent.stop="$emit('change-theme', theme)"
    >
      <option value="0" :selected="theme === '1'">預設</option>
      <option value="1" :selected="theme === '2'">深色</option>
    </select>

    <!-- 回到搜尋頁 -->
    <router-link to="/search" class="btn btn-success d-flex align-items-center"
      ><span>重新搜尋</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "control-panel",
  data() {
    return {
      mode: 0,
      theme: 0,
    };
  },
};
</script>

<style scoped>
</style>