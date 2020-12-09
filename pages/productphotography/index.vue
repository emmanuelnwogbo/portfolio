<template>
  <div class="productphotos">
    <div class="productphotos__mobile">
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
export default {
  computed: {
    slideItems() {
      const slide_items = this.$store.getters.product_items;

      slide_items.forEach((item, index) => {
        item.id = index;
        item.photo = `https://advertising-samson.s3.eu-west-2.amazonaws.com/${item.Key}`;
      });

      return slide_items.filter((item) => item.Key !== "productphotos/");
    },
  },
};
</script>

<style lang="scss" scoped>
.productphotos {
  height: 100vh;
  margin-top: 8rem;
}
</style>