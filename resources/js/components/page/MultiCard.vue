<template>
    <div class="card-container" :style="containerStyle">
        <CardWithImage v-for="(card, index) of cards" :key="index" :card="card" is-multi-card>
            <!-- <div class="text" :key="'t' + card.id" :style="cardStyle(index)">
                <h2>{{card.content.title}}</h2>
                <div v-html="card.content.text"></div>
            </div>
            <div class="image" :key="'i' + card.id" :style="cardStyle(index, 1)">
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
                </div>
            </div>-->
        </CardWithImage>
    </div>
</template>

<script>
import CardWithImage from "@/js/components/page/CardWithImage";

export default {
    name: "MultiCard",
    components: {
        CardWithImage
    },
    props: {
        cards: {
            type: Array,
            required: true
        },
        rows: {
            type: Number,
            required: true
        }
    },
    computed: {
        containerStyle() {
            let gridTemplateColumns = "";
            for (let i = 0; i < this.rows; i++) {
                gridTemplateColumns += ` ${100 / this.rows}%`;
            }

            let gridTemplateRows = "";
            for (let i = 0; i < this.cards.length; i++) {
                gridTemplateRows += " auto";
            }
            return {
                gridTemplateColumns,
                gridTemplateRows
            };
        }
    },
    methods: {
        cardStyle(index, addToRow = 0) {
            let gridColumn = (index % 2) + 1;
            let gridRow =
                this.cards.length / 2 + (index - (index % 2)) + addToRow;
            return {
                gridColumnStart: gridColumn,
                gridColumnEnd: gridColumn,
                gridRowStart: gridRow,
                gridRowEnd: gridRow
            };
        }
    }
};
</script>

<style lang="scss" scoped>
.card-container {
    display: grid;
    margin-top: 40px;
    margin-bottom: 100px;
}

h2 {
    text-align: center;
    margin-top: 30px;
    font-size: 3rem;
}

.text {
    text-align: center;
    background-color: white;
    margin: 10px 10px 0 10px;
}

.image {
    // padding: 20px;
    // margin: 0 10px 10px 10px;
    // background-color: white;
    // > div {
    //     width: 100%;
    //     padding-bottom: calc(100% / 16 * 9);
    //     background-size: cover;
    //     background-position: center center;
    // }
}
</style>
