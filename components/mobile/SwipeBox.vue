<template>
  <div class="swipebox">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in boxes"
          :key="'swipebox' + index"
          v-bind:class="{
            overlayed,
          }"
          @click.stop="click_card"
        >
          <div class="swipebox__videoarea" v-if="videos">
            <span
              class="swipebox__videoarea--close"
              @click.stop="click_card"
              v-if="videovisible"
            >
              <svg>
                <use xlink:href="~assets/sprite.svg#icon-plus" />
              </svg>
            </span>
            <span
              class="swipebox__videoarea--play"
              v-if="videos && !videovisible"
            >
              <svg>
                <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
              </svg>
            </span>
            <iframe
              class="swipebox__videoarea--frame"
              :src="item.embed"
              allow="autoplay"
              v-if="videos && videovisible && current.id === item.id"
              v-bind:class="{
                videovisible: videovisible && current.id === item.id,
              }"
            >
            </iframe>
          </div>
          <figure v-if="!videos">
            <v-lazy-image
              :src="item.photo"
              src-placeholder="https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,q_10,w_378/v1602546774/VI2A6028_pregqc.jpg"
              alt=""
              v-bind:style="{
                objectFit,
              }"
            />
          </figure>
          <figure v-if="videos && !videovisible">
            <v-lazy-image
              :src="item.photo"
              src-placeholder="https://res.cloudinary.com/dnsj71rid/image/upload/c_scale,q_10,w_378/v1602546774/VI2A6028_pregqc.jpg"
              alt=""
              v-bind:style="{
                objectFit,
              }"
            />
          </figure>
          <h2
            v-if="overlaytext"
            class="swipebox__label"
            v-bind:class="{
              photography,
            }"
          >
            {{ item.name ? item.name : "" }}
          </h2>
          <div v-if="overlaytext" class="swipebox__btnarea">
            <button @click="open_route(item.route)" class="swipbox__btn">
              browse
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import VLazyImage from "v-lazy-image";

import homeJumbotron from "@/mixins/home_jumbotron.js";

export default {
  name: "SwipeBox",
  data() {
    return {
      count: 0,
      current: null,
      videovisible: false,
    };
  },
  props: {
    boxes: Array,
    objectFit: String,
    overlayed: Boolean,
    overlaytext: Boolean,
    photography: Boolean,
    videos: Boolean,
  },
  components: {
    VLazyImage,
  },
  watch: {
    count() {
      this.videovisible = false;
    },
  },
  mounted() {
    const swiper = new Swiper(".swiper-container");
    this.current = this.boxes[0];

    swiper.on("slideChange", (e) => {
      const current = e.realIndex;
      this.count = current;
      this.current = this.boxes[current];
    });
  },
  methods: {
    open_route(route) {
      this.$router.push("/" + route);
    },
    click_card() {
      if (this.videos) {
        this.videovisible === true
          ? (this.videovisible = false)
          : (this.videovisible = true);
      }
    },
  },
  mixins: [homeJumbotron],
};
</script>

<style lang="scss" scoped>
.swipebox {
  height: 60rem !important;
  width: 100vw !important;
  color: #000000;

  &__label {
    position: absolute;
    width: 66rem;
    text-align: left;
    top: 0;
    color: #fff;
    text-transform: uppercase;
    z-index: 10;
    font-size: 6.2rem;
    transform: rotate(90deg) translateX(32rem) translateY(17.6rem);

    &.photography {
      font-size: 4.5rem;
    }
  }

  &__btnarea {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 3rem;
    color: #fff;
    text-transform: uppercase;
    z-index: 10;
    font-size: 7rem;

    & button {
      outline: none;
      border: 1px solid #fff;
      color: #fff;
      background: transparent;
      text-transform: uppercase;
      font-size: 1.9rem;
      height: 4.8rem;
      width: 17rem;
      text-align: center;
      cursor: pointer;
      text-decoration: underline;

      box-shadow: 0px 1rem 4px rgba(0, 0, 0, 0.25);
    }
  }

  &__videoarea {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    &--close {
      display: inline-block;
      transform: rotate(45deg);
      position: absolute;
      top: 3rem;
      right: 1rem;

      & svg {
        fill: #fff;
        height: 5.5rem;
        width: 5.5rem;
      }
    }

    &--play {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 1rem;
      height: 100%;
      width: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.8)
      );

      & svg {
        fill: red;
        height: 10rem;
        width: 10rem;
      }
    }

    &--frame {
      height: 38rem;
      width: 51rem;
      border: none;
      outline: none;
      z-index: -1;
      display: none;

      &.videovisible {
        opacity: 1;
        z-index: 2;
        display: block;
      }
    }
  }
}

.swiper-container {
  height: 60rem !important;
  width: 100vw !important;
}

.swiper-wrapper {
  display: flex;
}

.swiper-slide {
  position: relative;
  text-align: center;
  font-size: 18px;

  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  flex-shrink: 0;
  height: 60rem !important;
  width: 100vw !important;

  padding: 0 0.9rem;

  &.overlayed {
    &::before {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5)
      );
      z-index: 9;
    }

    &::after {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.8)
      );
      z-index: 9;
    }
  }

  & figure {
    height: 60rem !important;
    width: 100vw !important;
    transition: all 0.3s ease;

    &.invisible {
      opacity: 0 !important;
    }
  }
}
</style>