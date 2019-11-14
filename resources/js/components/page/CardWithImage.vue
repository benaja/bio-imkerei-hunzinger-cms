<template>
    <div :class="['card', isMultiCard ? 'large' : card.content.size]">
        <h2>{{card.content.title}}</h2>
        <div>
            <div class="content" v-html="card.content.text"></div>
            <div class="media">
                <div class="video" v-if="card.content.url">
                    <div>
                        <iframe :src="card.content.url"></iframe>
                    </div>
                </div>
                <!-- <img :src="'/img/' + medias[0].uuid" v-else /> -->
                <div v-else class="image-container">
                    <div uk-slider="clsActivated: uk-transition-active; center: true">
                        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                            <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-1@m">
                                <li v-for="image of card.images">
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
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentWithImage",
    props: {
        card: {
            type: Object,
            required: true
        },
        isMultiCard: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        content() {
            //   return JSON.parse(this.value);
        }
    },
    mounted() {
        console.log(this.card);
    }
};
</script>

<style lang="scss" scoped>
h2 {
    font-size: 3rem;
    text-align: center;
    margin-top: 30px;
}

.card {
    width: 60%;
    margin: 40px auto 100px auto;
    background-color: white;
    padding-top: 1px;

    &.small {
        width: 40%;
    }

    &.large {
        width: calc(100% - 20px);
    }
}

.content {
    text-align: center;
    padding: 0 20px;
}

.media {
    padding: 20px;
    padding-bottom: 100% / 16 * 9;
    height: 0;
    position: relative;
    //   width: 50%;
    text-align: center;
    justify-content: center;

    img {
        width: 100%;
    }

    .video {
        width: 100%;
        padding-bottom: calc(100% / 16 * 9);
        position: relative;
        > div {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            > iframe {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
