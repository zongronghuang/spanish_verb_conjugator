<template>
  <div class="d-flex align-items-center justify-content-center" id="left-panel">
    <div @click.prevent.stop="switchToNewConjugationGroup('back')">
      <router-link
        class="
          d-inline-block
          text-decoration-none
          w-100
          position-relative
          text-info
        "
        id="left-arrow"
        to=""
        title="Back"
      >
        <font-awesome-icon :icon="['fas', 'chevron-circle-left']" size="3x" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { switchToNewConjugationGroup } from "../../utils/mixins.js";
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
  width: 100px;
}

#left-panel a {
  visibility: hidden;
}

#left-panel:hover a {
  visibility: visible;
}
</style>