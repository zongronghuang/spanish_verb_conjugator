<template>
  <div>
    <a
      href=""
      data-toggle="modal"
      data-target="#spinner"
      title="Get a random Spanish verb"
      class="
        text-decoration-none text-white
        mx-1
        d-flex
        flex-row
        align-items-center
      "
      @click.stop.prevent="runTimedSpinnerAndPickRandomVerb"
    >
      <font-awesome-icon
        class="mr-1 align-middle"
        :icon="['fas', 'dice']"
        size="2x"
        :style="{ color: 'white' }"
      />
      <span class="h5 py-0 my-0">Try Luck</span>
    </a>

    <!-- modal -->
    <!-- <div
      class="modal fade"
      id="spinner"
      tabindex="-1"
      aria-labelledby="modalSpinner"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-body text-center">
            <div>
              <font-awesome-icon
                :icon="['fas', 'spinner']"
                size="5x"
                :style="{ color: 'black' }"
                pulse
              />
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "random-verb-button",
  methods: {
    pickRandomVerb() {
      const infinitives = this.$store.state.infinitives;
      const randomId = Math.floor(Math.random() * infinitives.length);
      const pickedInfinitive = infinitives[randomId];

      this.$router.push(`/spanish-conjugator/${pickedInfinitive}`);
    },
    runTimedSpinnerAndPickRandomVerb() {
      const dialog = $("#spinner");
      dialog.modal("show");

      setTimeout(() => {
        dialog.modal("hide");
        //  this.pickRandomVerb();
      }, 1700);
    },
  },
};
</script>

<style scoped>
.modal-content {
  background-image: linear-gradient(
    45deg,
    var(--spanish-yellow),
    var(--spanish-red)
  );
}
</style>