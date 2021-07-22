<template>
  <div>
    <nav class="nav py-2 bg-primary d-flex justify-content-between">
      <!-- Logo -->
      <div
        class="ml-2 text-white d-flex align-items-center justify-content-center"
        id="logo"
        title="Top 20 irregular verbs"
        @click.prevent.stop=""
      >
        <font-awesome-icon :icon="['fas', 'clipboard-list']" size="2x" />
        <span class="ml-2">Top 20 verbs</span>
      </div>

      <!-- 最常見的 20 個不規則動詞列表 -->
      <IrregularVerbList />

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
import IrregularVerbList from "./IrregularVerbList.vue";

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
    IrregularVerbList,
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

