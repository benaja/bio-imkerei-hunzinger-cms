<template>
    <div>
        <NavigationBar></NavigationBar>
        <div class="uk-container">
            <div class="product-container">
                <div class="image" uk-lightbox>
                    <a v-if="product.medias" :href="'/img/' + product.medias[0].uuid">
                        <img :src="'/img/' + product.medias[0].uuid" />
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
        <PageFooter></PageFooter>
    </div>
</template>

<script>
import PageFooter from "@/js/components/PageFooter";
import NavigationBar from "@/js/components/NavigationBar";
import BuyInformation from "@/js/components/BuyInformation";

export default {
    components: {
        PageFooter,
        NavigationBar,
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
.uk-container {
    padding-top: 130px;
    min-height: calc(100vh - 500px);
    padding-bottom: 100px;
}

.product-container {
    display: flex;

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
    // display: inline-block;
    > button {
        width: calc(100% - 20px);
        margin: 10px;
    }

    .price-button {
        // width: 120px;
        margin: 10px;
        text-transform: none;
    }
}
</style>
