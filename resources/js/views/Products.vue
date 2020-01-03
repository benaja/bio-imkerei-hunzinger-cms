<template>
    <div>
        <div class="products-container">
            <h1>Produkte</h1>
            <div class="products-grid">
                <div class="filter">
                    <div>
                        <label class="uk-form-label" for="sort-by">
                            <h4>Sortieren nach</h4>
                        </label>
                        <select v-model="sortby" class="uk-select" id="sort-by">
                            <option value="1" selected>Bestseller</option>
                            <option value="2">Günstigste</option>
                            <option value="3">Teuerste</option>
                        </select>
                    </div>
                    <div class="filter-desktop">
                        <h4>Filter</h4>
                        <div
                            v-for="(filter, index) in filters"
                            :class="['filter', {selected: filter.selected}]"
                            @click="changeFilter(index)"
                        >
                            <p>{{filter.text}}</p>
                        </div>
                    </div>
                    <div class="filter-mobile">
                        <button class="uk-button uk-button-default uk-width-1-1" type="button">
                            <span uk-icon="settings" class="filter-icon"></span>Filter
                        </button>
                    </div>
                </div>
                <div class="products">
                    <ProductPreview
                        v-for="product of filterProducts"
                        :product="product"
                        :key="product.id"
                    ></ProductPreview>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductPreview from "@/js/components/products/ProductPreview";

export default {
    components: {
        ProductPreview
    },
    data() {
        return {
            products: [],
            categories: [],
            filters: [
                { text: "Alle Produkte", selected: true, type: "all" },
                { text: "An Lager", selected: false, type: "available" }
            ],
            sortby: 1
        };
    },
    computed: {
        filterProducts: function() {
            return this.products
                .filter(product => {
                    for (let filter of this.filters) {
                        if (filter.selected) {
                            if (filter.type === "category") {
                                if (
                                    !product.categories.some(
                                        c => c.id == filter.categoryId
                                    )
                                ) {
                                    return false;
                                }
                            } else if (filter.type === "available") {
                                if (!product.available) {
                                    return false;
                                }
                            }
                        }
                    }
                    return true;
                })
                .sort(this.sort);
        }
    },
    mounted() {
        this.axios.get("/products").then(response => {
            this.products = response.data;
        });
        this.axios.get("/categories").then(response => {
            this.categories = response.data;
            for (let category of this.categories) {
                this.filters.push({
                    text: category.name,
                    selected: false,
                    type: "category",
                    categoryId: category.id
                });
            }
        });
    },
    methods: {
        changeFilter(index) {
            for (let filter of this.filters) {
                filter.selected = false;
            }
            this.filters[index].selected = true;
        },
        sort(a, b) {
            if (this.sortby == 1) {
                if (a.rank > b.rank) return 1;
                if (a.rank < b.rank) return -1;
                return 0;
            } else if (this.sortby == 2) {
                a.minPirce = a.prices.sort(this.sortPrices)[0];
                b.minPirce = b.prices.sort(this.sortPrices)[0];
                if (!a.minPirce || !b.minPirce) return -1;
                if (a.minPirce.amount > b.minPirce.amount) return 1;
                if (a.minPirce.amount < b.minPirce.amount) return -1;
                return 0;
            } else {
                a.minPirce = a.prices.sort(this.sortPrices)[0];
                b.minPirce = b.prices.sort(this.sortPrices)[0];
                if (!a.minPirce || !b.minPirce) return 1;
                if (a.minPirce.amount < b.minPirce.amount) return 1;
                if (a.minPirce.amount > b.minPirce.amount) return -1;
                return 0;
            }
        },
        sortPrices(priceA, priceB) {
            return (
                (priceA.amount > priceB.amount) -
                (priceA.amount < priceB.amount)
            );
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";
.products-container {
    width: 90%;
    max-width: 1500px;
    margin: 0 auto;
}

h4 {
    margin-bottom: 0;
}

.filter-icon {
    margin-right: 10px;
}

.products-grid {
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: auto auto;
    grid-template-areas:
        "filter products"
        "filter products";
}

.filter {
    grid-area: filter;
    margin: 5px 0;
    padding: 3px 6px;
    cursor: pointer;
    p {
        margin: 0;
    }

    &.selected {
        background-color: rgba(255, 192, 75, 0.479);
        border-radius: 3px;
    }
}

.filter-mobile {
    display: none;
}

.uk-select {
    background-color: transparent;
    border-color: $yellow;
}

.products {
    grid-area: products;
    display: flex;
    flex-wrap: wrap;
    min-height: 300px;
}

[type="checkbox"].filled-in:checked + span:not(.lever):after {
    background-color: $yellow;
    border-color: $yellow;
}

.filter-text {
    float: left;
    width: 150px;
    font-weight: bold;
}

@media only screen and (max-width: 800px) {
    .products-grid {
        grid-template-columns: auto auto;
        grid-template-areas:
            "filter filter"
            "products products";
    }

    .filter {
        padding: 0;
    }

    .filter-desktop {
        display: none;
    }
}
</style>
