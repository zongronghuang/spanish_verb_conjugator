<template>
  <div class="">
    <a
      href=""
      class="
        text-decoration-none text-white
        d-flex
        align-items-center
        justify-content-center
        border
      "
      @click.prevent.stop="showDiagnosisDialog"
    >
      <font-awesome-icon
        class="mr-1 align-middle"
        :icon="['fas', 'notes-medical']"
        size="2x"
        :style="{ color: 'white' }"
      />
      Report
    </a>
    <dialog ref="diagnosisDialog" class="w-50">
      <header>
        <span>Diagnosis</span>
        <a href="" class="text-decoration-none">
          <font-awesome-icon
            :icon="['fas', 'window-close']"
            size="1x"
            :style="{ color: 'white' }"
            class="float-right"
            @click.prevent.stop="closeDiagnosisDialog"
          />
        </a>
      </header>
      <hr />
      <p>Find the 10 most searched verbs in the last 7 days of use.</p>
      <section>
        <div
          class="d-flex justify-content-start flex-wrap"
          @click.prevent.stop="updateBtnAndLocalStorageCounts"
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
    </dialog>
  </div>
</template>

<script>
export default {
  name: "diagnosis-button",
  data() {
    return {
      mostSearchedVerbs: [],
      verbParam: "",
    };
  },
  created() {
    this.getVerbCounts();
    this.verbParam = this.$route.params.infinitive;
  },
  methods: {
    showDiagnosisDialog() {
      this.$refs.diagnosisDialog.showModal();
    },
    closeDiagnosisDialog() {
      this.$refs.diagnosisDialog.close();
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
    updateBtnAndLocalStorageCounts(event) {
      if (!event.target.classList.contains("btn")) return;

      const verb = event.target.dataset.verb;

      // 動詞和目前路徑的動詞 param 不一樣才可以更新次數
      // 因為 param 和動詞一樣時，beforeRouteUpdate 不會作用 => 畫面更新但 localStorage 不更新
      const updatedmostSearchedVerbs = this.mostSearchedVerbs.map((entry) => {
        const updateCondition = entry[0] === verb && verb !== this.verbParam;
        if (updateCondition) {
          entry[1] = entry[1] + 1;
        }
        return entry;
      });

      this.verbParam = this.$route.params.infinitive;
      this.mostSearchedVerbs = [...updatedmostSearchedVerbs];
    },
  },
};
</script>

<style scoped>
dialog {
  background-color: lightgray;
}
</style>