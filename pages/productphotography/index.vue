<template>
  <div class="productphotos">
    <div class="desktop hide-overflow">
      <GlideBox
        v-bind:boxes="slideItems"
        v-bind:objectFit="'contain'"
        v-bind:overlayed="false"
        v-bind:overlaytext="false"
        v-bind:header="'Product Photography'"
      />
    </div>
    <div class="productphotos__mobile mobile">
      <SwipeBox
        v-bind:boxes="slideItems"
        v-bind:objectFit="'contain'"
        v-bind:overlayed="false"
        v-bind:overlaytext="false"
      />
    </div>
  </div>
</template>

<script>
import SwipeBox from "@/components/mobile/SwipeBox";
import GlideBox from "@/components/GlideBox";
export default {
  components: {
    SwipeBox,
    GlideBox,
  },
  computed: {
    slideItems() {
      const slide_items = this.$store.getters.product_items;

      const sanitize = slide_items.filter(
        (item) => item.Key !== "productphotos/"
      );

      sanitize.forEach((item, index) => {
        item.id = index;
        item.photo = `https://advertising-samson.s3.eu-west-2.amazonaws.com/${item.Key}`;
      });

      return sanitize;
    },
  },
};
</script>

<style lang="scss" scoped>
.productphotos {
  height: 100vh;
  margin-top: 8rem;
  animation: appear 0.7s ease-out;

  &__h2 {
    position: absolute;
    transform: translateY(25rem);
    font-size: 5rem;
    text-transform: uppercase;
    transition: $transition-primary;
    color: #fff;
  }
}
</style>