<template>
  <div
      class="modal fade"
      id="reportDialog"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Search report</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body px-0 py-0">
            <section class="px-3 py-2 bg-light">
              <p class="text-left">
                Find the 10 most searched verbs in the last 7 days of use.
              </p>
              <div
                class="d-flex justify-content-between flex-wrap flex-row w-100"
              >
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
          </div>
          <div class="modal-footer py-1 border-0"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'report-modal',
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
    console.log("[created] ReportModal");
    this.getVerbCounts();
    this.currentVerbParam = this.$route.params.infinitive;
  },
  methods: {
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
}
</script>

<style scoped>

</style>