<template>
  <div>
    <a
      href=""
      data-toggle="modal"
      data-target="#spinner"
      title="Get a random Spanish verb"
      class="
        text-decoration-none
        mx-1
      "
      @click.stop.prevent="runTimedSpinnerAndPickRandomVerb"
    >
      <font-awesome-icon
        class=""
        :icon="['fas', 'dice']"
        size="3x"
      />
      <span class="h6 pt-2 my-0">Try Luck</span>
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
a {
  display: inline-block flex;
  flex-direction: column;
  align-items: center;
}

a > * {
  display: block;
  margin: 0 auto;
  text-align: center;
}


a, a:visited {
  color: white;
}

a:hover, a:active {
  color: var(--spanish-yellow);
}

/* @media screen and (min-height: 320px) and (orientation: landscape) {
  a {
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.5rem;
  flex-grow: 1;
  }

} */

</style>