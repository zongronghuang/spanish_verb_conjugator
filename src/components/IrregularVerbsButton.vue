<template>
  <!-- 常見不規則動詞列表 -->
  <div id="irregular-infinitive-list">
    <!-- 不規則動詞清單按鈕 -->
    <a
      href=""
      data-toggle="modal"
      data-target="#irregularVerbsDialog"
      title="Check out essential irregular verbs in Spanish"
      class="
        mx-1
        text-decoration-none text-white
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <font-awesome-icon
        class="mr-1 align-middle"
        :icon="['fas', 'clipboard-list']"
        :style="{ color: 'white' }"
        size="2x"
      />
      <span class="h5 py-0 my-0">Irregular verbs</span>
    </a>

    <!-- modal -->
    <div
      class="modal fade"
      id="irregularVerbsDialog"
      tabindex="-1"
      aria-labelledby="irregularVerbsModalDialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="irregularVerbsModalDialog">Irregular verbs</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body px-0 py-0">
            <section
              class="
                px-3
                py-2
                d-flex
                justify-content-between
                flex-wrap flex-row
                w-100
                bg-light
              "
            >
              <p class="text-left">
                Practice the most common irregular verbs in Spanish.
              </p>
              <div
                class="d-flex justify-content-between flex-wrap flex-row w-100"
              >
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
          </div>
          <div class="modal-footer py-1 border-0"></div>
        </div>
      </div>
    </div>
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
        "haber",
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
        "referir",
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
  }
};
</script>

<style scoped>
</style>



