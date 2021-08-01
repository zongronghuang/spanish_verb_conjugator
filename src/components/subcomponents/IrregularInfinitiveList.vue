<template>
  <section class="py-0 border shadow">
    <div id="tooltip-arrow"></div>
    <ul class="w-100 d-flex flex-column my-0 px-0">
      <li
        class="h5 my-0 mx-0 px-0"
        v-for="(infinitive, index) in irregularInfinitives"
        :key="index"
        :title="infinitive"
      >
        <router-link
          class="my-0 text-decoration-none pl-1"
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
};
</script>

<style scoped>
section {
  position: absolute;
  top: 60px;
  left: 7%;
  z-index: 99;

  width: 100px;

  background-color: #93aa92;
  border-radius: 5px;
}

#tooltip-arrow {
  position: absolute;
  top: -30px;
  left: 37px;

  width: 15px;
  height: 15px;

  border: 15px solid transparent;
  border-bottom: 15px solid white;
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



