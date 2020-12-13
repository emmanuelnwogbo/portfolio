<template>
  <div class="cinematography">
    <div class="desktop hide-overflow">
      <GlideBox
        v-bind:boxes="thumbnails"
        v-bind:objectFit="'contain'"
        v-bind:overlayed="true"
        v-bind:overlaytext="false"
        v-bind:videos="true"
        v-bind:header="'Cinematography'"
      />
    </div>
    <div class="cinematography__mobile mobile">
      <SwipeBox
        v-bind:boxes="thumbnails"
        v-bind:objectFit="'contain'"
        v-bind:overlayed="true"
        v-bind:overlaytext="false"
        v-bind:photography="false"
        v-bind:videos="true"
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
    thumbnails() {
      const thumbs = [
        {
          id: 0,
          photo:
            "https://res.cloudinary.com/dnsj71rid/image/upload/q_72/v1607802888/Screenshot_129_usp4uw.png",
          embed: "https://www.youtube.com/embed/cP_OvM48p08?autoplay=1",
        },
        {
          id: 1,
          photo:
            "https://images.unsplash.com/photo-1522054361367-64c3824dcebc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
          embed: "https://www.youtube.com/embed/TqeVYe3O0NE?autoplay=1",
        },
      ];

      return thumbs;
    },
  },
};
</script>

<style lang="scss" scoped>
.cinematography {
  margin-top: 8rem;
  animation: appear 0.7s ease-out;
  
  &__mobile {
    margin-top: 9rem;
  }
}
</style>