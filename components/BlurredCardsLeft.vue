<template>
  <div
    class="blurredcardleft__section"
    v-bind:class="{
      left: section.id === current_section - 1,
      right: section.id === current_section || section.id > current_section,
      offscreen: section.id !== current_section - 1,
    }"
  >
    <figure class="blurredcardleft__section--img">
      <img :src="section.photo" alt="" />
    </figure>
    <h2 class="blurredcardleft__section--label">
      {{ section.name }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "BlurredCardLeft",
  props: {
    section: Object,
    sections: Array,
    current_section: Number,
  },
};
</script>

<style lang="scss" scoped>
.blurredcardleft {

  &:not(:last-child) {
    margin-right: 4rem;
  }

  &__section {
    position: absolute;
    top: 0;
    height: 37rem;
    width: 24rem;
    cursor: pointer;
    flex-shrink: 0;
    transition: $transition-primary;
    transform: translateY(5rem);

    opacity: 0.8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    -webkit-filter: blur(0.4rem);
    -moz-filter: blur(0.4rem);
    -o-filter: blur(0.4rem);
    -ms-filter: blur(0.4rem);
    filter: blur(0.4rem);

    &.left {
      right: 94rem;
    }

    &.offscreen {
      right: 70rem;
      opacity: 0;
    }

    &.right {
      right: 70rem;
      opacity: 0;
      z-index: -1;
    }

    &--img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;

      &.current {
        opacity: 1;
      }

      &.incurrent {
        opacity: 0;
      }
    }

    &--label {
      opacity: 0;
    }
  }
}
</style>