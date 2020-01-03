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
                <div class="hexagons">
                    <hexagon-row>
                        <div>
                            <hexagon></hexagon>
                        </div>
                    </hexagon-row>
                    <hexagon-row uneven>
                        <div>
                            <hexagon></hexagon>
                            <hexagon></hexagon>
                            <hexagon>
                                <img src="/images/bio-knospe.png" class="bio-knospe" />
                            </hexagon>
                        </div>
                    </hexagon-row>
                    <hexagon-row>
                        <div>
                            <hexagon></hexagon>
                            <hexagon></hexagon>
                            <hexagon></hexagon>
                        </div>
                    </hexagon-row>
                    <hexagon-row uneven>
                        <div>
                            <hexagon></hexagon>
                            <hexagon></hexagon>
                        </div>
                    </hexagon-row>
                </div>
            </div>
        </div>
        <div class="uk-container">
            <h2 class="products-header">Produkte</h2>
            <p class="uk-text-center all-products">
                <router-link tag="a" to="/produkte">Alle Produkte</router-link>
            </p>
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
            </div>
        </div>
    </div>
</template>

<script>
import ProductPreview from "@/js/components/products/ProductPreview";
import NavigationBar from "@/js/components/NavigationBar";
import CustomContent from "@/js/components/page/CustomContent";
import HexagonRow from "@/js/components/hexagon/HexagonRow";
import Hexagon from "@/js/components/hexagon/Hexagon";

export default {
    name: "Frontpage",
    components: {
        ProductPreview,
        NavigationBar,
        CustomContent,
        HexagonRow,
        Hexagon
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
    position: relative;
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
    margin: 70px 0 20px 0;
}

.all-products {
    font-size: 1.5rem;
    margin-bottom: 30px;
}

.products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    // transform: scale(1.025);
}

.hexagons {
    position: absolute;
    bottom: -210px;
}

.bio-knospe {
    display: block;
    width: 70%;
    margin: 0 auto;
    z-index: 10;
}

@media only screen and (max-width: 1200px) {
    .hexagons {
        left: -($hexagonHeight / 2 + $hexagonHeight / 40);
    }
}

@media only screen and (max-width: 800px) {
    .hexagons {
        left: -($hexagonMobileHeight / 2 + $hexagonMobileHeight / 40);
        bottom: -110px;
    }

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
