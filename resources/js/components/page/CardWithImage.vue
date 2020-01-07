<template>
    <div
        :class="['card', card.content.alignment, card.content.orientation, {'show-more': showMore}]"
        :style="cardStyle"
        :id="card.content.title"
    >
        <div class="card-content">
            <div>
                <h2>{{card.content.title}}</h2>
                <div v-if="!showMore" v-html="card.content.card_text"></div>
                <div v-else v-html="card.content.long_text"></div>
                <template v-if="card.content.long_text">
                    <button
                        v-if="!showMore"
                        class="uk-button uk-button-link uk-margin-bottom"
                        @click="showMore = true"
                    >Mehr anzeigen</button>
                    <button
                        v-else
                        class="uk-button uk-button-link uk-margin-bottom"
                        @click="showMore = false"
                    >Weniger anzeigen</button>
                </template>
            </div>
        </div>
        <div class="media">
            <div class="video" v-if="card.content.url">
                <div>
                    <iframe
                        :src="`https://www.youtube.com/embed/${getYoutubeId(card.content.url)}`"
                    ></iframe>
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
    data() {
        return {
            showMore: false,
            cardStyle: {}
        };
    },
    methods: {
        getYoutubeId(url) {
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            var match = url.match(regExp);
            return match && match[7].length == 11 ? match[7] : false;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";
h2 {
    font-size: 2rem;
    margin-top: 30px;
    text-align: left;
}

.card {
    width: 100%;
    margin: 40px auto 100px auto;
    background-color: white;
    padding-top: 1px;
    text-align: left;
    display: flex;
    position: relative;

    &.show-more {
        .card-content {
            width: 100%;
        }

        .media {
            width: 0%;
        }
    }

    &.left {
        flex-direction: row-reverse;
        flex-wrap: nowrap;
    }

    &.portrait {
        .card-content {
            width: calc(55% - 40px);
        }

        .media {
            width: 45%;
        }
    }
}

.card-content {
    text-align: left;
    padding: 0 20px;
    width: calc(45% - 40px);
}

.media {
    width: 55%;
    position: relative;
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

@media only screen and (max-width: 1200px) {
    .card.portrait,
    .card {
        flex-wrap: wrap;

        .card-content,
        .media {
            width: 100%;
        }

        &.left {
            flex-wrap: wrap;
        }

        &.show-more {
            .media {
                width: 100%;
            }
        }
    }
}
</style>
