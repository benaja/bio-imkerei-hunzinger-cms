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
                    <h1>{{product.title}}</h1>
                    <div v-html="product.description"></div>
                    <p class="available" v-if="product.available">Verfügbar</p>
                    <p class="not-available" v-else>Zurzeit nicht verfügbar</p>
                    <div class="price">
                        <p>
                            <strong>CHF {{ selectedPrice.amount }}</strong>
                        </p>
                        <div class="price-buttons">
                            <div uk-switcher="animation: uk-animation-fade; toggle: > *">
                                <button
                                    v-for="price of product.prices"
                                    class="uk-button uk-button-outline-primary price-button"
                                    type="button"
                                    @click="selectedPrice = price"
                                >{{ price.name }}</button>
                            </div>
                            <button class="uk-button uk-button-primary">Kaufen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
import PageFooter from "@/js/components/PageFooter";
import NavigationBar from "@/js/components/NavigationBar";

export default {
    components: {
        PageFooter,
        NavigationBar
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

.available {
    color: $green;
}

.price {
    text-align: center;
}

.price-buttons {
    display: inline-block;
    > button {
        width: calc(100% - 20px);
        margin: 10px;
    }

    .price-button {
        width: 120px;
        margin: 10px;
        text-transform: none;
    }
}
</style>
