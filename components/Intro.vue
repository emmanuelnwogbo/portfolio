<template>
<div class="intro" v-bind:style="{
      transform: currentSection > 0 ? `translateX(50rem)` : `translateX(0)`,
      opacity: currentSection > 0 ? `0` : `1`,
    }">
    <figure class="intro__img">
        <img src="https://images.unsplash.com/photo-1508431640151-f2217ef26c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
    </figure>
    <div class="intro__bio">
        <p>
            Samson adebayo is a multidisciplined creative. Samson loves to refer to
            himself as a visual artist as his proefficiency cuts across various art
            field from Art direction to copywriting, product design, photography and
            cinematography.
        </p>
    </div>
    <button class="intro__button">See resume</button>
</div>
</template>

<script>
import homeJumbotron from "@/mixins/home_jumbotron.js";
export default {
    name: "Intro",
    data() {
        return {};
    },
    props: {
        currentSection: Number,
    },
};
</script>

<style lang="scss" scoped>
.intro {
    position: relative;
    height: 100%;
    padding: 10rem 7rem 3rem 2rem;
    width: 46rem;
    flex-shrink: 0;
    margin-right: 8rem;

    transition: all 0.4s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 81rem;
        right: 0;
        top: 1rem;
        background: #c4c4c4;
    }

    &__img {
        width: 20rem;
        height: 20rem;
        border-radius: 2rem;
        overflow: hidden;
        margin-bottom: 3rem;
    }

    &__bio {
        font-size: 2rem;
        margin-bottom: 3rem;
    }

    &__button {
        color: #fff;
        background: transparent;
        border: 1px #fff solid;
        text-align: center;
        font-size: 1.5rem;
        text-transform: uppercase;
        padding: 1.3rem 4.5rem;
    }
}
</style>
