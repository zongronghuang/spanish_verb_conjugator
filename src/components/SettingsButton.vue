<template>
  <div class="flex-grow-1 text-center">
    <!-- 設定按鈕 -->
    <a href="" class="text-decoration-none">
      <font-awesome-icon
        :icon="['fas', 'cog']"
        size="2x"
        :style="{ color: 'white' }"
        @click.prevent.stop="showSettingsDialog"
      />
    </a>

    <!-- 設定對話框 -->
    <dialog ref="settingsDialog">
      <header>
        <span>Settings</span>
        <a href="" class="text-decoration-none">
          <font-awesome-icon
            :icon="['fas', 'window-close']"
            size="2x"
            :style="{ color: 'white' }"
            class="float-right"
            @click.prevent.stop="closeSettingsDialog"
          />
        </a>
      </header>
      <hr />
      <section class="d-flex flex-row" @click.stop.prevent="setUseMode">
        <span class="">Use mode</span>
        <button value="view">View</button>
        <button value="memory">Flash card</button>
        <button value="fill-in">Fill-in</button>
      </section>
      <section class="d-flex flex-row" @click.stop.prevent="setMood">
        <span>Mood</span>
        <button value="indicative">Indicative</button>
        <button value="imperative">Imperative</button>
        <button value="subjunctive">Subjunctive</button>
      </section>
      <section
        class="
          border
          d-flex
          flex-wrap
          justify-content-around
          align-items-center
        "
        @click.stop.prevent="setTense"
      >
        <!-- 顯示 tense buttons -->
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
      </section>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "settings-buttons",
  data() {
    return {
      indicativeTenses: [
        "Indicative Present",
        "Indicative Future",
        "Indicative Imperfect",
        "Indicative Preterite",
        "Indicative Conditional",
        "Indicative Present Perfect",
        "Indicative Future Perfect",
        "Indicative Past Perfect",
        "Indicative Preterite (Archaic)",
        "Indicative Conditional Perfect",
      ],
      imperativeTenses: [
        "Imperative Affirmative Present",
        "Imperative Negative Present",
      ],
      subjunctiveTenses: [
        "Subjunctive Present",
        "Subjunctive Imperfect",
        "Subjunctive Imperfect 2",
        "Subjunctive Future",
        "Subjunctive Present Perfect",
        "Subjunctive Future Perfect",
        "Subjunctive Past Perfect",
      ],
    };
  },
  methods: {
    showSettingsDialog() {
      this.$refs.settingsDialog.showModal();
    },
    closeSettingsDialog() {
      this.$refs.settingsDialog.close();
    },
    setUseMode(event) {
      if (event.target.tagName !== "BUTTON") return;
      if (event.target.value === this.$store.state.configs.useMode) return;

      const useMode = event.target.value;
      this.$store.commit("setUseMode", useMode);
    },
    setMood(event) {
      if (event.target.tagName !== "BUTTON") return;
      if (event.target.value === this.$store.state.configs.mood) return;

      const mood = event.target.value;
      console.log({ mood });
      this.$store.commit("setMood", mood);
    },
    setTense(event) {
      if (event.target.tagName !== "BUTTON") return;
      if (event.target.value === this.$store.state.configs.tense) return;

      const tense = event.target.value;
      console.log({ tense });
      this.$store.commit("setTense", tense);
    },
  },
  computed: {},
};
</script>

<style scoped>
dialog {
  background-color: red;
}
</style>