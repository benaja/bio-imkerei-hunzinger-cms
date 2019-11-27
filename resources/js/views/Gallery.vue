<template>
    <div>
        <div class="uk-container">
            <h1>Galerie</h1>
            <div uk-grid uk-lightbox="animation: slide">
                <div v-for="image of images" class="image-container uk-width-1-4">
                    <div>
                        <a
                            class="uk-inline"
                            :href="`${image.src}&w=1500&h=1500`"
                            :data-caption="image.caption"
                        >
                            <!-- <img :src="`${image.src}&w=400&h=150`" /> -->
                            <div
                                class="image"
                                :style="{backgroundImage: `url(${image.src}&w=400&h=400)`}"
                            ></div>
                        </a>
                    </div>
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
            console.log(this.images);
        });
    }
};
</script>

<style lang="scss" scoped>
.image-container {
    text-align: center;
    padding: 10px;
    width: 25%;

    > div {
        position: relative;
        padding-bottom: 100%;

        > a {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
    }
}

.image {
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
}

.uk-grid {
    margin-left: 0;
}

.uk-first-column,
.uk-grid-margin {
    margin: 0;
}

@media only screen and (max-width: 600px) {
    .image-container {
        padding: 2px;
        width: 33.3%;
    }
}
</style>
