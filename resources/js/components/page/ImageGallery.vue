<template>
    <div>
        <img v-for="image of card.images" :src="image" class="image" />
    </div>
</template>

<script>
export default {
    name: "ImageGallery",
    props: {
        card: Object
    }
};
</script>

<style lang="scss" scoped>
.image {
    width: 100%;
}
</style>
