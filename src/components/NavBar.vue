<template>
  <div>
    <nav class="nav py-2 bg-primary d-flex justify-content-between">
      <!-- Logo -->
      <div
        class="ml-2 text-white d-flex justify-content-center"
        id="logo"
        title="動詞詳細資料"
      >
        <font-awesome-icon :icon="['fas', 'user-ninja']" size="3x" />
      </div>
      <!-- 
         用 modal 顯示附加資料：英文翻譯、gerund、participle 和 API 例句
      -->

      <!-- 搜尋欄 -->
      <SearchBar />

      <!-- 使用模式選單 -->
      <div id="mode-menu" class="mt-1 mr-2">
        <select
          class="custom-select text-white bg-primary"
          v-model="mode"
          @change.prevent.stop="$emit('change-mode', mode)"
        >
          <option value="view" :selected="mode === 'view'">View</option>
          <option value="memory" :selected="mode === 'memory'">Memory</option>
          <option value="fill-in" :selected="mode === 'fill-in'">
            Fill-in
          </option>
        </select>
      </div>
    </nav>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  name: "nav-bar",
  data() {
    return {
      mode: "view",
      theme: 0,
    };
  },
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
#mode-menu,
#logo {
  width: 15%;
  min-width: 10%;
}
</style>