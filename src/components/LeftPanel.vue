<template>
  <div class="d-flex align-items-center justify-content-center" id="left-panel">
    <a
      class="d-inline-block text-decoration-none w-100 h-100 position-relative"
      id="left-arrow"
      href="#"
    ></a>
  </div>
</template>

<script>
export default {
  name: "left-panel",
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
  content: "\21DA";
  display: inline-block;
  position: absolute;
  top: 45%;
  left: 25%;
  height: 100%;
  font-size: 4rem;
}
</style>