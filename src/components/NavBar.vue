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
    <div class="d-flex justify-content-around flex-row w-25 border">
      <!-- 常見不規則動詞列表 -->
      <IrregularVerbsButton />

      <!-- 隨選動詞按鈕 -->
      <RandomVerbButton />
    </div>

    <!-- 搜尋欄 -->
    <SearchBar />

    <div class="d-flex justify-content-around flex-row w-25 border">
      <ReportButton :lastSearchTime="lastSearchTime" />
      <!-- App 設定按鍵 -->
      <SettingsButton />
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import IrregularVerbsButton from "./IrregularVerbsButton.vue";
import SettingsButton from "./SettingsButton.vue";
import ReportButton from "./ReportButton.vue";
import RandomVerbButton from "./RandomVerbButton.vue";

export default {
  name: "nav-bar",
  components: {
    SearchBar,
    IrregularVerbsButton,
    SettingsButton,
    ReportButton,
    RandomVerbButton,
  },
  props: {
    lastSearchTime: {
      type: Number,
      required: true,
    },
  },
  created() {
    console.log("[created] NavBar");
  },
};
</script>

<style scoped>
nav {
  min-width: 750px;
}
</style>

