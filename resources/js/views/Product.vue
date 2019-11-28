<template>
    <div>
        <div class="uk-container">
            <div
                class="product-container"
                :class="{'center-content': !product.images || product.images.length === 0}"
            >
                <div v-if="product.images && product.images.length > 0" class="image" uk-lightbox>
                    <a :href="product.images[0]">
                        <img :src="product.images[0]" />
                    </a>
                </div>
                <div class="content">
                    <div class="text">
                        <h1>{{product.title}}</h1>
                        <div v-html="product.description"></div>
                    </div>
                    <div class="price">
                        <p class="available" v-if="product.available">Verfügbar</p>
                        <p class="not-available" v-else>Zurzeit nicht verfügbar</p>
                        <p class="amount">
                            <strong>
                                CHF {{ selectedPrice.amount }}
                                <span
                                    v-if="product.prices.length === 1"
                                >/ {{ selectedPrice.name }}</span>
                            </strong>
                        </p>
                        <div class="price-buttons">
                            <div
                                class="pice-names"
                                uk-switcher="animation: uk-animation-fade; toggle: > *"
                                v-if="product.prices.length > 1"
                            >
                                <button
                                    v-for="price of product.prices"
                                    class="uk-button uk-button-outline-primary price-button"
                                    type="button"
                                    @click="selectedPrice = price"
                                    :style="{width: 'calc(' + (100 / product.prices.length) + '%' + ' - 20px'}"
                                >{{ price.name }}</button>
                            </div>
                            <hr class="divider" />
                            <button
                                class="uk-button uk-button-primary"
                                type="button"
                                uk-toggle="target: #buy-information"
                            >Kaufen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BuyInformation></BuyInformation>
    </div>
</template>

<script>
import BuyInformation from "@/js/components/BuyInformation";

export default {
    components: {
        BuyInformation
    },
    data() {
        return {
            product: {
                prices: []
            },
            selectedPrice: {}
        };
    },
    mounted() {
        this.axios
            .get(`/products/${this.$route.params.productName}`)
            .then(result => {
                this.product = result.data;
                this.selectedPrice = this.product.prices[0] || [];
            });
    }
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";
h1 {
    margin-top: 0;
}

.uk-container {
    padding-top: 100px;
    min-height: calc(100vh - 500px);
}

.product-container {
    display: flex;

    &.center-content {
        justify-content: center;
    }

    > div {
        width: 50%;
    }
}

.image {
    padding-right: 20px;
    img {
        width: 100%;
    }
}

.content {
    padding-left: 20px;
}

.text {
    padding: 0 10px;
}

.available {
    color: $green;
}

.price {
    text-align: center;

    .amount {
        font-size: 1.5em;
    }
}

.price-buttons {
    > button {
        width: calc(100% - 20px);
        margin: 10px;
        padding: 10px 1px;
        line-height: 1.5em;
    }

    .pice-names {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .price-button {
        min-width: 100px;
        margin: 10px;
        text-transform: none;
        padding: 10px 1px;
        line-height: 1.5em;
    }
}

.divider {
    margin: 20px 10px;
}

@media only screen and (max-width: 1150px) {
    .price-buttons .price-button {
        min-width: calc(100% - 20px);
    }
}

@media only screen and (max-width: 800px) {
    .price-buttons .price-button {
        min-width: 100px;
    }
    .uk-container {
        padding-top: 20px;
    }

    .product-container {
        flex-wrap: wrap;
        > div {
            width: 100%;
        }
    }

    .image {
        padding-right: 0;
    }

    .content {
        padding-left: 0;
    }

    .text {
        padding: 0;
    }

    h1 {
        margin-top: 20px;
    }
}

@media only screen and (max-width: 520px) {
    .price-buttons .price-button {
        min-width: calc(100% - 20px);
    }
}
</style>
