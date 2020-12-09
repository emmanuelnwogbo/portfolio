<template>
  <div class="gallery">
    <div
      class="gallery__body desktop"
      v-bind:class="{ visible: opacity, invisible: !opacity }"
    >
      <h2
        class="gallery__body--h2"
        v-bind:class="{
          isActive: current > 0,
        }"
      >
        advertising
      </h2>
      <div
        class="gallery__body--slide"
        v-bind:class="{
          moveLeft: current > 0,
        }"
      >
        <figure
          v-for="(item, index) in slideItems"
          :key="index"
          v-bind:class="{
            isActive: item.id === current,
            isInActive: item.id !== current,
            isRight: item.id > current,
            isRightTwo: item.id > current + 1,
            isLeft: item.id < current,
            isLeftTwo: item.id < current - 1,
            invisible: item.id < current - 2 || item.id > current + 2,
            clickable: item.id === current + 1 || item.id === current - 1,
          }"
          @click="set_current(item.id)"
        >
          <v-lazy-image
            v-if="item.id <= limit"
            :src="item.photo"
            src-placeholder="https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,q_10,w_378/v1602546774/VI2A6028_pregqc.jpg"
          />
        </figure>
      </div>
      <div
        class="gallery__body--nav"
        v-bind:class="{
          moveLeft: current < 1,
        }"
      >
        <span @click="toggle_section('left')">
          <svg class="gallery__body--svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
        <span @click="toggle_section('right')">
          <svg class="gallery__body--svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
      </div>
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
import HomeJumbotron from "@/components/HomeJumbotron";
import Brands from "@/components/Brands";

import LazyImage from "@/components/LazyImage";
import VLazyImage from "v-lazy-image";

import SwipeBox from "@/components/mobile/SwipeBox";

export default {
  components: {
    HomeJumbotron,
    Brands,
    SwipeBox,
    VLazyImage,
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
  color: #fff;
  padding: 0 2rem;
  animation: appear 0.7s ease-out;

  @include respond(tab-land) {
    padding: 2rem 0;
  }

  &__body {
    position: relative;
    display: flex;
    align-items: center;
    height: 70rem;
    transition: all 0.3s ease-in;
    @include respond(tab-land) {
      display: none;
    }
    &.visible {
      opacity: 1;
    }
    &.invisible {
      opacity: 0;
    }
    &--h2 {
      text-transform: uppercase;
      font-size: 7rem;
      flex-shrink: 0;
      transition: all 0.7s ease-out;
      &.isActive {
        transform: translateX(-55rem);
        opacity: 0;
      }
    }
    &--nav {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: $transition-primary;

      &.moveLeft {
        transform: translateX(-9rem);

        @include respond(tab-land) {
          transform: translateX(0);
        }
      }

      @include respond(tab-land) {
        bottom: -2rem;
      }
      & span {
        display: inline-block;
        cursor: pointer;
        @include respond(tab-land) {
          margin: 0 1rem;
        }
        &:nth-child(1) {
          transform: rotate(180deg) translateY(0.3rem);
        }
      }
    }
    &--slide {
      display: flex;
      align-items: center;
      position: relative;
      perspective: 150rem;
      width: 34rem;

      &.moveLeft {
        transform: translateX(7rem);
      }

      & figure {
        cursor: pointer;
        flex-shrink: 0;
        width: 30rem;
        height: 43rem;
        margin: 0 2rem;
        background: #000000;
        position: absolute;
        transition: all 0.7s ease-out;
        &.isLeft {
          left: -37rem;
          animation: slideLeft 0.7s ease-out;
        }
        &.isLeftTwo {
          transform: translateX(-37rem);
          animation: slideLeftTwo 0.7s ease-out;
        }
        &.isActive {
          animation: slideLeft 0.7s ease-out;
          left: 5rem;
          transform: scale(1.3);
        }
        &.isRight {
          right: -47rem;
          animation: slideRightInActive 0.7s ease-out;
        }
        &.isRightTwo {
          transform: translateX(37rem);
          animation: slideRight 0.7s ease-out;
        }
        &.isInActive {
          opacity: 0.8;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          -webkit-filter: blur(0.4rem);
          -moz-filter: blur(0.4rem);
          -o-filter: blur(0.4rem);
          -ms-filter: blur(0.4rem);
          filter: blur(0.4rem);
        }
        &.invisible {
          opacity: 0;
          animation: invisible 0.7s ease-out;
        }
        &.clickable {
          z-index: 3;
        }
      }
    }
    &--svg {
      fill: #c4c4c4;
      height: 4rem;
      width: 4rem;
      @include respond(tab-land) {
        display: none;
      }
    }
  }
}

img {
  object-fit: contain !important;
}
</style>