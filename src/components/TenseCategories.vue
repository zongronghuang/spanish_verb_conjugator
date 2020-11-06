<template>
  <div class="d-flex">
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
          v-for="tense in indicativeTenses"
          :key="tense.id"
          >{{ tense }}</a
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
          v-for="tense in conditionalTenses"
          :key="tense.id"
          >{{ tense }}</a
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
          v-for="tense in imperativeTenses"
          :key="tense.id"
          >{{ tense }}</a
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
          v-for="tense in subjunctiveTenses"
          :key="tense.id"
          >{{ tense }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tense-categories",
  data() {
    return {
      indicativeTenses: [
        "Present",
        "Preterite",
        "Imperfect",
        "Future",
        "Perfect",
        "Pluperfect",
        "Preterite perfect",
        "Future perfect",
      ],
      conditionalTenses: ["Present", "Perfect"],
      imperativeTenses: ["Affirmative", "Negative"],
      subjunctiveTenses: [
        "Present",
        "Preterite",
        "Imperfect",
        "Future",
        "Perfect",
        "Pluperfect",
        "Preterite perfect",
        "Future perfect",
      ],
    };
  },
};
</script>

<style scoped>
</style>