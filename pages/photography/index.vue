<template>
  <div class="photography">
    <div
      class="photography__section desktop"
      v-for="(item, index) in sections"
      :key="'sections' + index"
    >
      <figure>
        <v-lazy-image
          :src="item.photo"
          src-placeholder="https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,q_10,w_378/v1602546774/VI2A6028_pregqc.jpg"
        />
      </figure>
      <h2 class="photography__section--header">{{ item.name }}</h2>
      <div class="photography__section--btn">
        <button class="photography__section--button">Browse</button>
      </div>
    </div>

    <div class="photography__mobile mobile">
      <SwipeBox
        v-bind:boxes="sections"
        v-bind:objectFit="'cover'"
        v-bind:overlayed="true"
        v-bind:overlaytext="true"
        v-bind:photography="true"
      />
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  name: "photography",
  data() {
    return {};
  },
  components: {
    VLazyImage,
  },
  computed: {
    sections() {
      const current_route = this.$store.getters.portrait_items;
      const slide_items = this.$store.getters.product_items.filter(
        (item) => item.Key !== "productphotos/"
      );

      const sections = [
        {
          name: "product photography",
          photo: `https://advertising-samson.s3.eu-west-2.amazonaws.com/${slide_items[0].Key}`,
          route: "productphotography",
        },
        {
          name: "portrait photography",
          photo: `https://advertising-samson.s3.eu-west-2.amazonaws.com/${current_route[1].Key}`,
          route: "potraitphotography",
        },
      ];

      return sections;
    },
  },
};
</script>

<style lang="scss" scoped>
.photography {
  height: 68rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &__mobile {
    margin-top: 9rem;
  }

  &__section {
    position: relative;
    height: 45rem;
    width: 30rem;
    margin: 0 1.5rem;
    cursor: pointer;
    color: #fff;

    &--header {
      bottom: 12rem;
      position: absolute;
      z-index: 4;
      left: -8rem;
      text-align: center;
      font-size: 3.5rem;
      text-transform: uppercase;
      width: 45rem;
    }

    &--btn {
      position: absolute;
      bottom: 6.5rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33rem;
      z-index: 6;
    }

    &--button {
      outline: none;
      border: 1px solid #fff;
      color: #fff;
      background: transparent;
      text-transform: uppercase;
      font-size: 1.77rem;
      height: 3.8rem;
      width: 17rem;
      text-align: center;
      cursor: pointer;
      text-decoration: underline;
    }

    & figure {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;

      &::before {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8));
        z-index: 5;
      }
    }
  }
}
</style>