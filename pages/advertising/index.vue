<template>
  <div class="gallery">
    <div class="desktop hide-overflow">
      <GlideBox
        v-bind:boxes="slideItems"
        v-bind:objectFit="'contain'"
        v-bind:overlayed="false"
        v-bind:overlaytext="false"
        v-bind:header="'Advertising'"
      />
    </div>

    <div class="mobile">
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
import GlideBox from "@/components/GlideBox";
import SwipeBox from "@/components/mobile/SwipeBox";

export default {
  components: {
    SwipeBox,
    GlideBox,
  },
  data() {
    return {
      opacity: true,
      current: 0,
      limit: 7,
    };
  },
  watch: {
    current(new_val, old_val) {
      new_val === this.limit - 2 ? (this.limit = this.limit + 5) : "";
    },
    currentRoute(new_val, old_val) {
      this.opacity = false;
      setTimeout(() => {
        this.$router.push("/");
      }, 400);
    },
  },
  computed: {
    currentContent() {
      const current_content = this.$store.getters.current_content;
      return current_content;
    },
    currentRoute() {
      const current_route = this.$store.getters.current_route;
      return current_route;
    },
    slideItems() {
      const slide_items = this.$store.getters.advertising_items;

      slide_items.forEach((item, index) => {
        item.id = index;
        item.photo = `https://advertising-samson.s3.eu-west-2.amazonaws.com/${item.Key}`;
      });

      const slide_data = slide_items.slice(0, this.limit);

      return slide_items;
    },
  },
  methods: {
    toggle_section(direction) {
      if (direction === "right") {
        this.current === this.slideItems.length - 1
          ? ""
          : (this.current = this.current + 1);
      } else {
        this.current === 0 ? "" : (this.current = this.current - 1);
      }
    },
    set_current(val) {
      this.current = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  overflow: hidden;
  margin-top: 8rem;

  padding: 0 2rem;
  animation: appear 0.7s ease-out;

  @include respond(tab-land) {
    padding: 2rem 0;
  }
}
</style>