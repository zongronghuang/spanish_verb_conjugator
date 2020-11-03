<template>
  <nav class="nav d-flex justify-content-around border py-2">
    <!-- 字表選單 -->
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        字彙表
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">我的字彙表</a>
        <a class="dropdown-item" href="#">預設字表 1</a>
        <a class="dropdown-item" href="#">預設字表 2</a>
      </div>
    </div>

    <!-- 使用模式選單 -->
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        使用模式
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">查詢</a>
        <a class="dropdown-item" href="#">記憶</a>
        <a class="dropdown-item" href="#">填空</a>
      </div>
    </div>

    <!-- 主題模式 -->
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        主題
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">深色模式</a>
        <a class="dropdown-item" href="#">預設</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "control-panel",
};
</script>

<style scoped>
</style>