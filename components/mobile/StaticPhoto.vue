<template>
<div class="staticphoto" v-bind:style="{ opacity: !mobileIntro ? `1` : `0` }">
    <figure class="staticphoto__img">
        <img v-for="(section, index) in sections" :key="'staticphoto' + index" :src="section.photo" alt="" v-bind:style="{
          zIndex: currentSection === section.id ? `2` : `0`,
          opacity:
            currentSection > section.id + 1 ||
            currentSection < section.id - 1 ||
            currentSection < section.id ||
            currentSection < section.id
              ? `0`
              : `1`,
        }" />
    </figure>
</div>
</template>

<script>
export default {
    name: "StaticPhoto",
    props: {
        sections: Array,
        currentSection: Number,
        mobileIntro: Boolean,
    },
};
</script>

<style lang="scss" scoped>
.staticphoto {
    position: absolute;
    top: 0;
    left: 1rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 7;
    background: transparent;

    &__img {
        height: 57rem;
        width: 42rem;
        position: relative;

        background: #000000;

        &::before {
            content: "";
            height: 57rem;
            width: 42rem;
            position: absolute;
            left: 0;
            top: 0;
            background: linear-gradient(to bottom,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0.8));
            z-index: 9;
        }

        & img {
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.7s ease-in;
        }
    }
}
</style>
