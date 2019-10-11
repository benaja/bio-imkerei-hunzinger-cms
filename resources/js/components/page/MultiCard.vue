<template>
    <div class="card-container" :style="containerStyle">
        <template v-for="(card, index) of cards">
            <div class="text" :key="'t' + card.id" :style="cardStyle(index)">
                <h2>{{card.content.title}}</h2>
                <div v-html="card.content.text"></div>
            </div>
            <div class="image" :key="'i' + card.id" :style="cardStyle(index, 1)">
                <div
                    :style="{backgroundImage: `url('/img/${card.medias[0].uuid}'`}"
                    :src="'/img/' + card.medias[0].uuid"
                />
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
    margin-top: 50px;
}

h2 {
    text-align: center;
    margin-top: 60px;
    font-size: 3rem;
}

.text {
    text-align: center;
    padding: 0 10px;
}

.image {
    padding: 0 10px;
    > div {
        width: 100%;
        padding-bottom: calc(100% / 4 * 3);
        background-size: cover;
        background-position: center center;
    }
}
</style>
