<template>
  <section class="border border-danger">
    <ul class="w-100 d-flex flex-column px-0">
      <li
        class="text-center border border-primary"
        v-for="(verb, index) in irregularVerbs"
        :key="index"
        :title="verb"
      >
        <router-link :to="{ path: 'search', query: { verb } }">{{
          irregularVerbs[index]
        }}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "irregular-verb-list",
  data() {
    return {
      irregularVerbs: [
        "ser",
        "estar",
        "haber",
        "tener",
        "poder",
        "hacer",
        "decir",
        "ir",
        "ver",
        "parecer",
        "dar",
        "saber",
        "querer",
        "seguir",
        "jugar",
        "encontrar",
        "salir",
        "conocer",
        "pensar",
        "poner",
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
section {
  position: absolute;
  top: 60px;
  left: 20px;
  cursor: pointer;
}

li {
  list-style-type: none;
  list-style-position: outside;
}

li:hover {
  background-color: lightgray;
}
</style>



