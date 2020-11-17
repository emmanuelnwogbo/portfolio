<template>
<div class="homecard" v-bind:class="{
      isActive: section.id === currentSection,
      isLeft: section.id < currentSection,
      isRight: section.id > currentSection,
    }">
    <figure class="homecard__photo">
        <img :src="section.photo" alt="" />
    </figure>
</div>
</template>

<script>
import homeJumbotron from "@/mixins/home_jumbotron.js";
export default {
    name: "HomeCard",
    data() {
        return {};
    },
    props: {
        section: Object,
        currentSection: Number,
    },
    mounted() {},
    mixins: [homeJumbotron],
};
</script>

<style lang="scss" scoped>
.homecard {
    height: 57rem;
    width: 40rem;
    position: absolute;
    left: 5rem;
    top: 0;
    transition: all 0.4s ease-in-out;

    &__photo {
        height: 100%;
        width: 100%;
    }

    &__bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 21rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
    }

    &__label {
        font-weight: 400;
        font-size: 7rem;
    }

    &__button {
        color: #fff;
        background: transparent;
        border: 1px #fff solid;
        text-align: center;
        font-size: 1.2rem;
        text-transform: uppercase;
        padding: 0.8rem 4.5rem;
    }
}

.current {
    &__photo {
        transform: scale(1);
    }

    &__label {
        font-weight: 400;
        font-size: 7rem;
    }
}

.isActive {
    z-index: 2;
    opacity: 0;
}

.isLeft {
    transform: translateX(-48rem);
    z-index: 4;
}

.isRight {
    transform: translateX(45rem);
    z-index: 1;
}
</style>
