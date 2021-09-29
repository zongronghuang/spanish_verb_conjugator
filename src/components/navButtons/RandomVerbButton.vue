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
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "random-verb-button",
  created() {
    console.log('[created] RandomVerbButton')
  },
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
</style>