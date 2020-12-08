<template>
  <div class="lazyimage">
    <picture
      ref="picture"
      :data-iesrc="imageJPG.src"
      class="lazy-image"
    >
      <source :srcset="imageJPG.srcSet" />
    </picture>
  </div>
</template>

<script>
import lozad from "lozad";
export default {
  name: "LazyImage",
  props: {
    imageJPG: {
      type: Object,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      loading: true,
      imageWebp: null,
    };
  },
  computed: {
    aspectRatio() {
      if (!this.width || !this.height) return 100;
      return (this.height / this.width) * 100;
    },
    style() {
      const style = `background-image: url(${this.imageLQIP});   padding-top: ${this.aspectRatio}%;`;
      return style;
    },
  },
  mounted() {
    this.$el.setAttribute("style", this.style);
    const setLoadingState = () => {
      this.loading = false;
    };
    this.$el.addEventListener("load", setLoadingState);
    this.$once("hook:destroyed", () => {
      this.$el.removeEventListener("load", setLoadingState);
    });
    const observer = lozad(this.$el);
    observer.observe();
  },
};
</script>

<style lang="scss" scoped>
.image {
}
</style>