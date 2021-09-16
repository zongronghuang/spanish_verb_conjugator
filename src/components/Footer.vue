<template>
   <footer class="fixed-bottom mb-3 d-flex justify-content-between align-items-center">
     <small id="space-filler" class="w-25"></small>
     <small
      class="font-weight-bold text-light text-center w-50"
    >
      Made with
      <font-awesome-icon
        id="heart-icon"
        :icon="['fas', 'heart']"
        size="1x"
        class="mx-1"
      />
      by
      <a
        class="text-decoration-none"
        href="https://github.com/zongronghuang/spanish_verb_conjugator"
        target="_blank"
      >
        Zong-Rong
      </a>
    </small>

    <small class="text-light w-25 text-right pr-3">
        <a
          class="text-decoration-none font-weight-bold"
          href="https://unsplash.com/@rotivartic"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fas', 'camera']"
            size="1x"
            :style="{ color: 'white' }"
          />
          Rotiv Artic
        </a>
      </small>
    </footer>
</template>

<script>
export default {
  name: 'footer',
  created() {
    console.log('[created] Footer')
  }
}
</script>

<style scoped>
small > a {
  color: var(--spanish-yellow);
}

#heart-icon {
  color: var(--spanish-yellow);
}

#heart-icon:hover {
  transform: scale(1);
  animation-name: beating-heart;
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
}

@keyframes beating-heart {
  0% {
    transform: scale(0.9);
    color: var(--spanish-yellow);
  }
  65% {
    transform: scale(2);
    color: var(--spanish-red);
  }
  100% {
    transform: scale(1);
  }
}
</style>