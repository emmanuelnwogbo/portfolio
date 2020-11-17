<template>
<div class="brands">
    <h2 class="brands__h2">Affiliated brands</h2>
    <div class="brands__svgs">
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody">
                <img class="brands__img" src="~assets/brandsvgs/image-1.svg" />
            </div>
        </div>
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody">
                <img class="brands__img" src="~assets/brandsvgs/image-2.svg" />
            </div>
        </div>
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody">
                <img class="brands__img" src="~assets/brandsvgs/image-3.svg" />
            </div>
        </div>
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody">
                <img class="brands__img" src="~assets/brandsvgs/image-4.svg" />
            </div>
        </div>
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody">
                <img class="brands__img" src="~assets/brandsvgs/image-5.svg" />
            </div>
        </div>
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody">
                <img class="brands__img" src="~assets/brandsvgs/image-6.svg" />
            </div>
        </div>
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody brands__svgs--dhl">
                <img class="brands__img" src="~assets/brandsvgs/image-7.svg" />
            </div>
        </div>
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody">
                <img class="brands__img" src="~assets/brandsvgs/image-8.svg" />
            </div>
        </div>
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody">
                <img class="brands__img" src="~assets/brandsvgs/image-9.svg" />
            </div>
        </div>
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody">
                <img class="brands__img" src="~assets/brandsvgs/image-10.svg" />
            </div>
        </div>
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody brands__svgs--keystone">
                <img class="brands__img" src="~assets/brandsvgs/image-11.svg" />
            </div>
        </div>
        <div class="brands__svgs--svg">
            <div class="brands__svgs--svgbody brands__svgs--twelvebaskets">
                <img class="brands__img" src="~assets/brandsvgs/image-12.svg" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Brands",
    data() {
        return {
            svgs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
        };
    },
};
</script>

<style lang="scss" scoped>
.brands {
    background: #000000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    padding-bottom: 10rem;

    &__h2 {
        color: #fff;
        font-size: 3.5rem;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 3rem;
    }

    &__img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
    }

    &__svgs {
        display: grid;
        grid-template-rows: repeat(6, 10rem);
        grid-template-columns: repeat(29, 1fr);
        padding: 0 10rem;

        @include respond(tab-land) {
            padding: 0 2rem;
            grid-template-rows: repeat(6, 7rem);
            grid-template-columns: repeat(21, 1fr);
        }

        &--svgbody {
            height: 13rem;
            width: 27rem;
            display: flex;
            justify-content: center;
            align-items: center;

            @include respond(tab-land) {
                height: 10rem;
                width: 12rem;
            }
        }

        &--dhl {
            height: 19rem;

        }

        &--twelvebaskets {
            height: 27rem;

            @include respond(tab-land) {
                height: 15rem;
            }
        }

        &--keystone {
            height: 9rem
        }

        &--svg {
            grid-row: span 2;
            grid-column: span 7;
            margin: 3rem 0rem;
            display: flex;
            justify-content: center;
            align-items: center;

            @include respond(tab-land) {
                margin: 0;
            }
        }
    }
}
</style>
