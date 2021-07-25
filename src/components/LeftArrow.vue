<template>
  <div class="d-flex align-items-center justify-content-center" id="left-panel">
    <div @click.prevent.stop="switchToNewConjugationGroup('back')">
      <router-link
        class="
          d-inline-block
          text-decoration-none
          w-100
          h-100
          position-relative
        "
        id="left-arrow"
        to=""
        title="Back"
      ></router-link>
    </div>
  </div>
</template>

<script>
import { switchToNewConjugationGroup } from "../utils/mixins.js";
import { mapState } from "vuex";

export default {
  name: "left-arrow",
  mixins: [switchToNewConjugationGroup],
  computed: {
    ...mapState({
      verb: (state) => state.verb,
    }),
  },
};
</script>

<style scoped>
#left-panel {
  width: 10%;
}

#left-panel a {
  visibility: hidden;
}

#left-panel:hover a {
  visibility: visible;
}

#left-arrow::after {
  content: "\21E6";
  display: inline-block;
  position: absolute;
  top: 45%;
  right: 0%;
  height: 100%;
  font-size: 3rem;
}
</style>