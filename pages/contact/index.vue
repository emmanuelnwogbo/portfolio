<template>
  <div class="contact">
    <div
      class="contact__error"
      v-bind:class="{
        showErr,
      }"
    >
      <p>{{ error }}</p>
      <span @click="showErr = false">X</span>
    </div>
    <h2 class="contact__header">Contact Samson</h2>
    <form class="contact__form">
      <label for="name">Your Name</label>
      <input
        type="text"
        name="name"
        v-model="name"
        placeholder="Enter your full name"
      />
      <label for="email">Your Email</label>
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="Enter your email"
      />
      <label for="name">Your Message</label>
      <textarea
        type="text"
        name="msg"
        rows="4"
        cols="50"
        v-model="msg"
        placeholder="Your message here..."
      ></textarea>
      <div class="contact__submit">
        <button class="contact__submit--btn" @click.prevent="sendMessage">
          {{ submitting ? "Sending" : "Submit &rarr;" }}
        </button>
      </div>
    </form>

    <div class="contact__socials">
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
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      msg: "",
      submitting: false,
      error: "Please properly fill out all inputs before submitting",
      showErr: false,
    };
  },
  methods: {
    sendMessage() {
      this.submitting = true;

      const node_env = process.env.NODE_ENV;
      const contact_url =
        node_env === "development"
          ? "http://localhost:3000"
          : `${process.env.PROD_URL}`;

      axios
        .post(`${contact_url}/api/contact`, {
          name: this.name,
          email: this.email,
          msg: this.msg,
        })
        .then((res) => {
          this.submitting = false;
          this.showErr = false;
          if (res.data.message === "OH YEAH") {
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
          this.showErr = true;
          this.submitting = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 8rem;
  color: #fff;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  position: relative;

  @include respond(tab-land) {
    padding: 3rem 2rem;
  }

  &__error {
    position: relative;
    margin: 0 auto;
    width: 80rem;
    height: 6rem;
    color: red;
    background: #fff;
    text-align: center;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateY(-9rem);
    transition: $transition-primary;

    @include respond(tab-land) {
      width: 42rem;
      font-size: 1.6rem;
    }

    & span {
      color: red;
      font-family: "Helvetica", "Arial", sans-serif;
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
      width: 4rem;
      height: 4rem;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;

      @include respond(tab-land) {
        font-size: 1.7rem;
      }
    }

    &.showErr {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__header {
    margin: 0 auto;
    text-align: left;
    width: 80rem;
    font-size: 3.4rem;
    margin-bottom: 5rem;

    @include respond(tab-land) {
      width: 42rem;
      font-size: 2.5rem;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 80rem;
    justify-content: center;

    @include respond(tab-land) {
      width: 42rem;
    }

    & label {
      display: inline-block;
      padding-left: 1.4rem;
      font-size: 1.5rem;
    }

    & input {
      border: none;
      outline: none;
      font-size: 1.5rem;
      padding: 1.4rem;

      background: transparent;
      color: #fff;
      margin-bottom: 2rem;
      transition: $transition-primary;

      &:valid {
        border-bottom: solid 2px #fff;
      }

      &:invalid {
        border-bottom: solid 2px red;
      }
    }

    & textarea {
      border: none;
      outline: none;
      font-size: 2.2rem;
      padding: 1.4rem;
      background: transparent;
      margin-bottom: 2rem;
      color: #fff;

      &:valid {
        border-bottom: solid 2px #fff;
      }

      &:invalid {
        border-bottom: solid 2px red;
      }
    }
  }

  &__submit {
    &--btn {
      outline: none;
      border: 1px solid #fff;
      color: #fff;
      background: transparent;
      text-transform: uppercase;
      font-size: 1.5rem;
      height: 3.8rem;
      width: 13rem;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>