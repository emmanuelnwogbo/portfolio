<template>
<div class="mobileslidephoto" v-bind:class="{
      visible: currentSection === section.id,
      notvisible: currentSection !== section.id,
    }" v-bind:style="{
      transform: transform(section.id),
      opacity: !mobileIntro ? `1` : `0`
    }">
    <figure class="mobileslidephoto__img">
        <img :src="section.photo" alt="" />
    </figure>
</div>
</template>

<script>
import homeJumbotron from "@/mixins/home_jumbotron.js";

export default {
    name: "MobileSlidePhoto",
    props: {
        section: Object,
        currentSection: Number,
        mobileIntro: Boolean,
    },
    methods: {
        transform(id) {
            if (this.currentSection > id) {
                return `translateX(-40rem) scale(0.8)`;
            }

            if (this.currentSection < id) {
                return `translateX(40rem) scale(0.8)`;
            }

            if (this.currentSection === id) {
                return `translateX(0)`;
            }
        },
    },
    mixins: [homeJumbotron],
};
</script>

<style lang="scss" scoped>
.mobileslidephoto {
    position: absolute;
    top: 0;
    left: 1rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.5s ease-out;

    &__img {
        height: 57rem;
        width: 42rem;
    }

    &.visible {
        z-index: 3;
        transform: translateX(0);
    }

    &.notvisible {
        opacity: 0.8;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        -webkit-filter: blur(0.4rem);
        -moz-filter: blur(0.4rem);
        -o-filter: blur(0.4rem);
        -ms-filter: blur(0.4rem);
        filter: blur(0.4rem);
    }

    &.right {
        z-index: 2;
    }

    &.left {
        z-index: 2;
    }
}
</style>
