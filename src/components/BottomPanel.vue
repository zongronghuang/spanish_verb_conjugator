<template>
  <div
    class="d-flex align-items-center justify-content-center mb-1"
    id="bottom-panel"
  >
    <router-link
      class="text-decoration-none w-100 text-center"
      id="bottom-arrow"
      to=""
      title="Next tense"
      >&#8681;
    </router-link>
  </div>
</template>

<script>
export default {
  name: "bottom-panel",
};
</script>

<style scoped>
#bottom-panel {
  height: 5%;
}

#bottom-panel a {
  visibility: hidden;
  font-size: 3rem;
}

#bottom-panel:hover a {
  visibility: visible;
}
</style>