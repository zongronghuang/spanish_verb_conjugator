<template>
  <!-- 常見不規則動詞列表 -->
  <div
    class="d-flex align-items-center justify-content-center"
    id="irregular-infinitive-list"
    title="Top irregular verbs"
  >
    <!-- 不規則動詞清單按鈕 -->
    <a
      href=""
      title="Check essential irregular verbs"
      class="
        text-decoration-none text-white
        d-flex
        align-items-center
        justify-content-center
        mr-3
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
      class="container font-weight-bold w-50 rounded-lg"
    >
      <header class="text-center">
        <span class="h5">Irregular verbs</span>
        <a href="" class="text-decoration-none">
          <font-awesome-icon
            :icon="['fas', 'window-close']"
            size="1x"
            :style="{ color: 'white' }"
            class="float-right"
            @click.prevent.stop="closeIrregularVerbsDialog"
          />
        </a>
      </header>
      <hr />
      <section class="border d-flex justify-content-between flex-wrap">
        <router-link
          class="btn btn-primary mx-1 my-1 text-decoration-none"
          v-for="(infinitive, id) in irregularInfinitives"
          :key="id"
          :title="infinitive"
          :to="{ name: 'main-page', params: { infinitive } }"
        >
          {{ infinitive }}
        </router-link>
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
dialog {
  background-color: green;
}
</style>



