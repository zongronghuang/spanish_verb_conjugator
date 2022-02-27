<template>
  <footer class="footer d-flex flex-column w-100 ">
    <div class="w-25">
      <small id="space-filler" class="space-filler"></small>
    </div>

    <div class="mx-auto">
      <small
        class="text-light w-100 text-right"
        title="Check out Rotiv Artic's photography on Unsplash."
      >
        <font-awesome-icon
          :icon="['fas', 'camera']"
          size="1x"
          class="camera-icon"
        />
        Photo credit:
        <a
          class="text-decoration-none"
          href="https://unsplash.com/@rotivartic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rotiv Artic
        </a>
      </small>
    </div>

    <div class="mx-auto">
      <small class="text-light text-center">
        Made with
        <font-awesome-icon
          id="heart-icon"
          :icon="['fas', 'heart']"
          size="1x"
          class="heart-icon mx-1"
        />
        by
        <a
          class="text-decoration-none"
          href="https://github.com/zongronghuang/spanish_verb_conjugator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zong-Rong
        </a>
      </small>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
  created() {
    console.log("[created] Footer");
  },
};
</script>

<style scoped>
/* small > a {
  color: var(--spanish-yellow);
} */
.footer {
  font-size: 1rem;
}

.footer a,
.heart-icon,
.camera-icon {
  color: var(--spanish-yellow);
}

.heart-icon:hover {
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

  @media (min-width: 600px) {
    .footer {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 1024px) {
    .footer {
      font-size: 1.5rem;
    }
  }
</style>