<template>
    <div>
        <div class="uk-container">
            <div
                class="product-container"
                :class="{'center-content': !product.images || product.images.length === 0}"
                v-if="isLoaded"
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
                        <p v-if="product.prices.length === 1">Menge: {{ selectedPrice.name }}</p>
                        <p class="amount">
                            <strong>{{ selectedPrice.amount }}{{Math.round(selectedPrice.amount) === selectedPrice.amount ? '.-' : ''}}</strong>
                        </p>
                    </div>
                    <div class="price">
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
                        <div class="additional-information">
                            <p class="available" v-if="product.available">
                                <img src="/icons/available.svg" />Verfügbar
                            </p>
                            <p class="not-available" v-else>
                                <img src="/icons/not-available.svg" />Zurzeit nicht verfügbar
                            </p>
                            <template v-if="product.isBio">
                                <p class="available">
                                    <img src="/icons/available.svg" />Bio-Knospe
                                </p>
                                <img class="bio-logo" src="/images/bio-knospe.png" />
                            </template>
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
            selectedPrice: {},
            isLoaded: false
        };
    },
    mounted() {
        this.axios
            .get(`/products/${this.$route.params.productName}`)
            .then(result => {
                this.product = result.data;
                this.selectedPrice = this.product.prices[0] || [];
                this.isLoaded = true;
            });
    }
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";
h1 {
    margin: 0 auto 20px auto;
    text-align: left;
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
        max-width: 100%;
        max-height: 70vh;
        margin: 0 auto;
        display: block;
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

.not-available {
    color: $red;
}

.available,
.not-available {
    margin: 5px 0;
    img {
        height: 0.8em;
        margin-right: 5px;
    }
}

.amount {
    font-size: 1.5em;
    color: rgb(83, 83, 83);
    margin: 0 0 20px 0;
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

.bio-logo {
    width: 100px;
}

.additional-information {
    margin: 0 10px;
}

@media only screen and (max-width: 1150px) {
    .price-buttons .price-button {
        min-width: calc(100% - 20px);
    }
}

@media only screen and (max-width: 800px) {
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
    .price-buttons {
        .price-button {
            min-width: 100%;
        }

        > button {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
        }
    }

    .divider {
        margin: 20px 0;
    }

    .additional-information {
        margin: 0;
    }
}
</style>
