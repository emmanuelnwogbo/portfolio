<template>
<div class="blurredcards blurredcardsleft" v-bind:style="{
      transform: `translateX(10rem)`,
    }" @click="click_current(section.id)">
    <figure class="blurredcards__photo">
        <img :src="section.photo" alt="" />
    </figure>
</div>
</template>

<script>
export default {
    name: "BlurredCardsLeft",
    props: {
        section: Object,
        currentSection: Number,
        translates: Object,
        click_current: Function
    },
};
</script>

<style lang="scss" scoped>
.blurredcardsleft {
    transition: all 0.3s ease-in;
    left: 15rem;
    transform: translateY(0rem) translateX(10rem);
    animation: moveInLeft 0.3s ease-out;
    cursor: pointer;
}
</style>
