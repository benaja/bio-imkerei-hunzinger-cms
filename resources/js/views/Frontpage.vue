<template>
    <div>
        <div uk-parallax="bgy: 200" class="background-image">
            <div class="darken-background">
                <img
                    class="large-logo"
                    src="/images/logo_portrait_inverted.png"
                    v-if="!navbarFixed"
                />
                <h1 class="main-title">Bio-Imkerei Hunzinger</h1>
                <h2 class="second-title">Schweizer Bienenhonig feinster Qualität</h2>
            </div>
        </div>
        <div class="uk-container">
            <h2 class="products-header">Produkte</h2>
            <div class="products">
                <ProductPreview
                    v-for="product of products"
                    :key="product.id"
                    :product="product"
                    hover-slider
                ></ProductPreview>
            </div>
            <div class="content">
                <custom-content :content="contentElements"></custom-content>
                <!-- <template v-for="card of contentElements">
                    <card-with-image
                        v-if="card.type === 'card_with_image' || card.type === 'card_with_video'"
                        :card="card"
                    ></card-with-image>
                    <multi-card
                        v-if="card.type === 'multi_card'"
                        :cards="card.subCards"
                        :columns="parseInt(card.content.columns)"
                    ></multi-card>
                </template>-->
            </div>
        </div>
    </div>
</template>

<script>
import ProductPreview from "@/js/components/products/ProductPreview";
import NavigationBar from "@/js/components/NavigationBar";
import CardWithImage from "@/js/components/page/CardWithImage";
import MultiCard from "@/js/components/page/MultiCard";
import CustomContent from "@/js/components/page/CustomContent";

export default {
    name: "Frontpage",
    components: {
        ProductPreview,
        NavigationBar,
        CardWithImage,
        MultiCard,
        CustomContent
    },
    data() {
        return {
            products: [],
            contentElements: [],
            navbarFixed: false
        };
    },
    mounted() {
        this.axios.get("/features").then(response => {
            this.products = response.data.products;
            this.contentElements = response.data.cards;
        });

        window.onscroll = this.onScroll;
    }
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";

h2 {
    font-size: 3rem;
    text-align: center;
}

.background-image {
    height: 100vh;
    width: 100%;
    background-position: center center;
    background-size: cover;
    background-image: url("/images/wallpaper01.jpg");
}

.darken-background {
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100vh;
    padding-top: 1px;
}

.main-title {
    color: white;
    font-size: 80px;
    text-align: center;
    margin-top: calc(50vh - 100px);
    // margin-top: -200px;
}

.second-title {
    color: white;
    font-size: 40px;
    text-align: center;
    margin-top: 0;
}

.large-logo {
    height: 170px;
    margin: 10px;
    display: block;
    position: absolute;
}

.content {
    margin: 20px 0;
}

.products-header {
    margin: 70px 0;
}

.products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    // transform: scale(1.025);
}

@media only screen and (max-width: 800px) {
    .large-logo {
        right: 0;
    }
}

@media only screen and (max-width: 600px) {
    .large-logo {
        display: none;
    }

    .main-title {
        font-size: 60px;
        margin-top: calc(50vh - 150px);
    }

    .second-title {
        font-size: 30px;
    }

    .products {
        transform: scale(1);
    }

    .products-header {
        margin-top: 50px;
        margin-bottom: 20px;
    }
}
</style>
