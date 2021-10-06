<template>
  <div class="">
    <a
      href=""
      data-toggle="modal"
      data-target="#spinner"
      title="Get a random Spanish verb"
      class="text-decoration-none mx-1"
      @click.stop.prevent="runTimedSpinnerAndPickRandomVerb"
    >
      <font-awesome-icon class="" :icon="['fas', 'dice']" size="2x" />
      <span class="h6 pt-2 my-0">Chance</span>
    </a>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "random-verb-button",
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

      setTimeout(() => {
        dialog.modal("hide");
        this.pickRandomVerb();
      }, 1700);
    },
  },
};
</script>

<style scoped>
a {
  display: block flex;
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

@media screen and (min-height: 280px) and (orientation: landscape) {
  a {
    flex-direction: row;
    align-items: center;
  }

  a > * {
    width: 100px;
    line-height: 100%;
  }

  span {
    margin-left: 3px;
  }
}

@media screen and (min-height: 320px) and (orientation: landscape) {
  a > * {
    width: 80px;
    line-height: 100%;
    margin-top: 3px;
  }
}

/* tablets & desktops + landscape orientation */
@media screen and (min-width: 768px) and (orientation: portrait) {
  svg {
    font-size: 3rem;
  }
  span {
    font-size: 1.2rem;
  }
}

@media screen and (min-height: 768px) and (orientation: landscape) {
  svg {
    font-size: 3rem;
  }

  span {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 1024px) and (orientation: portrait) {
  svg {
    font-size: 4rem;
  }

  span {
    font-size: 1.5rem;
  }
}

@media screen and (min-height: 1024px) and (orientation: landscape) {
  a > * {
    width: 100px;
  }

  svg {
    font-size: 3.5rem;
  }

  span {
    font-size: 1.5rem;
    margin-left: 10px;
    text-align: center;
  }
}
</style>