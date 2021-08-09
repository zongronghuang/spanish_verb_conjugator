<template>
  <!-- 分詞小卡 -->
  <div
    id="more-info-tag"
    class="
      rounded-lg
      d-flex
      flex-column
      px-2
      py-1
      text-white
      bg-primary
      border border-white
    "
  >
    <header class="text-center my-0 h6 align-middle h-100 py-2">
      More Info
    </header>
    <hr class="font-weight-bolder bg-light w-100 mt-0 mb-2" />
    <span>
      Definition — <strong>{{ definition }}</strong>
    </span>
    <span class="text-start">
      Gerund — <strong>{{ gerund }}</strong>
    </span>
    <span class="text-start">
      Past participle — <strong>{{ pastParticiple }}</strong>
    </span>
  </div>
</template>

<script>
export default {
  name: "more-info-tag",
  props: {
    gerund: {
      type: String,
      required: true,
    },
    pastParticiple: {
      type: String,
      required: true,
    },
    definition: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#more-info-tag {
  position: absolute;
  left: 40%;
  top: 40%;

  z-index: 10;

  min-width: 200px;
  max-width: 50%;
  background-color: lightblue;
}

hr {
  height: 1px;
}
</style>