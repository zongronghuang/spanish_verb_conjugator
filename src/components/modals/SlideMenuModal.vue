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
        <div class="modal-body d-flex justify-content-center px-0 pb-4">
          <InlineSearchBar class="inline-search-bar" />
        </div>
        <div class="modal-footer mt-5 py-1">
          <div class="d-flex justify-content-around w-100 mt-2">
            <IrregularVerbsButton />
            <ChanceButton/>
          </div>
          <div class="d-flex justify-content-around w-100 mt-4">
            <ReportButton/>
            <SettingsButton />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
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
.inline-search-bar {
  box-shadow: initial;
  transform: scale(99%);
}

.modal-footer {
  background-color: var(--spanish-red);
}
</style>