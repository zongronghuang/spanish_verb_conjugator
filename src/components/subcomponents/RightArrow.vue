<template>
  <div
    class="d-flex align-items-center justify-content-start ml-2"
    id="right-panel"
  >
    <div @click.prevent.stop="switchToNewConjugationGroup('next')">
      <router-link
        class="
          d-inline-block
          text-decoration-none
          w-100
          position-relative
          text-info
        "
        id="right-arrow"
        to=""
        title="Next"
      >
        <font-awesome-icon
          class="ml-1"
          :icon="['fas', 'chevron-circle-right']"
          :style="{ color: 'white' }"
          size="3x"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { switchToNewConjugationGroup } from "../../utils/mixins.js";
import { mapState } from "vuex";

export default {
  name: "right-arrow",
  mixins: [switchToNewConjugationGroup],
  created() {
    console.log("[created] RightArrow");
  },
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
</style>