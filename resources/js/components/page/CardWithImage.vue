<template>
    <div :class="['card', value.size]">
        <h2>{{value.title}}</h2>
        <div>
            <div class="content" v-html="value.text"></div>
            <div class="image">
                <div class="video" v-if="value.url">
                    <div>
                        <iframe :src="value.url"></iframe>
                    </div>
                </div>
                <img :src="'/img/' + medias[0].uuid" v-else />
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
    margin-top: 30px;
}

.card {
    width: 60%;
    margin: 100px auto 0 auto;
    background-color: white;
    padding-top: 1px;

    &.small {
        width: 40%;
    }

    &.large {
        width: calc(100% - 20px);
    }
}

.content {
    text-align: center;
    padding: 0 20px;
}

.image {
    //   width: 50%;
    padding: 20px;
    text-align: center;
    justify-content: center;

    img {
        width: 100%;
    }

    .video {
        width: 100%;
        padding-bottom: calc(100% / 16 * 9);
        position: relative;
        > div {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            > iframe {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
