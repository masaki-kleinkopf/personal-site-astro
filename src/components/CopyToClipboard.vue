<template>
  <div class="contact-nav-item" @click="handleClick">
    <button>Contact</button>
    <div><span :class="classes">click to copy email </span></div>
    <p class="success-text">{{ successText }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const successText = ref("");
const classes = computed(() => ["hover-text", successText.value && "hide"]);

const handleClick = () => {
  navigator.clipboard.writeText("masaki.kleinkopf@gmail.com").then(
    (successText.value = "email copied"),
    setTimeout(() => {
      successText.value = "";
    }, 2000)
  );
};
</script>

<style lang="scss">
.contact-nav-item {
  button {
    cursor: pointer;
  }
  .hover-text {
    display: none;
    position: absolute;
    right: 1rem;
    top: 2.6rem;
    top: 4.3rem;
    color: var(--accent-orange);
    @media only screen and (min-width: 600px) {
      font-size: 1.2rem;
    }
    font-size: 1rem;
  }
  .success-text {
    position: absolute;
    padding-left: 4rem;
    right: 1rem;
    top: 4.3rem;
    font-style: italic;
    @media only screen and (min-width: 600px) {
      font-size: 1.2rem;
    }
    font-size: 1rem;
  }
  &:active {
    hover-text {
      display: block;
    }
  }

  button {
    @media only screen and (min-width: 600px) {
      font-size: 1.5rem;
      gap: 2rem;
    }
    font-size: 1.2rem;
  }
}

@media (pointer: fine) {
  .contact-nav-item {
    &:hover {
      span {
        display: block;
      }
      .hide {
        display: none;
      }
    }
  }
}
</style>
