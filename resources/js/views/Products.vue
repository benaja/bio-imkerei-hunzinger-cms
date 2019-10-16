<template>
    <div>
        <NavigationBar></NavigationBar>
        <div class="uk-container">
            <h1 class="uk-margin-top">Produkte</h1>
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
                    <h4>Filter</h4>
                    <div
                        v-for="(filter, index) in filters"
                        :class="['filter', {selected: filter.selected}]"
                        @click="changeFilter(index)"
                    >
                        <p>{{filter.text}}</p>
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
        <PageFooter></PageFooter>
    </div>
</template>

<script>
import PageFooter from "@/js/components/PageFooter";
import NavigationBar from "@/js/components/NavigationBar";
import ProductPreview from "@/js/components/products/ProductPreview";

export default {
    components: {
        PageFooter,
        NavigationBar,
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
                console.log(a.minPirce);
                if (a.minPirce > b.minPirce) return 1;
                if (a.minPirce < b.minPirce) return -1;
                return 0;
            } else {
                a.minPirce = a.prices.sort(this.sortPrices)[0];
                if (a.minPirce < b.minPirce) return 1;
                if (a.minPirce > b.minPirce) return -1;
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
.uk-container {
    padding-top: 100px;
}

h4 {
    margin-bottom: 0;
}

.products-grid {
    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: auto auto;
}

.filter {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 1;
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

.uk-select {
    background-color: transparent;
    border-color: $yellow;
}

.products {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;
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
</style>
