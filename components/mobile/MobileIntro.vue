<template>
  <div
    class="mobileintro"
    v-bind:style="{
      opacity: mobileIntro ? `1` : `0`,
      zIndex: mobileIntro ? `10` : `-1`,
    }"
  >
    <figure class="mobileintro__img">
      <v-lazy-image
        :src="'https://advertising-samson.s3.eu-west-2.amazonaws.com/download+(10).png'"
        src-placeholder="https://res.cloudinary.com/dnsj71rid/image/upload/v1607561853/gallery_1_j9dda0.gif"
      />
    </figure>
    <div class="mobileintro__bio">
      <p>
        Samson adebayo is a multidisciplined creative. Samson loves to refer to
        himself as a visual artist as his proefficiency cuts across various art
        field from Art direction to copywriting, product design, photography and
        cinematography.
      </p>
    </div>
    <div class="mobileintro__btn">
      <button class="mobileintro__button" @click="open_resume">
        See resume
      </button>
      <button class="mobileintro__button" @click="viewportfolio">
        View Portfolio
      </button>
    </div>
  </div>
</template>

<script>
import homeJumbotron from "@/mixins/home_jumbotron.js";

import VLazyImage from "v-lazy-image";

export default {
  name: "MobileIntro",
  components: {
    VLazyImage,
  },
  mounted() {
    this.$nuxt.$on("home", () => {
      this.mobileIntro = true;
    });
  },
  data() {
    return {
      mobileIntro: true,
    };
  },
  methods: {
    viewportfolio() {
      this.mobileIntro = false;
      this.$nuxt.$emit("viewportf");
    },
  },
  mixins: [homeJumbotron],
};
</script>

<style lang="scss" scoped>
.mobileintro {
  padding: 0 2rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  transition: all 0.3s ease-in;
  background: #141414;

  &__img {
    width: 20rem;
    height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    margin-bottom: 3rem;
    margin-top: 2rem;
  }

  &__bio {
    font-size: 2.3rem;
  }

  &__btn {
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 3rem;

    & button {
      color: #fff;
      background: transparent;
      border: 1px #fff solid;
      text-align: center;
      font-size: 1.8rem;
      text-transform: uppercase;
      padding: 1.3rem 4.5rem;
      width: 26.5rem;
      margin: 2rem 0;
      height: 5.5rem;
      outline: none;
    }
  }
}
</style>
