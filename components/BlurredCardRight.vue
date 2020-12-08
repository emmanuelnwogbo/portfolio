<template>
  <div class="blurredcardright">
    <div
      class="blurredcardright__section"
      v-bind:class="{
        current: section.id === current_section,
        aftercurrent: section.id === current_section + 1,
        right:
          section.id === current_section + 2 &&
          current_section !== sections.length - 1,
        offscreen: section.id > current_section + 2,
        vanished:
          section.id < current_section &&
          current_section === sections.length - 1,
        invisible:
          section.id === current_section - 1 ||
          section.id === current_section - 2,
        lastinvi:
          section.id === current_section &&
          current_section === sections.length - 1,
      }"
    >
      <figure class="blurredcardright__section--img">
        <img :src="section.photo" alt="" />
      </figure>
      <h2 class="blurredcardright__section--label">
        {{ section.name }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlurredCardRight",
  props: {
    section: Object,
    sections: Array,
    current_section: Number,
  },
};
</script>

<style lang="scss" scoped>
.blurredcardright {
  &:not(:last-child) {
    margin-right: 4rem;
  }

  &__section {
    position: absolute;
    right: 0;
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

    &.current {
      right: -60rem;
      opacity: 0;
    }

    &.aftercurrent {
      right: 28rem;
    }

    &.right {
      right: 0;
    }

    &.offscreen {
      opacity: 0;
      z-index: -1;
    }

    &.vanished {
      opacity: 0;
      z-index: -1;
      cursor: default;
    }

    &.invisible {
      z-index: -1;
      opacity: 0 !important;
    }

    &.lastinvi {
      right: 60rem;
      opacity: 0;
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