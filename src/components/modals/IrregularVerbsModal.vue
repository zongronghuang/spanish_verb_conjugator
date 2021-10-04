<template>
  <div
    class="modal fade"
    id="irregularVerbsDialog"
    tabindex="-1"
    aria-labelledby="irregularVerbsModalDialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="irregularVerbsModalDialog">
            Irregular verbs
          </h5>
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
</template>

<script>
export default {
  name: "irregular-verbs-modal",
  created() {
    console.log("[created] IrregularVerbsModal");
  },
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
};
</script>

<style scoped>
</style>