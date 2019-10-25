<template>
    <div>
        <NavigationBar></NavigationBar>
        <div class="uk-container">
            <h1>Über Uns</h1>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
import PageFooter from "@/js/components/PageFooter";
import NavigationBar from "@/js/components/NavigationBar";

export default {
    components: {
        PageFooter,
        NavigationBar
    },
    data() {
        return {
            content: []
        };
    },
    mounted() {
        this.axios
            .get("/about-us")
            .then(response => (this.content = response.data));
    }
};
</script>

<style lang="scss" scoped>
.uk-container {
    padding-top: 120px;
}
</style>
