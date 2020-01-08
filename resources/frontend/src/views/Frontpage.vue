<template>
    <div>
        <div class="jarallax">
            <img class="jarallax-img" src="/images/wallpaper01.jpg" />
            <h1 class="main-title">Bio-Imkerei Hunzinger</h1>
            <h2 class="second-title">
                Schweizer Bienenhonig feinster Qualität
            </h2>
            <div class="arrow-down" @click="scrollDown()">
                <img src="/icons/arrow-down.svg" alt="Pfeil nach unten" />
            </div>
            <div class="hexagons">
                <hexagon-row uneven>
                    <template>
                        <hexagon :opacity="0.4"></hexagon>
                    </template>
                </hexagon-row>
                <hexagon-row>
                    <template>
                        <hexagon :opacity="0.6"></hexagon>
                        <hexagon :opacity="0.4" class="hide-on-small"></hexagon>
                    </template>
                </hexagon-row>
                <hexagon-row uneven>
                    <template>
                        <hexagon :opacity="0.8"></hexagon>
                        <hexagon :opacity="0.7">
                            <img
                                src="/images/logo_portrait.png"
                                class="logo hide-sm-and-down"
                            />
                        </hexagon>
                        <hexagon :opacity="0.6">
                            <img
                                src="/images/logo_portrait.png"
                                class="logo hide-md-and-up"
                            />
                        </hexagon>
                    </template>
                </hexagon-row>
                <hexagon-row>
                    <template>
                        <hexagon></hexagon>
                        <hexagon></hexagon>
                    </template>
                </hexagon-row>
                <hexagon-row uneven>
                    <template>
                        <hexagon></hexagon>
                        <hexagon></hexagon>
                    </template>
                </hexagon-row>
            </div>
            <div class="hexagons-right">
                <hexagon-row uneven inverted>
                    <template>
                        <hexagon :opacity="0.3"></hexagon>
                    </template>
                </hexagon-row>
                <hexagon-row inverted>
                    <template>
                        <hexagon :opacity="0.7">
                            <img
                                src="/images/bio-knospe.png"
                                class="bio-knopse"
                            />
                        </hexagon>
                    </template>
                </hexagon-row>
                <hexagon-row uneven inverted>
                    <template>
                        <hexagon></hexagon>
                        <hexagon></hexagon>
                    </template>
                </hexagon-row>
                <hexagon-row inverted>
                    <template>
                        <hexagon></hexagon>
                    </template>
                </hexagon-row>
            </div>
            <div class="darken-background"></div>
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
            <p class="uk-text-center all-products">
                <router-link tag="a" to="/produkte"
                    >Alle Produkte anzeigen</router-link
                >
            </p>
            <div class="content">
                <custom-content :content="contentElements"></custom-content>
            </div>
        </div>
    </div>
</template>

<script>
import { jarallax } from 'jarallax';
import ProductPreview from '@/components/products/ProductPreview';
import CustomContent from '@/components/page/CustomContent';
import HexagonRow from '@/components/hexagon/HexagonRow';
import Hexagon from '@/components/hexagon/Hexagon';

export default {
  name: 'Frontpage',
  components: {
    ProductPreview,
    CustomContent,
    HexagonRow,
    Hexagon,
  },
  data() {
    return {
      products: [],
      contentElements: [],
      navbarFixed: false,
    };
  },
  mounted() {
    this.axios.get('/features').then((response) => {
      this.products = response.data.products;
      this.contentElements = response.data.cards;
    });
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.4,
    });
  },
  methods: {
    scrollDown() {
      window.scroll({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";

h2 {
    font-size: 3rem;
    text-align: center;
}

.jarallax {
    width: 100%;
    height: 100vh;
    padding-top: 1px;
    position: relative;
}

.jarallax > .jarallax-img {
    position: absolute;
    object-fit: cover;
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    font-family: "object-fit: cover;";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.darken-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    z-index: -1;
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

.content {
    margin: 20px 0;
}

.products-header {
    margin: 150px 0 20px 0;
}

.all-products {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 50px;
}

.products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.hexagons {
    position: absolute;
    bottom: -1.3 * $hexagonHeight;
}

.hexagons-right {
    position: absolute;
    bottom: -1.3 * $hexagonHeight;
    right: 0;
    overflow: hidden;
    padding-top: $hexagonHeight / 3;
}

.logo {
    display: block;
    width: 85%;
    margin: -16% auto;
    z-index: 10;
}

.hide-md-and-up {
    display: none;
}

.bio-knopse {
    display: block;
    width: 50%;
    margin: 7% auto;
    z-index: 10;
}

.arrow-down {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    cursor: pointer;
    animation: bounce 6s infinite;

    img {
        width: 130px;
        padding: 100px 50px 10px 50px;
    }
}

@keyframes bounce {
    50% {
        transform: translateY(-30px);
    }

    100% {
        transform: translateY(0);
    }
}

@media only screen and (max-width: 1450px) {
    .hexagons {
        left: -($hexagonHeight / 2 + $hexagonHeight / 40);
    }
}

@media only screen and (max-width: 1250px) {
    .hexagons {
        bottom: -1.3 * $hexagonMediumHeight;
        left: -($hexagonMediumHeight / 2 + $hexagonMediumHeight / 40);
    }

    .hexagons-right {
        bottom: -1.3 * $hexagonMediumHeight;
    }
}

@media only screen and (max-width: 800px) {
    .hexagons {
        left: -($hexagonMobileHeight * 1.5 + $hexagonMobileHeight / 40 * 3);
        bottom: -1.3 * $hexagonMobileHeight;
    }

    .hexagons-right {
        bottom: -1.3 * $hexagonMobileHeight;
    }

    .hide-md-and-up {
        display: block;
    }

    .hide-sm-and-down {
        display: none;
    }
}

@media only screen and (max-width: 600px) {
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
