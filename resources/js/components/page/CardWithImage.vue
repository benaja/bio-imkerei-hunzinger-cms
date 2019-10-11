<template>
    <div class="card">
        <h2>{{value.title}}</h2>
        <div>
            <div class="content" v-html="value.text"></div>
            <div class="image">
                <img :src="'/img/' + medias[0].uuid" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentWithImage",
    props: {
        value: {
            type: Object,
            required: true
        },
        medias: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        content() {
            //   return JSON.parse(this.value);
        }
    },
    mounted() {
        // console.log(this.content);
    }
};
</script>

<style lang="scss" scoped>
h2 {
    font-size: 3rem;
    text-align: center;
    margin-top: 100px;
}

.card {
    max-width: 600px;
    width: 50%;
    margin: 0 auto;
}

.content {
    text-align: center;
}

.image {
    //   width: 50%;
    text-align: center;
    justify-content: center;

    img {
        width: 100%;
    }
}
</style>
