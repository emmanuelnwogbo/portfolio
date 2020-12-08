<template>
  <div class="homejumbotron">
    <div class="homejumbotron__body">
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
            <img src="~assets/samson.png" alt="" />
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
            <img :src="item.photo" alt="" />
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
  </div>
</template>

<script>
import HomeCard from "@/components/HomeCard";
import BlurredCards from "@/components/BlurredCards";
import BlurredCardsLeft from "@/components/BlurredCardsLeft";
import Intro from "@/components/Intro";

import BlurredCardRight from "@/components/BlurredCardRight";

import homeJumbotron from "@/mixins/home_jumbotron.js";

import MobileIntro from "@/components/mobile/MobileIntro";
import MobileSlidePhoto from "@/components/mobile/MobileSlidePhoto";
import StaticPhoto from "@/components/mobile/StaticPhoto";

import { TimelineLite } from "gsap";

export default {
  name: "HomeJumbotron",
  components: {
    HomeCard,
    Intro,
    BlurredCardRight,
    BlurredCardsLeft,
    BlurredCards,
    MobileIntro,
    MobileSlidePhoto,
    StaticPhoto,
  },
  data() {
    return {
      timeline: new TimelineLite(),
      current_section: 0,
      current_section_handler: 0,
      loaded: false,
      right_section: 1,
      translates: {
        translateA: 0,
        translateB: 20,
      },
      mobileIntro: true,
    };
  },
  mounted() {
    this.loaded = true;

    import("pure-swipe-js").then((result) => {
      const swiper = document.getElementById("homejumbotron__mobile");

      swiper.addEventListener("swipe.end", (event) => {
        console.log(event);
        if (event.detail.direction % 2 !== 0) {
          this.current_section_handler === this.sections.length - 1
            ? ""
            : (this.current_section_handler = this.current_section_handler + 1);
        } else {
          this.current_section_handler === 0
            ? (this.mobileIntro = true)
            : (this.current_section_handler = this.current_section_handler - 1);
        }
      });
    });
  },
  watch: {
    current_section(new_val, old_val) {},
    blurredCardData(new_val, old_val) {
      setTimeout(() => {}, 1000);
    },
    current_section_handler(new_val, old_val) {
      const { timeline } = this;
      timeline.to(this.$data, {
        duration: 0.5,
        current_section: new_val,
      });
    },
  },
  computed: {
    inActiveRight: {
      get: function () {
        const data = this.sections.filter(
          (item) => item.id > this.current_section
        );

        return this.sections;
      },
    },
    blurredCardData: {
      get: function () {
        const data = this.sections.filter(
          (item) => item.id > this.current_section
        );

        return data;
      },
      set: function (newValue) {},
    },
    current_section_label: {
      get: function () {
        const label = this.sections[this.current_section_handler].name;
        return label;
      },
      set: function (newValue) {},
    },
    blurredCardLeft: {
      get: function () {
        const data = this.sections.filter(
          (item) => item.id < this.current_section
        );

        return data;
      },
      set: function (newValue) {},
    },
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
    view() {
      const { current_section } = this;
      this.$store.dispatch("setRoute", "gallery");
      this.$store.dispatch(
        "setCurrentContentAction",
        this.sections[current_section]
      );
    },
    viewportfolio() {
      this.mobileIntro = false;
    },
    click_current(val) {
      this.current_section_handler = val;
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
  height: 68rem;
  background: #141414;
  margin-bottom: 1.5rem;
  margin-top: 8rem;
  padding: 2rem;
  color: #fff;
  padding-bottom: 0rem;

  &__body {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__intro {
    position: relative;
    width: 50rem;
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
      width: 41rem;
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
    width: 89rem;
    display: flex;
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
      width: 33rem;
      z-index: 3;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transform: translateX(-0.5rem);

      &::before {
        content: "";
        height: 53rem;
        width: 33rem;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8));
        z-index: 5;
      }

      & > .homejumbotron__section--label {
        position: absolute;
        bottom: 9rem;
        left: -12.5rem;
        text-transform: uppercase;
        text-align: center;
        font-size: 6rem;
        opacity: 1 !important;
        width: 57rem;
        transition: $transition-primary;
        z-index: 6;

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
      width: 33rem;
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
    width: 100%;
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

  @include respond(tab-land) {
    height: 79rem;
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
    }

    &--portfolio {
      position: absolute;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #141414;
    }
  }

  &__parent {
    height: 73rem;
  }

  &.notshown {
    opacity: 0;
  }

  &__homecards {
    position: relative;
    background: transparent;
    height: 57rem;
    width: 50rem;
    position: relative;
    transform: translateY(-4rem);
    flex-shrink: 0;
    overflow: hidden;
  }

  &__static {
    height: 57rem;
    width: 40rem;
    position: absolute;
    left: 5rem;
    top: 0;
    z-index: 3;

    &::before {
      content: "";
      height: 57rem;
      width: 40rem;
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

    & img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      transition: all 1.5s;

      &.isActive {
        z-index: 8;
      }
    }
  }

  &__labels {
    position: absolute;
    width: 40rem;
    transform: translateY(13rem);
    left: 59rem;
    text-align: center;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include respond(tab-land) {
      left: 7rem;
      transform: translateY(49rem);
    }

    &.isActive {
      transform: scale(1) translateY(13rem);
      transition: all 0.4s ease-in;
      opacity: 1;

      @include respond(tab-land) {
        left: 7rem;
        transform: translateY(49rem);
      }
    }

    &.isNotActive {
      transform: scale(0) translateY(13rem);
      transition: all 0.4s ease-in;
      opacity: 0;

      @include respond(tab-land) {
        left: 7rem;
        transform: translateY(49rem);
      }
    }

    &--h2 {
      width: 65rem;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 7rem;
      flex-shrink: 0;

      @include respond(tab-land) {
        font-size: 5.7rem;
      }
    }

    &--btn {
      position: relative;
      color: #fff;
      background: transparent;
      border: 1px #fff solid;
      text-align: center;
      font-size: 1.7rem;
      text-transform: uppercase;
      padding: 1.2rem 4.5rem;
      cursor: pointer;

      &::before {
        content: "";
        height: 1px;
        width: 7.5rem;
        bottom: 1rem;
        position: absolute;
        left: 4.56rem;
        background: #fff;
      }
    }
  }

  &__btn {
    position: absolute;
    bottom: 8rem;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1rem;
    z-index: 9;

    @include respond(tab-land) {
      bottom: 1rem;
    }

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
}
</style>
