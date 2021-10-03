<template>
  <div
    class="modal fade"
    id="verbInfoDialog"
    tabindex="-1"
    aria-labelledby="verbInfoModalDialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="verbInfoModalDialog">Verb info</h5>
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
          <section class="px-3 py-2 bg-light">
            <p>
              <span>Definition: </span>
              <span>
                <strong>
                  {{ verb.infinitive_english }}
                </strong>
              </span>
            </p>
            <p>
              <span>Gerund: </span>
              <span>
                <strong>
                  {{ verb.gerund }}
                </strong>
              </span>
            </p>
            <p>
              <span>Past participle: </span>
              <span>
                <strong>
                  {{ verb.pastparticiple }}
                </strong>
              </span>
            </p>
          </section>
        </div>
        <div class="modal-footer py-1 border-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "verb-info-modal",
  props: {
    verb: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log("[created] VerbInfoModal");
  },
};
</script>

<style scoped>
/* @media screen and (min-width: 768px) and (orientation: portrait) {
  .modal {
    transform: scale(1.2, 1.2);
  }
}

@media screen and (min-height: 768px) and (orientation: landscape) {
  .modal {
    transform: scale(1.2, 1.2);
  }
}

@media screen and (min-width: 1024px) and (orientation: portrait) {
  .modal {
    transform: scale(1.5, 1.5);
  }
}

@media screen and (min-height: 1024px) and (orientation: landscape) {
  .modal {
    transform: scale(1.5, 1.5);
  }
} */
</style>