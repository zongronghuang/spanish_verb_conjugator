<template>
  <div id="main-page" class="main-page d-flex flex-column justify-content-between">
    <NavBar />

    <div class="main-display flex-grow-1">
      <ConjugationTable
        :mode="mode"
        :selectedConjugations="selectedConjugations"
      />
    </div>

    <footer
      class="main-footer d-flex justify-content-between w-100"
      v-if="configs.useMode !== 'fill-in'"
    >
      <LeftArrow />
      <RightArrow />
    </footer>

    <!-- modals -->
    <VerbInfoModal :verb="verb" />
    <SlideMenuModal />
    <RandomSpinnerModal />
    <IrregularVerbsModal />
    <ReportModal :lastSearchTime="lastSearchTime" />
    <SettingsModal :configs="configs" :verb="verb" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ConjugationTable from "../components/ConjugationTable.vue";
import LeftArrow from "../components/arrows/LeftArrow.vue";
import RightArrow from "../components/arrows/RightArrow.vue";
import VerbInfoModal from "../components/modals/VerbInfoModal.vue";
import RandomSpinnerModal from "../components/modals/RandomSpinnerModal.vue";
import IrregularVerbsModal from "../components/modals/IrregularVerbsModal.vue";
import ReportModal from "../components/modals/ReportModal.vue";
import SettingsModal from "../components/modals/SettingsModal.vue";
import SlideMenuModal from '../components/modals/SlideMenuModal.vue'

import { mapState } from "vuex";
import { collectSearchedVerbToLocalStorage } from "../utils/mixins.js";
import datasetAPIs from "../utils/dataset.js";

export default {
  name: "main-page",
  components: {
    NavBar,
    ConjugationTable,
    LeftArrow,
    RightArrow,
    VerbInfoModal,
    RandomSpinnerModal,
    IrregularVerbsModal,
    ReportModal,
    SettingsModal,
    SlideMenuModal,
  },
  mixins: [collectSearchedVerbToLocalStorage],
  data() {
    return {
      mode: "view",
      selectedConjugations: [],
      history: [],
      lastSearchTime: "",
    };
  },
  // 未進入 app，直接輸入帶有 infinitive param 的 URL 的處理方法
  created() {
    console.log("[created] MainPage");

    // 取得搜尋的 infinitive 所有動詞變化
    const { infinitive } = this.$route.params;

    const conjugations = datasetAPIs.getAllConjugationsByVerb(
      infinitive,
      this.infinitives
    );

    // 如果 infinitive 存在 => 取出動詞變化放到 vuex 中，顯示 indicative present
    // 如果 infinitive 不存在 => 重新導向至 search page
    if (conjugations.length > 0) {
      this.$store.commit("setVerbData", {
        ...conjugations[0],
        allConjugations: conjugations,
      });
      this.collectSearchedVerbToLocalStorage(infinitive);
      this.lastSearchTime = Date.now();
    } else {
      this.$router.push("/search");
    }
  },
  // 進入 app 後，直接修改 URL 的 verb param 的處理方法
  beforeRouteUpdate(to, from, next) {
    console.log("[beforeRouteUpdate] MainPage");
    const { infinitive } = to.params;

    // 取得 infinitive 的所有動詞變化
    const conjugations = datasetAPIs.getAllConjugationsByVerb(
      infinitive,
      this.infinitives
    );

    // 如果存在指定的 infinitive => 取出動詞變化放到 vuex 中，顯示 indicative present
    // 如果 infinitive 不存在 => 重新導向至 search page
    if (conjugations.length > 0) {
      this.$store.commit("setVerbData", {
        ...conjugations[0],
        allConjugations: conjugations,
      });
      this.collectSearchedVerbToLocalStorage(infinitive);
      this.lastSearchTime = Date.now();
    } else {
      this.$router.push("/search");
    }

    next();
  },
  computed: {
    ...mapState(["infinitives", "verb", "configs"]),
  },
};
</script>

<style scoped>
.main-page {
  height: 100vh;
  width: 100vw;
}

.main-display {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--spanish-yellow);
}

.main-footer {
  height: 7vh;
  background-color: var(--spanish-yellow);
}
</style>