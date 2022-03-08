<template>
  <div 
  class="modal fade" 
  id="slideMenuDialog"     
  tabindex="-1"
  aria-labelledby="slideMenuDialog"
  aria-hidden="true"
>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="slideMenuDialog">Menu</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body px-0 py-0">
          xxxx
        </div>
        <div class="modal-footer py-1 border-0"></div>
      </div>
    </div>

  </div>
</template>

<script>
// import $ from "jquery";

export default {
  name: 'slide-menu-modal',
  created() {
    console.log('[created] SlideMenu')
  }
}
</script>

<style scoped>

</style>