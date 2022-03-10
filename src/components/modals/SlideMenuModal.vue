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
        <div class="modal-body px-0 pb-4 d-flex justify-content-center">
          <InlineSearchBar />
        </div>
        <div class="modal-footer py-1 mt-5">
          <div class="mt-2 w-100 d-flex justify-content-around">
            <IrregularVerbsButton />
            <ChanceButton/>
          </div>
          <div class="mt-4 w-100 d-flex justify-content-around">
            <ReportButton/>
            <SettingsButton />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import $ from "jquery";
import InlineSearchBar from '../InlineSearchBar.vue'
import ChanceButton from '../navButtons/ChanceButton.vue'
import IrregularVerbsButton from '../navButtons/IrregularVerbsButton.vue'
import ReportButton from '../navButtons/ReportButton.vue'
import SettingsButton from '../navButtons/SettingsButton.vue'

export default {
  name: 'slide-menu-modal',
  created() {
    console.log('[created] SlideMenu')
  },
  components: {
    InlineSearchBar,
    ChanceButton,
    IrregularVerbsButton,
    ReportButton,
    SettingsButton
  }
}
</script>

<style scoped>

.modal-footer {
  background-color: var(--spanish-red);
}
</style>