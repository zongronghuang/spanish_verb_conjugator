<template>
  <div>
    <nav class="nav py-2 bg-primary d-flex justify-content-between">
      <!-- 常見不規則動詞列表 -->
      <div
        class="w-25 text-white d-flex align-items-center justify-content-center"
        id="irregular-infinitive-list"
        title="Top irregular verbs"
        @click.prevent.stop="toggleIrregularInfinitiveListVisibility"
      >
        <font-awesome-icon :icon="['fas', 'clipboard-list']" size="2x" />
        <span class="ml-2">Top irregular verbs</span>
      </div>

      <!-- 最常見的 20 個不規則動詞列表 -->
      <IrregularInfinitiveList v-show="isIrregularInfinitiveListVisible" />

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
import IrregularInfinitiveList from "./IrregularInfinitiveList.vue";

export default {
  name: "nav-bar",
  components: {
    SearchBar,
    IrregularInfinitiveList,
  },
  data() {
    return {
      mode: "view",
      isIrregularInfinitiveListVisible: false,
    };
  },
  methods: {
    toggleIrregularInfinitiveListVisibility() {
      this.isIrregularInfinitiveListVisible =
        !this.isIrregularInfinitiveListVisible;
    },
  },
};
</script>

<style scoped>
#mode-menu,
#irregular-infinitive-list {
  width: 15%;
  min-width: 10%;
}

#irregular-infinitive-list {
  cursor: pointer;
}
</style>

