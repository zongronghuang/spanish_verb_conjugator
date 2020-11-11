<template>
  <div
    class="d-flex align-items-center justify-content-center mb-1"
    id="bottom-panel"
  >
    <a
      class="text-decoration-none w-100 position-relative text-center"
      id="bottom-arrow"
      href="#"
      >&dArr;
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
  font-size: 4rem;
}

#bottom-panel:hover a {
  visibility: visible;
}
</style>