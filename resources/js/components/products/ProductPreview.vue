<template>
    <div class="product-preview-container" :class="{'ajust-with': !hoverSlider}">
        <router-link
            :to="'/produkte/' + product.slugs[0].slug"
            tag="div"
            class="product-preview"
            :style="hover"
            @mouseover="updateHover(true)"
            @mouseleave="updateHover(false)"
        >
            <div
                v-if="product.medias.length > 0"
                class="image"
                :style="{ backgroundImage: `url(${product.images[0]})` }"
            ></div>
            <div v-else class="no-image">
                <p>Kein Bild vorhanden</p>
            </div>
            <div class="content">
                <h3>{{ product.title }}</h3>
                <div class="short-description">
                    <p>{{ product.short_description }}</p>
                </div>
                <div v-if="product.prices.length > 0" class="price-information">
                    <p class="price">ab {{ product.prices[0].amount }}.-</p>
                    <p class="subdescription">( zzgl. Versand )</p>
                </div>
            </div>
            <div class="hover-container" v-if="hoverSlider">
                <p class="detail-description text-editor-content dark" v-html="product.description"></p>
                <router-link
                    tag="button"
                    class="more-button"
                    :to="'/produkte/' + product.slugs[0].slug"
                >Mehr details</router-link>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "ProductPreview",
    props: {
        product: {
            type: Object,
            required: true
        },
        hoverSlider: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            hover: {}
        };
    },
    computed: {
        weight() {
            return this.product.prices.filter(price => price.isDefault)[0];
        }
    },
    mounted() {},
    methods: {
        updateHover(isHover) {
            if (isHover) {
                this.hover = {
                    transform: "scale(1.05)"
                };
            } else {
                this.hover = {};
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.product-preview-container {
    width: 25%;
    margin-bottom: 30px;
}

.product-preview {
    padding-top: 1px;
    width: 90%;
    background-color: white;
    position: relative;
    margin: 0 5%;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 0.3s;
    // box-shadow: 10px 10px 10px lightgray;
}

.image {
    width: 100%;
    padding-bottom: 60%;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

.no-image {
    padding-bottom: 60%;
    position: relative;
    width: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    // background-image: url('./../../assets/images/no-image.png');
    > p {
        position: absolute;
        text-align: center;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
}

.content {
    text-align: center;
    height: 190px;
}

h3 {
    margin: 10px 0 0 0;
    // line-height: 1.8rem;
    font-size: 35px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.short-description {
    height: 60px;
    p {
        position: relative;
        color: #e89602;
        font-size: 1.3rem;
        margin: 0 10px;
        vertical-align: middle;
        top: 50%;
        transform: translateY(-50%);
    }
}

.price {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 1.3rem;
}

.subdescription {
    color: gray;
    margin-top: 0;
    // margin-bottom: 20px;
}

.hover-container {
    opacity: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(63, 63, 63, 0.9);
    text-align: center;
    transition: 0.4s;
    border-radius: 5px;
}

.product-preview:hover {
    transform: scale(1.05);
    .hover-container {
        opacity: 1;
    }
}

.detail-description {
    margin: 20px;
    height: calc(100% - 120px);
    overflow-x: hidden;
    overflow-y: hidden;

    color: white;
}

.more-button {
    background-color: transparent;
    border-style: solid;
    border-color: white;
    border-radius: 30px;
    color: white;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
}

.more-button:hover {
    color: lightgray;
    border-color: lightgray;
}

@media only screen and (max-width: 1700px) {
    .ajust-with {
        width: 33.3%;
    }
}

@media only screen and (max-width: 1200px) {
    .product-preview-container {
        width: 50%;
    }
}

@media only screen and (max-width: 600px) {
    .product-preview-container {
        width: 100%;
    }

    .product-preview {
        width: 100%;
        margin: 0;

        &:hover {
            transform: scale(1);
        }
    }

    .hover-container {
        display: none;
    }
}

//   .product-preview {
//     margin: 0;
//     width: 100%;
//     max-width: unset;
//     box-shadow: none;
//   }

//   .hover-container {
//     display: none;
//   }
// }
</style>
