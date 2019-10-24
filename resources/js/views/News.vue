<template>
    <div>
        <NavigationBar></NavigationBar>
        <div class="uk-container">
            <h1>News</h1>
            <div class="news-container">
                <div v-for="article of news" class="news-card">
                    <img :src="article.image" />
                    <div class="news-text">
                        <h2>{{article.title}}</h2>
                        <div v-html="article.description"></div>
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
        NavigationBar,
        PageFooter
    },
    data() {
        return {
            news: []
        };
    },
    mounted() {
        this.axios.get("/news").then(response => {
            this.news = response.data;
        });
    }
};
</script>

<style lang="scss" scoped>
.uk-container {
    padding-top: 120px;
}

.news-container {
    display: flex;
    flex-wrap: wrap;
}

.news-card {
    width: calc(50% - 50px);
    margin-right: 50px;
    margin-bottom: 50px;
    background-color: white;
    cursor: pointer;

    &:hover {
        box-shadow: lightgray 0 0 20px;
    }

    > img {
        width: 100%;
    }
}

.news-text {
    padding: 20px;
}
</style>
