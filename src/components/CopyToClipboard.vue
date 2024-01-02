<template>
  <div class="contact-nav-item" @click="handleClick">
    <button>Contact</button>
    <span>{{ copyText }}</span>
  </div>
</template>

<script setup>
import {ref} from "vue"
const copyText = ref("click to copy email")
const handleClick = () => {
  navigator.clipboard.writeText("masaki.kleinkopf@gmail.com").then(
    copyText.value="email copied",
    setTimeout(() => {
      copyText.value = ""
      copyText.value = "click to copy email"
    }, 2000)
    );

}
</script>

<style lang="scss">
.contact-nav-item {
  span {
    display: none;
    position: absolute;
    right: 1rem;
    top: 4rem;
    color: var(--accent-orange);
    @media only screen and (min-width: 600px) {
      font-size: 1.2rem;
	  }
    font-size: 1rem;
  }
  &:active {
    span {
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
    }
  }
}
</style>