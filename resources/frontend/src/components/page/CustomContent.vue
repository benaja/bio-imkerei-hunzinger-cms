<template>
    <div>
        <template v-for="(card, index) of content">
            <card-with-image
                v-if="card.type === 'card_with_image' || card.type === 'card_with_video'"
                :card="card"
                :key="index"
            ></card-with-image>
            <!-- <multi-card
                v-if="card.type === 'multi_card'"
                :cards="card.subCards"
                :columns="parseInt(card.content.columns)"
            ></multi-card>-->
            <div v-if="card.type === 'text'" v-html="card.content.text" :key="index"></div>
            <div v-if="card.type === 'video'" class="video" :key="index">
                <iframe :src="`https://www.youtube.com/embed/${getYoutubeId(card.content.video)}`"></iframe>
            </div>
            <image-gallery v-if="card.type === 'image_gallery'" :card="card" largeImages :key="index"></image-gallery>
        </template>
    </div>
</template>

<script>
import CardWithImage from '@/components/page/CardWithImage';
import ImageGallery from '@/components/page/ImageGallery';

export default {
  name: 'CustomContent',
  components: {
    CardWithImage,
    ImageGallery,
  },
  props: {
    content: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getYoutubeId(url) {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[7].length === 11 ? match[7] : false;
    },
  },
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
