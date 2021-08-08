<template>
  <!-- 常見不規則動詞列表 -->
  <div
    class="
      d-sm-none d-lg-block
      w-25
      text-white
      d-flex
      align-items-center
      justify-content-center
    "
    id="irregular-infinitive-list"
    title="Top irregular verbs"
  >
    <span
      class="ml-2 py-0 my-0 d-flex align-items-center font-weight-bold"
      @click.prevent.stop="toggleIrregularInfinitiveListVisibility"
    >
      <font-awesome-icon
        class="mr-2"
        :icon="['fas', 'clipboard-list']"
        size="2x"
      />
      Top irregular verbs
    </span>

    <!-- toggle 動詞選單 -->
    <section
      class="ml-2 py-1 border shadow"
      v-if="isIrregularInfinitiveListVisible"
    >
      <div id="tooltip-arrow"></div>
      <div
        class="w-100 d-flex flex-wrap justify-content-between my-0 px-1 mx-0"
      >
        <button
          class="btn btn-info border my-1 py-0 px-1"
          v-for="(infinitive, index) in irregularInfinitives"
          :key="index"
          :title="infinitive"
        >
          <router-link
            class="my-0 mx-0 px-0 py-0 text-decoration-none text-white"
            :to="{ name: 'main-page', params: { infinitive } }"
          >
            {{ irregularInfinitives[index] }}
          </router-link>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "irregular-infinitive-list",
  data() {
    return {
      irregularInfinitives: [
        "andar",
        "aparecer",
        "caer",
        "coger",
        "contar",
        "conocer",
        "convertir",
        "costar",
        "dar",
        "decir",
        "dormir",
        "elegir",
        "empezar",
        "encontrar",
        "entender",
        "estar",
        "haber", //
        "hacer",
        "ir",
        "jugar",
        "morir",
        "negar",
        "ofrecer",
        "oír",
        "parecer",
        "pedir",
        "poder",
        "poner",
        "preferir",
        "producir",
        "querer",
        "recordar",
        "referir", //
        "repetir",
        "resolver",
        "saber",
        "salir",
        "seguir",
        "sentir",
        "ser",
        "servir",
        "tener",
        "traer",
        "venir",
        "ver",
        "volver",
      ],
      isIrregularInfinitiveListVisible: false,
    };
  },
  methods: {
    toggleIrregularInfinitiveListVisibility() {
      this.isIrregularInfinitiveListVisible =
        !this.isIrregularInfinitiveListVisible;
    },
  },
};
</script>

<style scoped>
/* #irregular-infinitive-list {
  max-width: 200px;
} */

#irregular-infinitive-list > span {
  cursor: pointer;
}

section {
  position: absolute;
  top: 60px;
  z-index: 99;

  background-color: #93aa92;
  border-radius: 5px;
}

#tooltip-arrow {
  position: absolute;
  top: -30px;
  left: 44%;

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



