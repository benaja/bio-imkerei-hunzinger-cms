<template>
    <div class="uk-container">
        <h1>Unser Projekt</h1>
        <custom-content :content="content"></custom-content>
    </div>
</template>

<script>
import CustomContent from "@/js/components/page/CustomContent";

export default {
    name: "Project",
    components: {
        CustomContent
    },
    data() {
        return {
            content: []
        };
    },
    mounted() {
        this.axios.get("/project").then(response => {
            this.content = response.data;
        });
    }
};
</script>

<style lang="scss">
.ql-video {
    float: right;
    width: 100%;
    height: 600px;
}

.ql-align-justify {
    text-align: left;
}
</style>
