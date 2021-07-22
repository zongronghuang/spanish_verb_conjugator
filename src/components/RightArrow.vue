<template>
  <div
    class="d-flex align-items-center w-25 justify-content-center"
    id="right-panel"
  >
    <router-link
      class="d-inline-block text-decoration-none w-100 h-100 position-relative"
      id="right-arrow"
      to=""
      title="Next"
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "right-arrow",
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