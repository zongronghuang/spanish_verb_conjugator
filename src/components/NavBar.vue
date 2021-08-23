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
      <a
        href=""
        title="Get your lucky verb!"
        class="text-decoration-none text-white mx-2"
        @click.prevent.stop="pickRandomVerb"
      >
        <font-awesome-icon
          class="mr-1 align-middle"
          :icon="['fas', 'dice']"
          size="2x"
          :style="{ color: 'white' }"
        />
        Lucky verb
      </a>
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
import IrregularVerbsButton from "./subcomponents/IrregularVerbsButton.vue";
import SettingsButton from "./SettingsButton.vue";
import ReportButton from "./ReportButton.vue";

export default {
  name: "nav-bar",
  components: {
    SearchBar,
    IrregularVerbsButton,
    SettingsButton,
    ReportButton,
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
  methods: {
    pickRandomVerb() {
      const infinitives = this.$store.state.infinitives;
      const randomId = Math.floor(Math.random() * infinitives.length);
      const pickedInfinitive = infinitives[randomId];

      this.$router.push(`/spanish-conjugator/${pickedInfinitive}`);
    },
  },
};
</script>

<style scoped>
nav {
  min-width: 750px;
}
</style>

