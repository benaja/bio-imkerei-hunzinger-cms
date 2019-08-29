<template>
  <div>
    <div uk-parallax="bgy: -200" class="background-image">
      <div class="darken-background">
        <!-- <div :class="{'navbar-fixed': navbarFixed}"> -->
        <div
          uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 60"
        >
          <nav class="uk-navbar-container" uk-navbar>
            <a class="uk-navbar-item uk-logo" href="/">
              <img class="logo" src="/images/logo_portrait.png" />
            </a>

            <div class="uk-navbar-right">
              <ul class="uk-navbar-nav">
                <li>
                  <a href="/produkte">Produkte</a>
                </li>
                <li>
                  <a href="/galerie">Galerie</a>
                </li>
                <li>
                  <a href="/news">News</a>
                </li>
                <li>
                  <a href="/about">Über Uns</a>
                  <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                      <li>
                        <a href="/kontakt">Über Uns</a>
                      </li>
                      <li>
                        <a href="/kontakt">Kontakt</a>
                      </li>
                      <li>
                        <a href="/projekt">Projekt</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <!-- </div> -->
        <h1 class="main-title">Bio-Imkerei Hunzinger</h1>
        <h2 class="second-title">Schweizer Bienenhonig feinster Qualität</h2>
      </div>
    </div>
    <div class="uk-container">
      <h2 class="products-header">Produkte</h2>
      <div class="products">
        <ProductPreview v-for="product of products" :key="product.id" :product="product"></ProductPreview>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import ProductPreview from "@/js/components/products/ProductPreview";
import PageFooter from "@/js/components/PageFooter";

export default {
  name: "Frontpage",
  components: {
    ProductPreview,
    PageFooter
  },
  data() {
    return {
      products: [],
      navbarFixed: false
    };
  },
  mounted() {
    this.axios.get("/features").then(response => {
      this.products = response.data.products;
    });

    // this.axios.get("/products").then(response => {
    //   console.log(response.data);
    // });

    window.onscroll = this.onScroll;
  },
  methods: {
    onScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        console.log("x");
        this.navbarFixed = true;
      } else {
        console.log("y");
        this.navbarFixed = false;
      }
    }
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
  margin-top: calc(50vh - 200px);
}

.second-title {
  color: white;
  font-size: 40px;
  text-align: center;
  margin-top: 0;
}

.uk-navbar-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.uk-navbar-right {
  margin-right: 10px;
}

.uk-navbar-sticky {
  // box-shadow: 0 0 7px black;
  background-color: black;
  // .uk-navbar-nav {
  //   > li > a {
  //     color: rgb(71, 71, 71);
  //   }

  //   > li.uk-active > a {
  //     color: rgb(116, 116, 116);
  //   }
  // }
  .uk-navbar-nav > li > a,
  .uk-navbar-item {
    min-height: 50px;
  }

  .logo {
    height: 50px;
  }
}

.uk-navbar-nav > li > a {
  color: white;
}

.uk-navbar-nav > li.uk-active > a {
  color: lightgray;
}

.logo {
  height: 60px;
}

.content {
  margin: 20px 10%;
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

@media only screen and (max-width: 1100px) {
  // .products {
  //   transform: scale(1.05);
  // }
}

@media only screen and (max-width: 550px) {
  .products {
    transform: scale(1);
  }

  .products-header {
    margin-top: 50px;
    margin-bottom: 20px;
  }
}
</style>
