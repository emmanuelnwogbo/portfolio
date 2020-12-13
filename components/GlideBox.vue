<template>
  <div class="glidebox">
    <div class="glidebox__h2">
      <div class="glidebox__back" @click="go_back">
        <span>
          <svg>
            <use xlink:href="~assets/sprite.svg#icon-keyboard_arrow_left" />
          </svg>
        </span>
        <span>
          <p>Back</p>
        </span>
      </div>
      <h2
        v-bind:class="{
          invisible: current_item > 0,
        }"
      >
        {{ header }}
      </h2>
    </div>
    <div
      class="glidebox__video"
      v-if="videos && video_viewable"
      @click.stop="close_video"
    >
      <iframe
        class="glidebox__video--frame"
        :src="boxes[current_item].embed"
        allow="autoplay"
      >
      </iframe>
    </div>

    <div class="glidebox__slide">
      <div class="glidebox__middle">
        <div
          class="glidebox__box"
          v-for="(item, index) in boxes"
          :key="'swipebox' + index"
          v-bind:class="{
            right: item.id === current_item + 1,
            left: item.id === current_item - 1,
            farright: item.id > current_item + 1,
            farleft: item.id < current_item - 1,
            invisible:
              item.id >= current_item + 3 || item.id <= current_item - 3,
            overlayed,
          }"
          @click="toggle_current(item.id)"
        >
          <div class="glidebox__video--play" v-if="videos">
            <span>
              <svg>
                <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
              </svg>
            </span>
          </div>
          <figure
            class="glidebox__figure"
            v-bind:class="{
              active: item.id === current_item,
            }"
          >
            <v-lazy-image
              :src="item.photo"
              src-placeholder="https://res.cloudinary.com/dnsj71rid/image/upload/v1607561853/gallery_1_j9dda0.gif"
              alt=""
              v-bind:style="{
                objectFit,
              }"
            />
          </figure>
        </div>
      </div>
      <div class="glidebox__navarea">
        <span
          class="glidebox__navarea--nav"
          @click="toggle_current_nav('left')"
        >
          <svg>
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
        <span
          class="glidebox__navarea--nav"
          @click="toggle_current_nav('right')"
        >
          <svg>
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import VLazyImage from "v-lazy-image";

export default {
  name: "GlideBox",
  data() {
    return {
      current_item: 0,
      video_viewable: false,
    };
  },
  props: {
    boxes: Array,
    objectFit: String,
    overlayed: Boolean,
    overlaytext: Boolean,
    photography: Boolean,
    videos: Boolean,
    header: String,
  },
  components: {
    VLazyImage,
  },
  methods: {
    toggle_current(val) {
      this.current_item = val;

      if (this.videos) {
        !this.video_viewable
          ? (this.video_viewable = true)
          : (this.video_viewable = false);
      }
    },
    toggle_current_nav(val) {
      val === "left" && this.current_item !== 0
        ? (this.current_item = this.current_item - 1)
        : val === "right" && this.current_item !== this.boxes.length - 1
        ? (this.current_item = this.current_item + 1)
        : "";
    },
    close_video() {
      this.video_viewable = false;
    },
    go_back() {
      const prev_route = this.$store.getters.prev_route.path;

      this.$router.push(prev_route);
    },
  },
};
</script>

<style lang="scss" scoped>
.glidebox {
  position: relative;
  width: 100vw;
  height: 82vh;

  &__h2 {
    position: absolute;
    top: 0;
    color: #fff;
    font-size: 3rem;
    height: 100%;
    display: flex;
    align-items: center;

    & h2 {
      transition: $transition-primary;
      text-transform: uppercase;

      &.invisible {
        opacity: 0;
        z-index: -1 !important;
      }
    }
  }

  &__back {
    align-items: center;
    display: flex;
    position: absolute;
    top: 0;
    width: 11rem;
    height: 5rem;
    cursor: pointer;
    font-size: 2.4rem;
    z-index: 10;

    & span {
      display: inline-block;

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

  &__video {
    display: flex;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    width: 100%;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;

    &--frame {
      height: 50rem;
      width: 70rem;
      border: none;
      outline: none;
      z-index: -1;

      &.videovisible {
        opacity: 1;
        z-index: 2;
        display: block;
      }
    }

    &--play {
      position: absolute;
      top: 0;
      left: 0;
      height: 51rem;
      width: 39rem;
      z-index: 8;
      display: flex;
      justify-content: center;
      align-items: center;

      & svg {
        fill: red;
        height: 10rem;
        width: 10rem;
      }
    }
  }

  &__slide {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-1rem);
    transition: $transition-primary;
    overflow: hidden;
  }

  &__middle {
    height: 51rem;
    width: 39rem;
  }

  &__box {
    position: relative;
    transition: $transition-primary;
    cursor: pointer;

    &.active {
      z-index: 3;
    }

    &.inactive {
      z-index: 2;
    }

    &.right {
      transform: translateY(4rem) translateX(38rem) scale(0.8);

      opacity: 0.8;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      -webkit-filter: blur(0.4rem);
      -moz-filter: blur(0.4rem);
      -o-filter: blur(0.4rem);
      -ms-filter: blur(0.4rem);
      filter: blur(0.4rem);
    }

    &.farright {
      transform: translateY(4rem) translateX(76rem) scale(0.8);
      opacity: 0.8;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      -webkit-filter: blur(0.4rem);
      -moz-filter: blur(0.4rem);
      -o-filter: blur(0.4rem);
      -ms-filter: blur(0.4rem);
      filter: blur(0.4rem);
    }

    &.left {
      transform: translateY(4rem) translateX(-38rem) scale(0.8);
      opacity: 0.8;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      -webkit-filter: blur(0.4rem);
      -moz-filter: blur(0.4rem);
      -o-filter: blur(0.4rem);
      -ms-filter: blur(0.4rem);
      filter: blur(0.4rem);
    }

    &.farleft {
      transform: translateY(4rem) translateX(-76rem) scale(0.8);

      opacity: 0.8;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      -webkit-filter: blur(0.4rem);
      -moz-filter: blur(0.4rem);
      -o-filter: blur(0.4rem);
      -ms-filter: blur(0.4rem);
      filter: blur(0.4rem);
    }

    &.visible {
      z-index: 2;
    }

    &.invisible {
      opacity: 0;
      z-index: -1 !important;
    }

    &.overlayed {
      &::before {
        content: "";
        height: 51rem;
        width: 39rem;
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
        height: 51rem;
        width: 39rem;
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
  }

  &__figure {
    position: absolute;
    height: 51rem;
    width: 39rem;
    overflow: hidden;
    cursor: pointer;
    transition: $transition-primary;
  }

  &__navarea {
    position: absolute;
    bottom: -1rem;
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &--nav {
      display: inline-block;
      cursor: pointer;
      margin: 0 0.8rem;

      &:nth-child(1) {
        transform: rotate(-180deg) translateY(0.3rem);
      }

      & svg {
        fill: #c4c4c4;
        height: 4rem;
        width: 4rem;
      }
    }
  }
}
</style>