<template>
  <nav class="nav d-flex justify-content-around border py-2">
    <!-- 字表選單 -->
    <select
      class="custom-select custom-select-lg mb-3 w-25 text-white bg-primary"
    >
      <option value="0" selected>字彙表</option>
      <option value="1">我的字彙表</option>
      <option value="2">預設字表 1</option>
      <option value="3">預設字表 2</option>
    </select>

    <!-- 使用模式選單 -->
    <select
      class="custom-select custom-select-lg mb-3 w-25 text-white bg-primary"
    >
      <option value="0" selected>模式</option>
      <option value="1">查詢</option>
      <option value="2">記憶</option>
      <option value="3">填空</option>
    </select>

    <!-- 主題模式 -->
    <select
      class="custom-select custom-select-lg mb-3 w-25 text-white bg-primary"
    >
      <option value="0" selected>主題</option>
      <option value="1">預設</option>
      <option value="2">深色</option>
    </select>
  </nav>
</template>

<script>
export default {
  name: "control-panel",
};
</script>

<style scoped>
</style>