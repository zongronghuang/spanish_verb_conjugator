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
        Conditional
      </button>
      <div class="dropdown-menu w-100 text-center">
        <!-- Dropdown menu links -->
        <a
          class="dropdown-item"
          href="#"
          :id="tense"
          v-for="tense in conditionalTenses"
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
      tense: "Indicative Present",
      indicativeTenses: [
        "Indicative Present",
        "Indicative Preterite ",
        "Indicative Imperfect",
        "Indicative Future",
        "Indicative Perfect",
        "Indicative Pluperfect",
        "Indicative Preterite perfect",
        "Indicative Future perfect",
      ],
      conditionalTenses: ["Conditional Present", "Conditional Perfect"],
      imperativeTenses: ["Imperative Affirmative", "Imperative Negative"],
      subjunctiveTenses: [
        "Subjunctive Present",
        "Subjunctive Preterite",
        "Subjunctive Imperfect",
        "Subjunctive Future",
        "Subjunctive Perfect",
        "Subjunctive Pluperfect",
        "Subjunctive Preterite perfect",
        "Subjunctive Future perfect",
      ],
    };
  },
  methods: {
    selectTense(event) {
      if (event.target.tagName === "A") {
        this.tense = event.target.id;
        console.log("new tense", this.tense);
        this.$emit("selected-tense", this.tense);
      }
    },
  },
};
</script>

<style scoped>
</style>