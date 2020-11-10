<template>
  <div
    class="d-flex align-items-center justify-content-center"
    id="right-panel"
  >
    <a
      class="d-inline-block text-decoration-none w-100 h-100 position-relative"
      id="right-arrow"
      href="#"
    ></a>
  </div>
</template>

<script>
export default {
  name: "right-panel",
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
  content: "\21DB";
  display: inline-block;
  position: absolute;
  top: 45%;
  right: 25%;
  height: 100%;
  font-size: 4rem;
}
</style>