<template>
  <div
    class="modal fade"
    id="settingsDialog"
    tabindex="-1"
    aria-labelledby="settingsModalDialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="settingsModalDialog">App settings</h5>
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
          <section class="px-3 py-3 bg-light">
            <p class="text-left">
              Choose how to practice with the verbal conjugations.
            </p>
            <div class="w-100 d-flex flex-row align-items-center pb-2">
              <span class="w-25 text-left font-weight-bold">Use mode</span>
              <div
                class="
                  w-75
                  btn-group
                  d-flex
                  justify-content-between
                  float-right
                "
                ref="useModes"
                role="group"
                @click.stop.prevent="(e) => fetchUseMode(e) || closeModal(e)"
              >
                <button
                  :class="
                    configs.useMode === 'view'
                      ? 'btn btn-primary active'
                      : 'btn btn-primary'
                  "
                  value="view"
                  title="View verb conjugations by person, mood, and tense."
                >
                  View
                </button>
                <button
                  :class="
                    configs.useMode === 'memory'
                      ? 'btn btn-primary active'
                      : 'btn btn-primary'
                  "
                  value="memory"
                  title="Flip the table to test your memory."
                >
                  Flash card
                </button>
                <button
                  :class="
                    configs.useMode === 'fill-in'
                      ? 'btn btn-primary active'
                      : 'btn btn-primary'
                  "
                  value="fill-in"
                  title="Enter your answers in the table and verify the result."
                >
                  Fill-in
                </button>
              </div>
            </div>
          </section>

          <hr class="my-0" />

          <!-- mood 選單 -->
          <section class="px-3 py-3 bg-light">
            <p class="text-left">
              Choose a conjugation of the verb by mood and tense.
            </p>
            <div class="w-100 d-flex flex-row align-items-center">
              <span class="w-25 text-left font-weight-bold">Mood & tense</span>
              <div
                class="
                  btn-group
                  d-flex
                  w-75
                  justify-content-between
                  float-right
                "
                role="group"
                ref="moods"
                @click.stop.prevent="fetchMood"
              >
                <button
                  :class="
                    selectedMood === 'Indicative'
                      ? 'btn btn-primary active'
                      : 'btn btn-primary'
                  "
                  type="button"
                  value="Indicative"
                >
                  Indicative
                </button>
                <button
                  :class="
                    selectedMood.includes('Imperative')
                      ? 'btn btn-primary active'
                      : 'btn btn-primary'
                  "
                  type="button"
                  value="Imperative"
                >
                  Imperative
                </button>
                <button
                  :class="
                    selectedMood === 'Subjunctive'
                      ? 'btn btn-primary active'
                      : 'btn btn-primary'
                  "
                  type="button"
                  value="Subjunctive"
                >
                  Subjunctive
                </button>
              </div>
            </div>
          </section>

          <!-- mood & tense 選單-->
          <section
            class="px-3 py-2 btn-group w-100 bg-light"
            role="group"
            ref="tenses"
            @click.stop.prevent="
              (e) => fetchTense(e) || updateCurrentConjugations(e) ||
              closeModal(e)"
          >
            <!-- indicative tenses -->
            <div
              id="indicative-tenses"
              class="d-flex justify-content-between flex-wrap flex-row w-100"
              v-if="selectedMood === 'Indicative'"
            >
              <button
                :class="
                  selectedMoodAndTense === tense
                    ? 'mx-1 my-1 btn btn-primary active'
                    : 'mx-1 my-1 btn btn-primary'
                "
                v-for="tense in indicativeTenses"
                :key="tense"
                :value="tense"
              >
                {{ tense | removeMood }}
              </button>
            </div>

            <!-- imperative tenses -->
            <div
              id="imperative-tenses"
              class="d-flex justify-content-start flex-wrap flex-row w-100"
              v-if="selectedMood.includes('Imperative')"
            >
              <button
                :class="
                  selectedMoodAndTense === tense
                    ? 'mx-1 my-1 btn btn-primary active'
                    : 'mx-1 my-1 btn btn-primary'
                "
                v-for="tense in imperativeTenses"
                :key="tense"
                :value="tense"
              >
                {{ tense | removeMood }}
              </button>
            </div>

            <!-- subjunctive tensess -->
            <div
              id="subjunctive-tenses"
              class="d-flex justify-content-between flex-wrap flex-row w-100"
              v-if="selectedMood === 'Subjunctive'"
            >
              <button
                :class="
                  selectedMoodAndTense === tense
                    ? 'mx-1 my-1 btn btn-primary active'
                    : 'mx-1 my-1 btn btn-primary'
                "
                v-for="tense in subjunctiveTenses"
                :key="tense"
                :value="tense"
              >
                {{ tense | removeMood }}
              </button>
            </div>
          </section>
        </div>
        <div class="modal-footer py-1 border-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "settings-modal",
  filters: {
    removeMood(tense) {
      const newTense = tense.split(" ");
      newTense.shift();
      const name = newTense.join(" ");
      return name;
    },
  },
  props: {
    configs: {
      type: Object,
      required: true,
    },
    verb: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mood_english: "Indicative",
      selectedMood: "Indicative",
      selectedMoodAndTense: "Indicative Present",
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
  created() {
    console.log("[created] SettingsModal");
  },
  methods: {
    fetchUseMode(event) {
      if (event.target.tagName !== "BUTTON") return;
      if (event.target.value === this.$store.state.configs.useMode) return;

      const useMode = event.target.value;
      this.$store.commit("setConfigs", { useMode });
    },
    fetchMood(event) {
      if (event.target.tagName !== "BUTTON") return;
      const mood = event.target.value;
      this.selectedMood = mood;
    },
    fetchTense(event) {
      if (event.target.tagName !== "BUTTON") return;

      const value = event.target.value; // 按鍵的值，帶有 mood 和 tense
      this.selectedMoodAndTense = value;

      // 針對 Imperative mood 做處理
      if (value.includes("Imperative Affirmative"))
        this.selectedMood = "Imperative Affirmative";
      if (value.includes("Imperative Negative"))
        this.selectedMood = "Imperative Negative";

      const tense = value.substring(this.selectedMood.length).trim();

      this.$store.commit("setConfigs", {
        mood_english: this.selectedMood,
        tense_english: tense,
      });
    },
    updateCurrentConjugations() {
      const { mood_english, tense_english } = this.$store.state.configs;

      // Data structure: {...}
      const currentConjugations = this.$store.state.verb.allConjugations.find(
        (group) =>
          group.mood_english === mood_english &&
          group.tense_english === tense_english
      );

      this.$store.commit("setVerbData", currentConjugations);
    },
    closeModal(event) {
      if(event.target.tagName !== 'BUTTON') return

      const dialog = $('#settingsDialog')
      dialog.modal('hide')
    }
  },
  watch: {
    verb: {
      handler: function (newValue) {
        const { mood_english, tense_english } = newValue;
        this.selectedMood = mood_english;
        this.selectedMoodAndTense = mood_english + " " + tense_english;
      },
    },
  },
};
</script>

<style scoped>
.active {
  background-color: var(--spanish-yellow) !important;
  color: black !important;
}
</style>