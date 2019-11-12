<template>
    <div>
        <NavigationBar></NavigationBar>
        <div class="uk-container">
            <h1>Über Uns</h1>
            <div class="content">
                <template v-for="card of content">
                    <card-with-image
                        v-if="card.type === 'card_with_image' || card.type === 'card_with_video'"
                        :card="card"
                    ></card-with-image>
                    <multi-card
                        v-if="card.type === 'multi_card'"
                        :cards="card.subCards"
                        :rows="parseInt(card.content.rows)"
                    ></multi-card>
                </template>
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
import PageFooter from "@/js/components/PageFooter";
import NavigationBar from "@/js/components/NavigationBar";
import CardWithImage from "@/js/components/page/CardWithImage";
import MultiCard from "@/js/components/page/MultiCard";

export default {
    components: {
        PageFooter,
        NavigationBar,
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
.uk-container {
    padding-top: 120px;
}
</style>
