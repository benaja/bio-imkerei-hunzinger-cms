<template>
    <div>
        <div class="uk-container">
            <h1>News</h1>
            <div class="news-container">
                <div v-for="article of news" class="news-card">
                    <img :src="article.image" />
                    <div class="news-text">
                        <h2>{{article.title}}</h2>
                        <div v-html="article.description"></div>
                        <a :href="article.file">{{article.file_name}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
.news-container {
    display: flex;
    flex-wrap: wrap;
}

.news-card {
    width: calc(50% - 50px);
    margin: 0 25px 25px 25px;
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

@media only screen and (max-width: 800px) {
    .news-card {
        width: 100%;
        margin: 0 0 25px 0;
    }
}
</style>
