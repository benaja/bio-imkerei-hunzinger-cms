<template>
    <div uk-grid uk-lightbox="animation: slide">
        <div
            v-for="(image, index) of card.images"
            class="image-container uk-width-1-6"
            :class="{large: largeImages}"
            :key="index"
        >
            <div>
                <a class="uk-inline" :href="`${image.src}&w=1500`" :data-caption="image.caption">
                    <div class="image" :style="{backgroundImage: `url(${image.src}&w=400&h=400)`}"></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  props: {
    card: Object,
    largeImages: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.image-container {
    text-align: center;
    padding: 10px;
    width: 16.66%;

    &.large {
        width: 25%;
    }

    > div {
        position: relative;
        padding-bottom: 100%;

        > a {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
    }
}

.image {
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
}

.uk-grid {
    margin-left: 0;
}

.uk-first-column,
.uk-grid-margin {
    margin: 0;
}

@media only screen and (max-width: 1300px) {
    .image-container {
        width: 20%;

        &.large {
            width: 33.33%;
        }
    }
}

@media only screen and (max-width: 1000px) {
    .image-container {
        width: 25%;

        &.large {
            width: 50%;
        }
    }
}

@media only screen and (max-width: 600px) {
    .image-container {
        padding: 2px;
        width: 33.33%;

        &.large {
            width: 50%;
        }
    }
}
</style>
