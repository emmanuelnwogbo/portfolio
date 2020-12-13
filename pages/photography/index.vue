<template>
  <div class="photography">
    <div class="photography__back desktop" @click="go_back">
      <span>
        <svg>
          <use xlink:href="~assets/sprite.svg#icon-keyboard_arrow_left" />
        </svg>
      </span>
      <span>
        <p>Back</p>
      </span>
    </div>
    <div
      class="photography__section desktop"
      v-for="(item, index) in sections"
      :key="'sections' + index"
    >
      <figure>
        <v-lazy-image
          :src="item.photo"
          src-placeholder="https://res.cloudinary.com/dnsj71rid/image/upload/v1607561853/gallery_1_j9dda0.gif"
        />
      </figure>
      <h2 class="photography__section--header">{{ item.name }}</h2>
      <div class="photography__section--btn" @click="open_route(item.route)">
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
  methods: {
    open_route(route) {
      this.$router.push("/" + route);
    },
    go_back() {
      this.$router.push("/");
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
  margin-top: 8rem;
  position: relative;

  &__back {
    align-items: center;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 11rem;
    height: 5rem;
    cursor: pointer;
    font-size: 2.4rem;
    z-index: 10;

    & span {
      display: inline-block;
      color: #fff;

      &:nth-child(1) {
        margin-right: 1rem;
        transform: translateY(0.5rem);
      }
    }

    & svg {
      fill: #fff;
      height: 4rem;
      width: 4rem;
    }
  }

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