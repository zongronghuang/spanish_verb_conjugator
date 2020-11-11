<template>
  <div
    class="d-flex align-items-center justify-content-center mb-1"
    id="bottom-panel"
  >
    <a
      class="text-decoration-none w-100 text-center"
      id="bottom-arrow"
      href="#"
      title="Next tense"
      >&#8681;
    </a>
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