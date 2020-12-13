<template>
  <div
    class="blurredcardleft__section"
    @click="switchSection(section.id)"
    v-bind:class="{
      left: section.id === current_section - 1,
      right: section.id === current_section || section.id > current_section,
      offscreen: section.id !== current_section - 1,
    }"
  >
    <figure class="blurredcardleft__section--img">
      <v-lazy-image
        :src="section.photo"
        src-placeholder="https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,q_10,w_378/v1602546774/VI2A6028_pregqc.jpg"
      />
    </figure>
    <h2 class="blurredcardleft__section--label">
      {{ section.name }}
    </h2>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: "BlurredCardLeft",
  props: {
    section: Object,
    sections: Array,
    current_section: Number,
    switchSection: Function
  },
  components: {
    VLazyImage,
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
    height: 41rem;
    width: 29rem;
    cursor: pointer;
    flex-shrink: 0;
    transition: $transition-primary;
    transform: translateY(9rem);

    opacity: 0.8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    -webkit-filter: blur(0.4rem);
    -moz-filter: blur(0.4rem);
    -o-filter: blur(0.4rem);
    -ms-filter: blur(0.4rem);
    filter: blur(0.4rem);

    &.left {
      right: 109.5rem;
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