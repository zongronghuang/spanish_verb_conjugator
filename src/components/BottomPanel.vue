<template>
  <div
    class="d-flex align-items-center justify-content-center mb-1"
    id="bottom-panel"
  >
    <a
      class="d-inline-block text-decoration-none w-100 position-relative"
      id="bottom-arrow"
      href="#"
    >
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
  height: 10%;
}

#bottom-panel a {
  visibility: hidden;
  padding-top: 7%;
}

#bottom-panel:hover a {
  visibility: visible;
}

#bottom-arrow::after {
  content: "\21DA";
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 43.5%;
  height: 100%;
  font-size: 4rem;
  transform: rotate(-90deg);
}
</style>