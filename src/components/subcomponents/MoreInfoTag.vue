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
  left: 100%;
  top: 0%;
  z-index: 10;

  width: 250px;
  min-width: 200px;
  max-width: 300px;
  background-color: lightblue;
}
</style>