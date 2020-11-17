<template>
<div class="blurredcards blurredcardsright" v-bind:style="{
      transform:
        section.id === currentSection + 1 && lengthOfBlurred !== 1
          ? `translateX(34rem)`
          : `translateX(0)`,
    }" @click="click_current(section.id)">
    <figure class="blurredcards__photo">
        <img :src="section.photo" alt="" />
    </figure>
</div>
</template>

<script>
export default {
    name: "BlurredCards",
    data() {
        return {};
    },
    props: {
        section: Object,
        currentSection: Number,
        position: Number,
        translates: Object,
        lengthOfBlurred: Number,
        click_current: Function
    },
};
</script>

<style lang="scss" scoped>
.blurredcardsright {
    transition: all 0.4s ease-in;
    transform: translateY(-7rem);
    right: 15rem;
    cursor: pointer;
}
</style>
