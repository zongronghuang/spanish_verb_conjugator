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
    <dialog ref="settingsDialog" class="container font-weight-bold">
      <header>
        <span class="h4">Settings</span>
        <a href="" class="text-decoration-none">
          <font-awesome-icon
            :icon="['fas', 'window-close']"
            size="1x"
            :style="{ color: 'white' }"
            class="float-right"
            @click.prevent.stop="closeSettingsDialog"
          />
        </a>
      </header>

      <hr />
      <!-- use mode 選單 -->
      <section class="d-flex flex-row border align-items-center">
        <span class="w-25 text-left pl-1">Use mode</span>
        <div
          class="w-75 btn-group d-flex justify-content-between float-right"
          role="group"
          @click.stop.prevent="setUseMode"
        >
          <button class="btn btn-primary font-weight-bold" value="view">
            View
          </button>
          <button class="btn btn-primary font-weight-bold" value="memory">
            Flash card
          </button>
          <button class="btn btn-primary font-weight-bold" value="fill-in">
            Fill-in
          </button>
        </div>
      </section>

      <!-- mood 選單 -->
      <section class="d-flex flex-row border align-items-center">
        <span class="w-25 text-left pl-1">Mood</span>
        <div
          class="btn-group d-flex w-75 justify-content-between float-right"
          role="group"
          @click.stop.prevent="setMood"
        >
          <button class="btn btn-primary font-weight-bold" value="indicative">
            Indicative
          </button>
          <button class="btn btn-primary font-weight-bold" value="imperative">
            Imperative
          </button>
          <button class="btn btn-primary font-weight-bold" value="subjunctive">
            Subjunctive
          </button>
        </div>
      </section>

      <!-- tense 選單-->
      <section
        class="border btn-group w-100"
        role="group"
        @click.stop.prevent="setTense"
      >
        <!-- indicative tenses -->
        <div
          id="indicative-tenses"
          class="d-flex justify-content-between flex-wrap flex-row"
          v-if="configs.mood === 'indicative'"
        >
          <button
            class="mx-2 my-2 btn btn-primary font-weight-bold"
            v-for="tense in indicativeTenses"
            :key="tense"
            :value="tense"
            :title="tense"
          >
            {{ tense | removeMood }}
          </button>
        </div>

        <!-- imperative tenses -->
        <div
          id="imperative-tenses"
          class="d-flex justify-content-between flex-wrap flex-row w-100"
          v-if="configs.mood === 'imperative'"
        >
          <button
            class="mx-2 my-2 btn btn-primary font-weight-bold"
            v-for="tense in imperativeTenses"
            :key="tense"
            :value="tense"
            :title="tense"
          >
            {{ tense | removeMood }}
          </button>
        </div>

        <!-- subjunctive tensess -->
        <div
          id="subjunctive-tenses"
          class="d-flex justify-content-between flex-wrap flex-row w-100"
          v-if="configs.mood === 'subjunctive'"
        >
          <button
            class="mx-2 my-2 btn btn-primary font-weight-bold"
            v-for="tense in subjunctiveTenses"
            :key="tense"
            :value="tense"
            :title="tense"
          >
            {{ tense | removeMood }}
          </button>
        </div>
      </section>
    </dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "settings-buttons",
  filters: {
    removeMood(tense) {
      const newTense = tense.split(" ");
      newTense.shift();
      const name = newTense.join(" ");
      return name;
    },
  },
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
  computed: {
    ...mapState({
      verb: (state) => state.verb,
      configs: (state) => state.configs,
    }),
  },
};
</script>

<style scoped>
dialog {
  background-color: red;
}
</style>