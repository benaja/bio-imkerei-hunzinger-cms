<template>
    <div>
        <NavigationBar></NavigationBar>
        <div class="uk-container"></div>
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
    }
};
</script>

<style>
</style>
