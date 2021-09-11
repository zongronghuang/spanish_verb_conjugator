<template>
  <div>
    <a
      href=""
      class="
        text-decoration-none text-white
        d-flex
        align-items-center
        justify-content-center
      "
      title="View the Spanish verbs that you've searched most"
      @click.prevent.stop="showReportDialog"
    >
      <font-awesome-icon
        class="mr-3 align-middle"
        :icon="['fas', 'notes-medical']"
        size="2x"
        :style="{ color: 'white' }"
      />
      <span class="h5 py-0 my-0">Report</span>
    </a>

    <!-- 統計次數對話框 -->
    <dialog ref="reportDialog" class="w-50 rounded-lg px-0 py-0">
      <header class="text-center py-2 px-1 w-100">
        <span class="h5 align-middle font-weight-bold">Report</span>
        <a
          href=""
          class="text-decoration-none float-right"
          @click.prevent.stop="closeReportDialog"
        >
          <font-awesome-icon :icon="['fas', 'window-close']" size="1x" />
        </a>
      </header>

      <!-- 最常搜尋動詞選單 -->
      <section class="px-3 py-2 bg-light">
        <p class="text-left">
          Find the 10 most searched verbs in the last 7 days of use.
        </p>
        <div class="d-flex justify-content-between flex-wrap flex-row w-100">
          <router-link
            class="btn btn-primary mx-1 my-1"
            v-for="verbEntry in mostSearchedVerbs"
            :key="verbEntry[0]"
            :data-verb="verbEntry[0]"
            :to="`/spanish-conjugator/${verbEntry[0]}`"
          >
            {{ verbEntry[0] }}
            <span class="badge badge-warning">{{ verbEntry[1] }}</span>
          </router-link>
        </div>
      </section>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "report-button",
  props: {
    lastSearchTime: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      mostSearchedVerbs: [],
      currentVerbParam: "",
    };
  },
  created() {
    console.log("[created] ReportButton");
    this.getVerbCounts();
    this.currentVerbParam = this.$route.params.infinitive;
  },
  methods: {
    showReportDialog() {
      this.$refs.reportDialog.showModal();
    },
    closeReportDialog() {
      this.$refs.reportDialog.close();
    },
    getVerbCounts() {
      // 計算所有天數的動詞查詢總數
      const verbCounts = JSON.parse(localStorage.getItem("history"))
        .map((item) => item[1]) // 移除日期，留下 {verb: count, ...}
        .reduce((base, item) => {
          const entries = Object.entries(item);

          for (const entry of entries) {
            const verb = entry[0];
            const count = entry[1];
            if (base[verb] > 0) {
              base[verb] = base[verb] + count;
            } else {
              base[verb] = count;
            }
          }
          return base;
        });

      // 最多取 10 個最常查詢的動詞，從次數高排到次數低
      const maxVerbsToShow = 10;
      const mostSearchedVerbs = Object.entries(verbCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, maxVerbsToShow);

      this.mostSearchedVerbs = [...mostSearchedVerbs];
    },
  },
  watch: {
    lastSearchTime: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue > oldValue) {
          console.log("[watch] ReportButton");
          this.getVerbCounts();
        }
      },
    },
  },
};
</script>

<style scoped>
dialog > header {
  background-image: linear-gradient(
    45deg,
    var(--spanish-red),
    var(--spanish-yellow)
  );
}

dialog {
  border-width: 0px;
}

dialog svg {
  color: var(--spanish-red);
}
</style>