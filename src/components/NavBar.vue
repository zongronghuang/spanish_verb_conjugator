<template>
  <nav class="fixed-top nav py-2 bg-primary d-flex justify-content-around">
    <!-- 常見不規則動詞列表 -->
    <IrregularInfinitiveList v-show="isIrregularInfinitiveListVisible" />

    <!-- 搜尋欄 -->
    <SearchBar />

    <!-- 使用模式選單 -->
    <UseModeMenu @update-use-mode="updateUseMode" />
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import IrregularInfinitiveList from "./subcomponents/IrregularInfinitiveList.vue";
import UseModeMenu from "./subcomponents/UseModeMenu.vue";

export default {
  name: "nav-bar",
  components: {
    SearchBar,
    IrregularInfinitiveList,
    UseModeMenu,
  },
  methods: {
    updateUseMode(mode) {
      this.$emit("update-use-mode", mode);
    },
  },
};
</script>

<style scoped>
nav {
  min-width: 800px;
}
</style>

