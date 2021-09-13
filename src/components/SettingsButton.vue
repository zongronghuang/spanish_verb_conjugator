<template>
  <div>
    <!-- 設定按鈕 -->
    <a
      href=""
      data-toggle="modal"
      data-target="#settingsDialog"
      title="View and change the app's settings"
      class="
        text-decoration-none text-white
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <font-awesome-icon
        class="mr-3 align-middle"
        :icon="['fas', 'cog']"
        size="2x"
        :style="{ color: 'white' }"
      />
      <span class="h5 py-0 my-0">Settings</span>
    </a>

    <!-- Bootstrap modal -->
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
            <section class="px-3 pt-2 bg-light">
              <p class="text-left">
                Choose a use mode or a conjugation by mood and tense for
                practice.
              </p>
              <div class="w-100 d-flex flex-row align-items-center pb-2">
                <span class="w-25 text-left font-weight-bold"
                  >Use mode</span
                >
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
                  @click.stop.prevent="fetchUseMode"
                >
                  <button class="btn btn-primary active" value="view">View</button>
                  <button class="btn btn-primary" value="memory">
                    Flash card
                  </button>
                  <button class="btn btn-primary" value="fill-in">
                    Fill-in
                  </button>
                </div>
              </div>
            </section>

            <hr class="bg-light my-0" />

            <!-- mood 選單 -->
            <section class="px-3 py-2 bg-light">
              <div class="w-100 d-flex flex-row align-items-center">
                <span class="w-25 text-left font-weight-bold"
                  >Mood & tense</span
                >
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
                    class="btn btn-primary active"
                    type="button"
                    value="Indicative"
                  >
                    Indicative
                  </button>
                  <button
                    class="btn btn-primary"
                    type="button"
                    value="Imperative"
                  >
                    Imperative
                  </button>
                  <button
                    class="btn btn-primary"
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
                (e) => fetchTense(e) || updateCurrentConjugations(e)
              "
            >
              <!-- indicative tenses -->
              <div
                id="indicative-tenses"
                class="d-flex justify-content-between flex-wrap flex-row w-100"
                v-if="mood_english === 'Indicative'"
              >
                <button
                  class="mx-1 my-1 btn btn-primary"
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
                v-if="mood_english === 'Imperative'"
              >
                <button
                  class="mx-1 my-1 btn btn-primary"
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
                v-if="mood_english === 'Subjunctive'"
              >
                <button
                  class="mx-1 my-1 btn btn-primary"
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "settings-button",
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
      mood_english: "Indicative",
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
      ]
    };
  },
  created() {
    console.log("[created] SettingsButton");
  },
  mounted() {
    // 初始化 => indicative present 按鈕加上 active class
    this.markActiveButton('tense', 'Indicative Present')
  },
  methods: {
    fetchUseMode(event) {
      if (event.target.tagName !== "BUTTON") return;
      if (event.target.value === this.$store.state.configs.useMode) return;

      const useMode = event.target.value;
      this.$store.commit("setConfigs", { useMode });

      this.markActiveButton('use mode', useMode)
    },
    fetchMood(event) {
      if (event.target.tagName !== "BUTTON") return;
      const mood_english = event.target.value
      this.mood_english = mood_english

      this.markActiveButton('mood', mood_english)
    },
    fetchTense(event) {
      if (event.target.tagName !== "BUTTON") return;

      const value = event.target.value; // 按鍵的值，帶有 mood 和 tense

      // 針對 Imperative mood 做處理
      let mood_english = this.mood_english;
      if (value.includes("Imperative Affirmative"))
        mood_english = "Imperative Affirmative";
      if (value.includes("Imperative Negative"))
        mood_english = "Imperative Negative";

      const tense_english = value.substring(mood_english.length).trim();

      this.$store.commit("setConfigs", { mood_english, tense_english });

      this.markActiveButton('tense', value) // tense button value 含有 mood 和 tense
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
    markActiveButton(type, targetValue) {
      const btnGroups = {
        'use mode': this.$refs.useModes,
        'mood': this.$refs.moods,
        'tense': this.$refs.tenses.children[0]
      }

      btnGroups[type].children.forEach(child => {
        if (child.value === targetValue) {
          child.classList.add('active')
        } else {
          child.classList.remove('active')
        }
      })
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
.active {
  background-color: var(--spanish-yellow) !important;
  color: black !important;
}
</style>