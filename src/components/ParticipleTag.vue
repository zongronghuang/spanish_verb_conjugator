<template>
  <!-- 分詞小卡 -->
  <div id="participle-tag" class="rounded-lg d-flex flex-column">
    <header class="text-center w-100">Participles</header>
    <span class="text-left">
      Present: <strong>{{ gerund }}</strong>
    </span>
    <span class="text-left">
      Past: <strong>{{ pastParticiple }}</strong>
    </span>
  </div>
</template>

<script>
export default {
  name: "participle-tag",
  props: {
    gerund: {
      type: String,
      required: true,
    },
    pastParticiple: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#participle-tag {
  position: absolute;
  left: 100%;
  top: 10%;
  z-index: 10;

  width: 200px;
}
</style>