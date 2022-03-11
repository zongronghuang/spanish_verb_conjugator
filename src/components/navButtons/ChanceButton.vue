<template>
  <div>
    <a
      href=""
      data-toggle="modal"
      data-target="#spinner"
      title="Get a random Spanish verb"
      class="text-decoration-none"
      @click.stop.prevent="runTimedSpinnerAndPickRandomVerb"
    >
      <font-awesome-icon :icon="['fas', 'dice']" size="2x" />
      <span class="h6 pt-2 my-0">Chance</span>
    </a>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "chance-button",
  created() {
    console.log("[created] RandomVerbButton");
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

      const timerId = setTimeout(() => {
        dialog.modal("hide");
        this.pickRandomVerb();
        clearTimeout(timerId) 
      }, 1700);
    },
  },
};
</script>

<style scoped>
a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a > * {
  display: inline-block;
  margin: 0 auto;
  text-align: left;
}

a,
a:visited {
  color: white;
}

a:hover,
a:active {
  color: var(--spanish-yellow);
}
</style>