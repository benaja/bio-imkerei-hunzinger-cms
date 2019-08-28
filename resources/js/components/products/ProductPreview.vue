<template>
  <div class="product-preview-container">
    <div
      class="product-preview"
      :style="hover"
      @mouseover="updateHover(true)"
      @mouseleave="updateHover(false)"
    >
      <div
        v-if="product.image"
        class="image"
        :style="{
                backgroundImage: `url(${product.image})`
            }"
      ></div>
      <div v-else class="no-image" :style="{ backgroundImage: `url(/images/no-image.png)` }"></div>
      <div class="content">
        <h2>{{ product.title }}</h2>
        <div class="short-description">
          <p>{{ product.short_description }}</p>
        </div>
        <div v-if="product.prices.length" class="price-information">
          <p class="price">ab {{ product.prices[0].amount }}.-</p>
          <p class="subdescription">( zzgl. Versand )</p>
        </div>
      </div>
      <div class="hover-container">
        <p class="detail-description text-editor-content dark" v-html="product.description"></p>
        <router-link tag="button" class="more-button" :to="'/produkte/' + product.id">Mehr details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPreview",
  props: {
    product: {
      type: Object,
      required: true
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
}

.product-preview {
  width: 90%;
  background-color: rgb(245, 245, 245);
  position: relative;
  margin: 12px;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 0.3s;
}

.image {
  width: 100%;
  padding-bottom: 70%;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.no-image {
  height: 180px;
  width: 100%;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  // background-image: url('./../../assets/images/no-image.png');
}

.content {
  text-align: center;
  height: 200px;
}

h2 {
  margin: 20px 0 15px 0;
  line-height: 1.8rem;
  font-size: 1.8rem;
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

.price-information {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.price {
  font-weight: bold;
  margin-bottom: 0;
  font-size: 1.3rem;
}

.subdescription {
  color: gray;
  margin-top: 0;
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
  .hover-container {
    opacity: 1;
  }
}

.detail-description {
  margin: 40px;
  height: calc(100% - 150px);
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

@media only screen and (max-width: 700px) {
  .product-preview {
    width: 100%;
    margin-right: 0;
  }
}
</style>
