<template>
  <div
    class="fixed-bottom d-flex w-100 mb-1"
    @click="selectTense"
    id="tense-menu"
  >
    <!-- Indicative 語氣時態選項 -->
    <div
      class="btn-group dropup flex-grow-1 ml-1"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        class="btn btn-primary border border-white font-weight-bold"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Indicative
      </button>

      <!-- 時態選項 -->
      <div class="dropdown-menu w-100 text-center py-0 bg-info">
        <router-link
          class="dropdown-item border border-light font-weight-bold"
          :id="tense"
          :to="`/spanish-conjugator/${verb.infinitive}`"
          v-for="tense in indicativeTenses"
          :key="tense.id"
          >{{ tense | removeMood }}</router-link
        >
      </div>
    </div>

    <!-- Imperative 語氣時態選項 -->
    <div
      class="btn-group dropup flex-grow-1 mx-1"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        class="btn btn-primary border border-white font-weight-bold"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Imperative
      </button>

      <!-- 時態選項 -->
      <div class="dropdown-menu w-100 text-center py-0 bg-info">
        <router-link
          class="dropdown-item border border-light font-weight-bold"
          :id="tense"
          :to="`/spanish-conjugator/${verb.infinitive}`"
          v-for="tense in imperativeTenses"
          :key="tense.id"
          >{{ tense | removeMood }}</router-link
        >
      </div>
    </div>

    <!-- Subjunctive 語氣時態選項 -->
    <div
      class="btn-group dropup flex-grow-1 mr-1"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        class="btn btn-primary border border-white font-weight-bold"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Subjunctive
      </button>

      <!-- 時態選項 -->
      <div class="dropdown-menu w-100 text-center py-0 bg-info">
        <router-link
          class="dropdown-item border border-light font-weight-bold"
          :id="tense"
          :to="`/spanish-conjugator/${verb.infinitive}`"
          v-for="tense in subjunctiveTenses"
          :key="tense.id"
          >{{ tense | removeMood }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "tense-menu",
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
    selectTense(event) {
      if (event.target.tagName === "A") {
        const moodAndTense_english = event.target.id.split(" ");
        let mood_english = "";
        let tense_english = "";

        // 取得 mood 和 tense 的英文名稱
        // Imperative 的 mood 和 tense 名稱組合方式不同
        if (moodAndTense_english[0] === "Imperative") {
          mood_english = `${moodAndTense_english[0]} ${moodAndTense_english[1]}`;
          tense_english = moodAndTense_english[2];
        } else {
          mood_english = moodAndTense_english[0];
          moodAndTense_english.shift();
          tense_english = moodAndTense_english.join(" ");
        }

        // 找到符合 mood 和 tense 的動詞變化
        const selectedConjugations = this.verb.allConjugations.filter(
          (conjugation) =>
            conjugation.mood_english === mood_english &&
            conjugation.tense_english === tense_english
        );

        // 取得 mood 和 tense 的西班牙文名稱
        const mood = selectedConjugations[0].mood;
        const tense = selectedConjugations[0].tense;

        this.$store.commit("setMoodAndTense", {
          mood,
          tense,
          mood_english,
          tense_english,
        });

        console.log(
          "selected conjugations in TenseCategories",
          selectedConjugations
        );

        this.$emit("fetch-selected-conjugations", selectedConjugations);
      }
    },
  },
  computed: {
    ...mapState(["verb"]),
  },
};
</script>

<style scoped>
</style>