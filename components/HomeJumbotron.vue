<template>
  <div class="homejumbotron">
    <div class="homejumbotron__body desktop">
      <BlurredCardsLeft
        v-for="(item, index) in sections"
        :key="'isactiveleft' + index"
        v-bind:section="item"
        v-bind:current_section="current_section"
        v-bind:sections="sections"
      />
      <div
        class="homejumbotron__intro"
        v-bind:class="{
          moved: current_section !== 0,
        }"
      >
        <div class="homejumbotron__intro--img">
          <figure>
            <v-lazy-image
              :src="'https://advertising-samson.s3.eu-west-2.amazonaws.com/download+(10).png'"
              src-placeholder="https://res.cloudinary.com/dnsj71rid/image/upload/v1607561853/gallery_1_j9dda0.gif"
            />
          </figure>
        </div>
        <div class="homejumbotron__intro--bio">
          <p>
            Samson adebayo is a multidisciplined creative. Samson loves to refer
            to himself as a visual artist as his proefficiency cuts across
            various art field from Art direction to copywriting, product design,
            photography and cinematography.
          </p>
        </div>
        <div class="homejumbotron__intro--btn">
          <button>see resume</button>
        </div>
      </div>
      <div class="homejumbotron__slide">
        <div class="homejumbotron__section activeSection">
          <figure
            class="homejumbotron__section--img"
            v-for="(item, index) in sections"
            :key="'sectionsin' + index"
            v-bind:class="{
              incurrent: item.id !== current_section,
              current: item.id === current_section,
            }"
          >
            <v-lazy-image
              :src="item.photo"
              src-placeholder="https://res.cloudinary.com/dnsj71rid/image/upload/v1607561853/gallery_1_j9dda0.gif"
            />
          </figure>
          <h2
            class="homejumbotron__section--label"
            v-for="(item, index) in sections"
            :key="'sections' + index"
            v-bind:class="{
              incurrent: item.id !== current_section,
              current: item.id === current_section,
            }"
          >
            {{ item.name }}
          </h2>
          <div class="homejumbotron__section--btnarea">
            <button @click="open_route(current_section)">Browse</button>
          </div>
        </div>

        <BlurredCardRight
          v-for="(item, index) in sections"
          :key="'isactiveright' + index"
          v-bind:section="item"
          v-bind:current_section="current_section"
          v-bind:sections="sections"
        />
      </div>

      <div class="homejumbotron__navi">
        <span class="homejumbotron__navi--left" @click="toggle_section('left')">
          <svg class="homejumbotron__svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
        <span
          class="homejumbotron__navi--right"
          @click="toggle_section('right')"
        >
          <svg class="homejumbotron__svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
      </div>
    </div>

    <div class="homejumbotron__mobile">
      <MobileIntro />
      <div
        v-bind:style="{
          opacity: slide_opacity,
        }"
      >
        <SwipeBox
          v-bind:boxes="sections"
          v-bind:objectFit="'cover'"
          v-bind:overlayed="true"
          v-bind:overlaytext="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCard from "@/components/HomeCard";
import BlurredCards from "@/components/BlurredCards";
import BlurredCardsLeft from "@/components/BlurredCardsLeft";

import BlurredCardRight from "@/components/BlurredCardRight";

import homeJumbotron from "@/mixins/home_jumbotron.js";

import MobileIntro from "@/components/mobile/MobileIntro";
import MobileSlidePhoto from "@/components/mobile/MobileSlidePhoto";
import StaticPhoto from "@/components/mobile/StaticPhoto";

import SwipeBox from "@/components/mobile/SwipeBox";
import VLazyImage from "v-lazy-image";

export default {
  name: "HomeJumbotron",
  components: {
    HomeCard,
    BlurredCardRight,
    BlurredCardsLeft,
    BlurredCards,
    MobileIntro,
    MobileSlidePhoto,
    StaticPhoto,
    VLazyImage,
    SwipeBox,
  },
  data() {
    return {
      current_section: 0,
      slide_opacity: 0,
    };
  },
  mounted() {
    this.$nuxt.$on("home", () => {
      this.current_section = 0;
    });

    this.$nuxt.$on("viewportf", () => {
      this.slide_opacity = 1;
    });
  },
  methods: {
    toggle_section(direction) {
      if (
        direction === "right" &&
        this.current_section !== this.sections.length - 1
      ) {
        this.current_section = this.current_section + 1;
      } else if (direction === "left" && this.current_section !== 0) {
        this.current_section = this.current_section - 1;
      }
    },
    open_route(route_id) {
      const route = this.sections[route_id].route;
      this.$router.push("/" + route);
    },
  },
  mixins: [homeJumbotron],
};
</script>

<style lang="scss" scoped>
.homejumbotron {
  height: 69rem;
  background: #141414;
  margin-bottom: 1.5rem;
  margin-top: 8rem;
  padding: 2rem;
  color: #fff;
  padding-bottom: 0rem;

  &__mobile {
    height: 66rem;
  }

  @include respond(tab-land) {
    padding: 2rem 0;
    height: 69rem;
  }

  &__body {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__intro {
    position: relative;
    width: 37rem;
    height: 95%;
    margin-top: 3rem;
    transition: $transition-primary;

    &.moved {
      transform: translateX(30rem);
      opacity: 0;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      background: #c4c4c4;
      width: 0.5px;
      height: 63rem;
      transform: translateY(-4rem);
    }

    &--img {
      overflow: hidden;
      height: 17rem;
      width: 17rem;
      border-radius: 1.4rem;
    }

    &--bio {
      font-size: 1.88rem;
      margin-top: 3rem;
      width: 32rem;
    }

    &--btn {
      margin-top: 3.5rem;

      & button {
        outline: none;
        border: 1px solid #fff;
        color: #fff;
        background: transparent;
        text-transform: uppercase;
        font-size: 1.5rem;
        height: 3.5rem;
        width: 17rem;
        text-align: center;
        cursor: pointer;
      }
    }
  }

  &__slide {
    height: 100%;
    width: 105rem;
    display: flex;
    transform: translateY(4rem);
  }

  &__section {
    position: relative;
    height: 37rem;
    width: 24rem;
    cursor: pointer;
    flex-shrink: 0;
    transition: $transition-primary;

    &.activeSection {
      height: 53rem;
      width: 40rem;
      z-index: 3;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transform: translateX(-0.5rem);

      &::before {
        content: "";
        height: 53rem;
        width: 40rem;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8));
        z-index: 5;
      }

      & > .homejumbotron__section--label {
        transition: all 0.5s ease;
        z-index: 6;
        position: absolute;
        bottom: 9rem;
        left: -16.1rem;
        text-transform: uppercase;
        text-align: center;
        font-size: 8rem;
        opacity: 1 !important;
        width: 71rem;

        &.current {
          opacity: 1;
          transform: scale(1);
        }

        &.incurrent {
          opacity: 0;
          transform: scale(0);
        }
      }
    }

    &:not(:first-child) {
      opacity: 0.8;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      -webkit-filter: blur(0.4rem);
      -moz-filter: blur(0.4rem);
      -o-filter: blur(0.4rem);
      -ms-filter: blur(0.4rem);
      filter: blur(0.4rem);
    }

    &:not(:last-child) {
      margin-right: 4rem;
    }

    &--img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      transition: $transition-primary;

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

    &.aftercurrent {
      transform: translateY(5rem);
    }

    &.right {
      transform: translateY(5rem);
    }

    &--btnarea {
      position: absolute;
      bottom: 4.5rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40rem;
      z-index: 6;

      & button {
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
    }
  }

  &__navi {
    position: absolute;
    bottom: 2.5rem;
    left: 0;
    width: 100vw;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      display: inline-block;
      cursor: pointer;

      @include respond(tab-land) {
        margin: 0 0.5rem;
      }

      &:nth-child(1) {
        transform: rotate(180deg) translateY(0.3rem);
      }
    }
  }

  &__svg {
    fill: #c4c4c4;
    height: 4rem;
    width: 4rem;

    @include respond(tab-land) {
      height: 6rem;
      width: 6rem;
    }
  }

  &__desktop {
    @include respond(tab-land) {
      display: none;
    }
  }

  &__mobile {
    display: none;

    @include respond(tab-land) {
      display: block;
      position: relative;
    }
  }
}
</style>
