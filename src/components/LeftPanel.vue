<template>
  <div
    class="d-flex align-items-center w-25 justify-content-center"
    id="left-panel"
  >
    <router-link
      class="d-inline-block text-decoration-none w-100 h-100 position-relative"
      id="left-arrow"
      to=""
      title="Back"
    ></router-link>
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
  content: "\21E6";
  display: inline-block;
  position: absolute;
  top: 45%;
  right: 0%;
  height: 100%;
  font-size: 3rem;
}
</style>