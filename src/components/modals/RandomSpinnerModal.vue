<template>
  <div
    class="modal fade"
    id="spinner"
    tabindex="-1"
    aria-labelledby="modalSpinner"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div>
            <font-awesome-icon
              :icon="['fas', 'spinner']"
              size="5x"
              :style="{ color: 'black' }"
              pulse
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "random-spinner-modal",
  created() {
    console.log("[created] RandomSpinnerModal");
  },
};
</script>

<style scoped>
.modal-body {
  background-image: linear-gradient(
    45deg,
    var(--spanish-yellow),
    var(--spanish-red)
  );
}
</style>