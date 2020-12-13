<template>
  <div class="d-flex" @click="selectTense">
    <div
      class="btn-group dropup flex-grow-1"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        class="btn btn-primary rounded-0"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Indicative
      </button>
      <div class="dropdown-menu w-100 text-center">
        <!-- Dropdown menu links -->
        <a
          class="dropdown-item"
          href="#"
          :id="tense"
          v-for="tense in indicativeTenses"
          :key="tense.id"
          >{{ tense | removeMood }}</a
        >
      </div>
    </div>

    <div
      class="btn-group dropup flex-grow-1"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        class="btn btn-primary rounded-0"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Imperative
      </button>
      <div class="dropdown-menu w-100 text-center">
        <!-- Dropdown menu links -->
        <a
          class="dropdown-item"
          href="#"
          :id="tense"
          v-for="tense in imperativeTenses"
          :key="tense.id"
          >{{ tense | removeMood }}</a
        >
      </div>
    </div>

    <div
      class="btn-group dropup flex-grow-1"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        class="btn btn-primary rounded-0"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Subjunctive
      </button>
      <div class="dropdown-menu w-100 text-center">
        <!-- Dropdown menu links -->
        <a
          class="dropdown-item"
          href="#"
          :id="tense"
          v-for="tense in subjunctiveTenses"
          :key="tense.id"
          >{{ tense | removeMood }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "tense-categories",
  filters: {
    removeMood(tense) {
      const newTense = tense.split(" ");
      newTense.shift();
      const name = newTense.join(" ");

      console.log("new name", name);
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
      imperativeTenses: ["Imperative Affirmative", "Imperative Negative"],
      subjunctiveTenses: [
        "Subjunctive Present",
        "Subjunctive Imperfect",
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
        // 取得時態和語氣的英文名稱
        const moodAndTense_english = event.target.id.split(" ");
        const mood_english = moodAndTense_english[0];
        moodAndTense_english.shift();
        const tense_english = moodAndTense_english.join(" ");

        // 找到符合指定時態和語氣的動詞變化
        const conjugationSet = this.verb.allConjugations.filter(
          (conjugation) =>
            conjugation.mood_english === mood_english &&
            conjugation.tense_english === tense_english
        );

        // 取得時態和語氣的西班牙文名稱
        const mood = conjugationSet[0].mood;
        const tense = conjugationSet[0].tense;

        this.$store.commit("setMoodAndTense", {
          mood,
          tense,
          mood_english,
          tense_english,
        });

        this.$emit("fetch-conjugation-set", conjugationSet);
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