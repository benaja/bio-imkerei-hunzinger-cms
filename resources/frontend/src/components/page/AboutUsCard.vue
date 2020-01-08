<template>
    <div class="card" :class="card.content.orientation">
        <div
            class="text-container"
            :style="{gridArea: card.content.orientation === 'right' ? 'left' : 'right'}"
        >
            <h2>{{ card.content.title }}</h2>
            <div v-html="card.content.text" class="block-with-text"></div>
        </div>
        <div class="image-container" :style="{gridArea: card.content.orientation}">
            <div uk-slider="clsActivated: uk-transition-active; center: true">
                <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                    <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-1@m">
                        <li v-for="(image, index) of card.images" :key="index">
                            <!-- <div class="image-background" :style="{backgroundImage: `url(${image})`}"></div> -->
                            <img :src="image" class="image" />
                        </li>
                    </ul>
                    <a
                        class="uk-position-center-left uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-previous
                        uk-slider-item="previous"
                    ></a>
                    <a
                        class="uk-position-center-right uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-next
                        uk-slider-item="next"
                    ></a>
                </div>
                <!-- <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin uk-dark"></ul> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
    // display: flex;
    // flex-wrap: wrap;
    display: grid;
    grid-template-rows: auto auto;
    // grid-template-columns: 40% 60%;
    grid-template-columns: 100%;
    grid-template-areas: "left" "right";
    margin: 50px 0 100px 0;

    &.left {
        // grid-template-columns: 60% 40%;
    }
}

.text-container {
    background-color: white;
    padding: 20px;
}

.image-container {
    width: 100%;
    background-color: white;
}

.image {
    min-height: 100%;
}

/* styles for '...' */
// .block-with-text {
//     /* hide text if it more than N lines  */
//     overflow: hidden;
//     /* for set '...' in absolute position */
//     position: relative;
//     /* use this value to count block height */
//     line-height: 1.2em;
//     /* max-height = line-height (1.2) * lines max number (3) */
//     max-height: 15.6em;
//     /* fix problem when last visible word doesn't adjoin right side  */
//     text-align: justify;
//     /* place for '...' */
//     margin-right: -1em;
//     padding-right: 1em;
// }
// /* create the ... */
// .block-with-text:before {
//     /* points in the end */
//     content: "...";
//     /* absolute position */
//     position: absolute;
//     /* set position to right bottom corner of block */
//     right: 0;
//     bottom: 0;
// }
// /* hide ... if we have text, which is less than or equal to max lines */
// .block-with-text:after {
//     /* points in the end */
//     content: "";
//     /* absolute position */
//     position: absolute;
//     /* set position to right bottom corner of text */
//     right: 0;
//     bottom: 0;
//     /* set width and height */
//     width: 1em;
//     height: 1em;
//     margin-top: 0.2em;
//     /* bg color = bg color under block */
//     background: white;
// }

// .image-background {
//     width: 100%;
//     height: 100%;
//     background-size: cover;
//     background-position: center center;
// }
</style>
