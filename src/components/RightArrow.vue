<template>
  <div
    class="d-flex align-items-center justify-content-center"
    id="right-panel"
  >
    <div @click.prevent.stop="switchToNewConjugationGroup('next')">
      <router-link
        class="
          d-inline-block
          text-decoration-none
          w-100
          h-100
          position-relative
        "
        id="right-arrow"
        to=""
        title="Next"
      ></router-link>
    </div>
  </div>
</template>

<script>
import { switchToNewConjugationGroup } from "../utils/mixins.js";
import { mapState } from "vuex";

export default {
  name: "right-arrow",
  mixins: [switchToNewConjugationGroup],
  computed: {
    ...mapState({
      verb: (state) => state.verb,
    }),
  },
};
</script>

<style scoped>
#right-panel {
  width: 10%;
}

#right-panel a {
  visibility: hidden;
}

#right-panel:hover a {
  visibility: visible;
}

#right-arrow::before {
  content: "\21E8";
  display: inline-block;
  position: absolute;
  top: 45%;
  left: 0%;
  height: 100%;
  font-size: 3rem;
}
</style>