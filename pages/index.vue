<template>
<div class="container">
    <div class="container__body" v-bind:class="{ visible: opacity, invisible: !opacity }">
        <HomeJumbotron />
        <Brands />
    </div>
</div>
</template>

<script>
import HomeJumbotron from "@/components/HomeJumbotron";
import Brands from "@/components/Brands";
export default {
    components: {
        HomeJumbotron,
        Brands,
    },
    data() {
        return {
            opacity: true,
        };
    },
    watch: {
        currentContent(new_val, old_val) {
            this.opacity = false;
            setTimeout(() => {
                this.$router.push("/gallery");
            }, 400);
        },
    },
    computed: {
        currentContent() {
            const current_content = this.$store.getters.current_content;
            return current_content;
        },
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
.container {
    &__body {
        transition: all 0.3s ease-in;

        &.visible {
            opacity: 1;
        }

        &.invisible {
            opacity: 0;
        }
    }
}
</style>
