<template>
    <div class="row" :class="{uneven: uneven}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        uneven: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";

.row {
    height: $hexagonHeight;
    margin-bottom: -$hexagonHeight / 10;
    white-space: nowrap;

    &.uneven {
        margin-left: -($hexagonHeight / 2 + $hexagonHeight / 20);
    }
}

@media only screen and (max-width: 800px) {
    .row {
        height: $hexagonMobileHeight;
        margin-bottom: -$hexagonMobileHeight / 10;

        &.uneven {
            margin-left: -($hexagonMobileHeight / 2 + $hexagonMobileHeight / 20);
        }
    }
}
</style>
