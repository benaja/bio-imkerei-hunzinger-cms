<template>
    <div class="card-container" :style="containerStyle">
        <template v-for="(card, index) of cards">
            <div class="text" :key="'t' + card.id" :style="card.style ? card.style.text : ''">
                <h2>{{card.content.title}}</h2>
                <div v-html="card.content.text"></div>
            </div>
            <div class="slider" :key="'i' + card.id" :style="card.style ? card.style.image : ''">
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
            </div>
        </template>
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
        columns: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            containerStyle: {
                gridTemplateColumns: null,
                gridTemplateRows: null
            }
        };
    },
    mounted() {
        this.setStyle();
        window.addEventListener("resize", () => {
            this.setStyle();
        });
    },
    computed: {},
    methods: {
        isMobile() {
            return window.innerWidth < 800;
        },
        setStyle() {
            for (let i = 0; i < this.cards.length; i++) {
                this.cards[i].style = {
                    text: this.cardStyle(i, 0),
                    image: this.cardStyle(i, 1)
                };
            }
            this.containerStyle = this.getContainerStyle();
        },
        cardStyle(index, addToRow = 0) {
            let gridColumn, gridRow;
            if (this.isMobile()) {
                gridColumn = 1;
                gridRow = (index + 1) * 2 - 1 + addToRow;
            } else {
                gridColumn = (index % this.columns) + 1;
                gridRow =
                    ((index - (index % this.columns)) / this.columns + 1) * 2 +
                    addToRow;
            }
            return {
                gridColumnStart: gridColumn,
                gridColumnEnd: gridColumn,
                gridRowStart: gridRow,
                gridRowEnd: gridRow
            };
        },
        getContainerStyle() {
            let gridTemplateColumns = "";
            if (this.isMobile()) {
                gridTemplateColumns = "100%";
            } else {
                for (let i = 0; i < this.columns; i++) {
                    gridTemplateColumns += ` ${100 / this.columns}%`;
                }
            }

            let gridTemplateRows = "";
            let rows = Math.ceil(this.cards.length / this.columns);
            for (let i = 0; i < rows * 2; i++) {
                gridTemplateRows += " auto";
                if (this.isMobile()) gridTemplateRows += " auto";
            }
            return {
                gridTemplateColumns,
                gridTemplateRows
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

.slider {
    background-color: white;
    margin: 0 10px 10px 10px;
    padding: 20px;
}

.image {
    width: 100%;
    > div {
        background-size: cover;
        background-position: center center;
    }
}
</style>
