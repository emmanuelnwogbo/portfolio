<template>
  <div class="portraitphotos">
    <div class="desktop hide-overflow">
      <GlideBox
        v-bind:boxes="slideItems"
        v-bind:objectFit="'contain'"
        v-bind:overlayed="false"
        v-bind:overlaytext="false"
        v-bind:header="'Portrait Photography'"
      />
    </div>
    <div class="portraitphotos__mobile mobile">
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
      const slide_items = this.$store.getters.portrait_items;

      const sanitize = slide_items.filter((item) => item.Key !== "potraits/");

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
.portraitphotos {
  height: 100vh;
  margin-top: 8rem;
}
</style>