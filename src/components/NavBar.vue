<template>
  <nav
    class="
      fixed-top
      nav
      py-2
      bg-primary
      d-flex
      flex-row flex-nowrap
      justify-content-around
    "
  >
    <!-- 常見不規則動詞列表 -->
    <IrregularVerbsButton />

    <!-- 搜尋欄 -->
    <SearchBar />

    <!-- App 設定按鍵 -->
    <SettingsButton />
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import IrregularVerbsButton from "./subcomponents/IrregularVerbsButton.vue";
import SettingsButton from "./SettingsButton.vue";

export default {
  name: "nav-bar",
  components: {
    SearchBar,
    IrregularVerbsButton,
    SettingsButton,
  },
  methods: {},
};
</script>

<style scoped>
nav {
  min-width: 750px;
}
</style>

