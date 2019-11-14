<template>
    <div>
        <div class="uk-container">
            <h1>Galerie</h1>
            <div
                class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l"
                uk-grid
                uk-lightbox="animation: slide"
            >
                <div v-for="image of images" class="image-container">
                    <a class="uk-inline" :href="image.src" :data-caption="image.caption">
                        <img :src="`${image.src}&w=400&h=150`" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: []
        };
    },
    mounted() {
        this.axios.get("/gallery").then(response => {
            this.images = response.data;
        });
    }
};
</script>

<style lang="scss" scoped>
.image-container {
    text-align: center;
}
</style>
