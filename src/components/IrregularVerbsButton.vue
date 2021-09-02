<template>
  <!-- 常見不規則動詞列表 -->
  <div id="irregular-infinitive-list" title="Top irregular verbs">
    <!-- 不規則動詞清單按鈕 -->
    <a
      href=""
      title="Check essential irregular verbs"
      class="
        text-decoration-none text-white
        d-flex
        align-items-center
        justify-content-center
      "
      @click.prevent.stop="showIrregularVerbsDialog"
    >
      <font-awesome-icon
        class="mr-3 align-middle"
        :icon="['fas', 'clipboard-list']"
        :style="{ color: 'white' }"
        size="2x"
      />
      <span class="h5">Irregular verbs</span>
    </a>

    <!-- 不規則動詞清單對話框 -->
    <dialog
      ref="irregularVerbsDialog"
      class="container w-50 rounded-lg px-0 py-0"
    >
      <header class="text-center py-2 px-1 w-100">
        <span class="h5 align-middle font-weight-bold">Irregular verbs</span>
        <a
          href=""
          class="text-decoration-none float-right"
          @click.prevent.stop="closeIrregularVerbsDialog"
        >
          <font-awesome-icon :icon="['fas', 'window-close']" size="1x" />
        </a>
      </header>

      <!-- 不規則動詞選單 -->
      <section
        class="
          px-3
          mt-2
          pb-2
          d-flex
          justify-content-between
          flex-wrap flex-row
          w-100
        "
      >
        <p class="text-left">
          Practice and master the most common irregular verbs.
        </p>
        <div class="d-flex justify-content-between flex-wrap flex-row w-100">
          <router-link
            class="btn btn-primary mx-1 my-1"
            v-for="(infinitive, id) in irregularInfinitives"
            :key="id"
            :title="infinitive"
            :to="{ name: 'main-page', params: { infinitive } }"
          >
            {{ infinitive }}
          </router-link>
        </div>
      </section>
    </dialog>
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
    };
  },
  created() {
    console.log("[created] IrregularVerbsButton");
  },
  methods: {
    showIrregularVerbsDialog() {
      this.$refs.irregularVerbsDialog.showModal();
    },
    closeIrregularVerbsDialog() {
      this.$refs.irregularVerbsDialog.close();
    },
  },
};
</script>

<style scoped>
dialog > header {
  background-color: var(--spanish-yellow);
}

dialog {
  border-width: 0px;
}

dialog svg {
  color: var(--spanish-red);
}
</style>



