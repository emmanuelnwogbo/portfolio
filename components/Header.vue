<template>
  <div
    class="header"
    v-bind:class="{
      lowerLeftPadding: current_route !== 'index',
    }"
  >
    <div class="header header__desktop">
      <div class="header__name" @click="go_home">
        <div>
          <p>samson adebayo</p>
        </div>
      </div>
      <div class="header__menu">
        <div class="header__menu--item" @click="open_contact">contact</div>
        <div class="header__menu--item">socials</div>
        <div class="header__socials">
          <span>
            <svg>
              <use xlink:href="~assets/sprite.svg#icon-twitter" />
            </svg>
          </span>
          <span>
            <svg>
              <use xlink:href="~assets/sprite.svg#icon-instagram" />
            </svg>
          </span>
          <span>
            <svg>
              <use xlink:href="~assets/sprite.svg#icon-dribbble" />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="header__mobile">
      <div class="header__mobile--name" @click="go_home">
        <div>
          <p>samson adebayo</p>
        </div>
      </div>

      <div class="header__mobile--burger" @click="toggle_slider">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        class="header__mobile--slide"
        v-bind:class="{ visible: slider, invisible: !slider }"
        @click.stop="toggle_slider"
      >
        <div class="header__mobile--slidebody">
          <button @click.stop="open_contact">contact</button>
          <div class="header__mobile--socials">
            <span>
              <svg>
                <use xlink:href="~assets/sprite.svg#icon-twitter" />
              </svg>
            </span>
            <span>
              <svg>
                <use xlink:href="~assets/sprite.svg#icon-instagram" />
              </svg>
            </span>
            <span>
              <svg>
                <use xlink:href="~assets/sprite.svg#icon-dribbble" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeJumbotron from "@/mixins/home_jumbotron.js";

import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      slider: false,
    };
  },
  watch: {
    $route(to, from) {
      this.slider = false;
    },
  },
  methods: {
    go_home() {
      this.$nuxt.$emit("home");
      this.$router.push("/");
    },
    toggle_slider() {
      this.slider ? (this.slider = false) : (this.slider = true);
    },
    open_port() {
      this.slider = false;
    },
    open_contact() {
      this.slider = false;
      this.$router.push("/contact");
    },
  },
  computed: {
    current_route() {
      return this.$route.name;
    },
  },
  mixins: [homeJumbotron],
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  height: 8rem;
  top: 0;
  width: 100vw;
  z-index: 13;
  background: #000000;
  color: #fff;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem 2rem 2rem;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.8rem;

  opacity: 1 !important;

  &__socials {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 4rem;
    bottom: -20rem;
    right: 36px;
    transition: $transition-primary;
    opacity: 0;
    z-index: -1;

    &:hover {
      z-index: 1;
      opacity: 1;
    }

    & span {
      display: inline-block;
      margin-bottom: 3rem;
      cursor: pointer;

      & svg {
        fill: #fff;
        height: 3rem;
        width: 3rem;
      }
    }
  }

  &.lowerLeftPadding {
    padding: 2rem 2rem 2rem 2rem;
  }

  @include respond(tab-land) {
    padding: 0 2rem;
  }

  &__desktop {
    @include respond(tab-land) {
      display: none;
    }
  }

  &__mobile {
    display: none;
    width: 100%;

    &--socials {
      margin-top: 2rem;

      & span {
        display: inline-block;
        margin-right: 2rem;

        & svg {
          fill: #fff;
          height: 3rem;
          width: 3rem;
        }
      }
    }

    &--burger {
      z-index: 13;

      & span {
        display: block;
        background: #fff;
        border-radius: 1rem;
        margin: 0.5rem 0;
        width: 3.4rem;
        height: 0.5rem;
      }
    }

    @include respond(tab-land) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &--name {
      font-size: 2.3rem;
      z-index: 13;
    }

    &--slide {
      transition: all 0.3s ease-in;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.3);

      &.visible {
        opacity: 1;
        z-index: 12;
      }

      &.invisible {
        opacity: 0;
        z-index: -1;
        display: none;
      }
    }

    &--slidebody {
      width: 38rem;
      height: 100%;
      background: #000000;
      padding: 13rem 2rem;

      & button {
        &,
        &:link,
        &:visited,
        &:active,
        &:focus {
          color: #fff;
          background: transparent;
          border: 1px #fff solid;
          text-align: center;
          font-size: 2.1rem;
          text-transform: uppercase;
          padding: 1.3rem 4.5rem;
          width: 26.5rem;
          margin: 2rem 0;
          height: 5.5rem;
          outline: none;
        }
      }
    }
  }

  &__name {
    cursor: pointer;

    & a {
      text-decoration: none;
      color: #fff;
    }
  }

  &__menu {
    width: 21rem;
    display: flex;
    justify-content: space-between;

    &--item {
      cursor: pointer;

      &:nth-child(2) {
        &:hover {
          & ~ .header__socials {
            z-index: 1;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
