<template>
    <div>
        <template v-for="card of content">
            <card-with-image
                v-if="card.type === 'card_with_image' || card.type === 'card_with_video'"
                :card="card"
            ></card-with-image>
            <!-- <multi-card
                v-if="card.type === 'multi_card'"
                :cards="card.subCards"
                :columns="parseInt(card.content.columns)"
            ></multi-card>-->
            <div v-if="card.type === 'text'" v-html="card.content.text"></div>
            <div v-if="card.type === 'video'" class="video">
                <iframe :src="`https://www.youtube.com/embed/${getYoutubeId(card.content.video)}`"></iframe>
            </div>
            <image-gallery v-if="card.type === 'image_gallery'" :card="card" largeImages></image-gallery>
        </template>
    </div>
</template>

<script>
import CardWithImage from "@/js/components/page/CardWithImage";
import MultiCard from "@/js/components/page/MultiCard";
import ImageGallery from "@/js/components/page/ImageGallery";

export default {
    name: "CustomContent",
    components: {
        CardWithImage,
        MultiCard,
        ImageGallery
    },
    props: {
        content: {
            type: Array,
            default: []
        }
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
.video {
    position: relative;
    width: 100%;
    padding-bottom: calc(100% / 16 * 9);
    margin-bottom: 30px;

    > iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>
