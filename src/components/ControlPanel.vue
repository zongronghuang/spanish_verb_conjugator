<template>
  <nav class="nav d-flex justify-content-around py-2">
    <!-- 字表選單 -->
    <select
      class="custom-select custom-select-lg w-25 text-white bg-primary"
      v-model="list"
      @change.prevent.stop="$emit('change-list', list)"
    >
      <option value="0" :selected="list === '0'">字彙表</option>
      <option value="1" :selected="list === '1'">我的字彙表</option>
      <option value="2" :selected="list === '2'">預設字表 1</option>
      <option value="3" :selected="list === '3'">預設字表 2</option>
    </select>

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
  </nav>
</template>

<script>
export default {
  name: "control-panel",
  data() {
    return {
      list: 0,
      mode: 0,
      theme: 0,
    };
  },
};
</script>

<style scoped>
</style>