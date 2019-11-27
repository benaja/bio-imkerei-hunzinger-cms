<template>
    <div class="uk-container">
        <h1>Über Uns</h1>
        <div>
            <template v-for="card of content">
                <card-with-image
                    v-if="card.type === 'card_with_image' || card.type === 'card_with_video'"
                    :card="card"
                ></card-with-image>
                <multi-card
                    v-if="card.type === 'multi_card'"
                    :cards="card.subCards"
                    :columns="parseInt(card.content.columns)"
                ></multi-card>
            </template>
        </div>
    </div>
</template>

<script>
import CardWithImage from "@/js/components/page/CardWithImage";
import MultiCard from "@/js/components/page/MultiCard";

export default {
    components: {
        CardWithImage,
        MultiCard
    },
    data() {
        return {
            content: []
        };
    },
    mounted() {
        this.axios
            .get("/about-us")
            .then(response => (this.content = response.data));
    }
};
</script>

<style lang="scss" scoped>
</style>
