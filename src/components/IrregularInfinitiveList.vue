<template>
  <section class="py-0 border bg-light shadow">
    <ul class="w-100 d-flex flex-column px-0 my-0">
      <li
        class="h5 text-dark text-center my-0"
        v-for="(infinitive, index) in irregularInfinitives"
        :key="index"
        :title="infinitive"
      >
        <router-link
          class="my-0 text-decoration-none"
          :to="{ name: 'main-page', params: { infinitive } }"
          >{{ irregularInfinitives[index] }}</router-link
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "irregular-infinitive-list",
  data() {
    return {
      irregularInfinitives: [
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
  left: 7%;
  z-index: 99;

  width: 150px;

  /* border-right: 2px solid blue;
  border-left: 2px solid blue;
  border-bottom: 2px solid blue; */
  border-radius: 5px;
  cursor: pointer;
}

li {
  list-style-type: none;
  list-style-position: outside;
}

li:hover {
  background-color: lightgray;
}

a {
  height: 100%;
  line-height: 2rem;
}
</style>



