<template>
  <!-- 常見不規則動詞列表 -->
  <div
    class="flex-grow-1 d-flex align-items-center justify-content-center border"
    id="irregular-infinitive-list"
    title="Top irregular verbs"
  >
    <!-- 不規則動詞清單按鈕 -->
    <a
      href=""
      class="text-decoration-none text-white"
      @click.prevent.stop="showIrregularVerbsDialog"
    >
      <font-awesome-icon
        class="mr-2 align-middle"
        :icon="['fas', 'clipboard-list']"
        :style="{ color: 'white' }"
        size="2x"
      />
      Top irregular verbs
    </a>

    <!-- 不規則動詞清單對話框 -->
    <dialog ref="irregularVerbsDialog">
      <header>
        <span>Irregular Verbs</span>
        <a href="" class="text-decoration-none">
          <font-awesome-icon
            :icon="['fas', 'window-close']"
            size="2x"
            :style="{ color: 'white' }"
            class="float-right"
            @click.prevent.stop="closeIrregularVerbsDialog"
          />
        </a>
      </header>
      <hr />
      <section class="border">
        <router-link
          class="btn rounded-lg text-decoration-none border"
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



