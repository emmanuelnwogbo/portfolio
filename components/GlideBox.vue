<template>
  <div class="glidebox">
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
  },
};
</script>

<style lang="scss" scoped>
.glidebox {
  position: relative;
  width: 100vw;
  height: 82vh;

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
    }

    &.farright {
      transform: translateY(4rem) translateX(76rem) scale(0.8);
    }

    &.left {
      transform: translateY(4rem) translateX(-38rem) scale(0.8);
    }

    &.farleft {
      transform: translateY(4rem) translateX(-76rem) scale(0.8);
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