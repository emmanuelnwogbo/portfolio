<template>
  <div>
    <div
      class="homejumbotron homejumbotron__desktop"
      v-bind:class="{
        notshown: !loaded,
      }"
    >
      <div
        class="blurredcards"
        v-if="blurredCardLeft.length > 1"
        v-bind:style="{
          transform: `translateX(-9rem)`,
        }"
      >
        <figure class="blurredcards__photo">
          <img
            :src="blurredCardLeft[blurredCardLeft.length - 2].photo"
            alt=""
          />
        </figure>
      </div>
      <BlurredCardsLeft
        v-for="(item, index) in blurredCardLeft"
        :key="'blurredcardsleft' + index"
        v-bind:section="item"
        v-bind:translates="translates"
        v-bind:currentSection="current_section"
        v-bind:click_current="click_current"
      />
      <Intro v-bind:currentSection="current_section" />
      <div
        class="homejumbotron__labels"
        v-for="(item, index) in sections"
        :key="'homejumbotronlabels' + index"
        v-bind:class="{
          isActive: item.id === current_section,
          isNotActive: item.id !== current_section,
        }"
      >
        <h2 class="homejumbotron__labels--h2">{{ item.name }}</h2>
        <button class="homejumbotron__labels--btn" @click="view">browse</button>
      </div>
      <div class="homejumbotron__homecards">
        <HomeCard
          v-for="(item, index) in sections"
          :key="'homecard' + index"
          v-bind:section="item"
          v-bind:currentSection="current_section"
        />
        <div class="homejumbotron__static">
          <figure class="homejumbotron__static--photo">
            <img
              :src="item.photo"
              alt=""
              v-for="(item, index) in sections"
              :key="'staticimg' + index"
              v-bind:class="{
                isActive: item.id === current_section,
              }"
            />
          </figure>
        </div>
      </div>
      <BlurredCards
        v-for="(item, index) in blurredCardData"
        :key="'blurredcards' + index"
        v-bind:section="item"
        v-bind:translates="translates"
        v-bind:currentSection="current_section"
        v-bind:position="index"
        v-bind:lengthOfBlurred="blurredCardData.length"
        v-bind:click_current="click_current"
      />
      <div class="homejumbotron__btn">
        <span @click="toggle_section('left')">
          <svg class="homejumbotron__svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
        <span @click="toggle_section('right')">
          <svg class="homejumbotron__svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
      </div>
    </div>

    <div class="homejumbotron homejumbotron__mobile" id="homejumbotron__mobile">
      <MobileIntro
        v-bind:mobileIntro="mobileIntro"
        v-bind:viewportfolio="viewportfolio"
      />
      <div class="homejumbotron__mobile--portfolio">
        <MobileSlidePhoto
          v-for="(item, index) in sections"
          :key="'mobileslidephoto' + index"
          v-bind:section="item"
          v-bind:currentSection="current_section"
          v-bind:mobileIntro="mobileIntro"
        />
        <StaticPhoto
          v-bind:sections="sections"
          v-bind:currentSection="current_section"
          v-bind:mobileIntro="mobileIntro"
        />
      </div>
      <div class="homejumbotron__btn">
        <span @click="toggle_section('left')">
          <svg class="homejumbotron__svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
        <span @click="toggle_section('right')">
          <svg class="homejumbotron__svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
      </div>
      <div
        class="homejumbotron__labels"
        v-for="(item, index) in sections"
        :key="'homejumbotronlabels' + index"
        v-bind:class="{
          isActive: item.id === current_section,
          isNotActive: item.id !== current_section,
        }"
      >
        <h2 class="homejumbotron__labels--h2">{{ item.name }}</h2>
        <button class="homejumbotron__labels--btn" @click="view">browse</button>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCard from "@/components/HomeCard";
import BlurredCards from "@/components/BlurredCards";
import BlurredCardsLeft from "@/components/BlurredCardsLeft";
import Intro from "@/components/Intro";

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
      //console.log(result);

      const swiper = document.getElementById("homejumbotron__mobile");

      swiper.addEventListener("swipe.end", (event) => {
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
      if (direction === "right") {
        this.current_section_handler === this.sections.length - 1
          ? ""
          : (this.current_section_handler = this.current_section_handler + 1);
      } else {
        this.current_section_handler === 0
          ? (this.mobileIntro = true)
          : (this.current_section_handler = this.current_section_handler - 1);
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
  },
  mixins: [homeJumbotron],
};
</script>

<style lang="scss" scoped>
.homejumbotron {
  background: #141414;
  height: 73rem;
  display: flex;
  align-items: center;
  color: #fff;
  margin-top: 8rem;
  margin-bottom: 3rem;
  overflow: hidden;
  position: relative;
  animation: appear 0.5s ease-out;

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
    bottom: 3rem;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;

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

  &__svg {
    fill: #c4c4c4;
    height: 4rem;
    width: 4rem;

    @include respond(tab-land) {
      height: 6rem;
      width: 6rem;
    }
  }
}
</style>
