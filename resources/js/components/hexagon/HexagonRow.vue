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
$hexagonHeight: 100px;

.row {
    height: $hexagonHeight;
    margin-bottom: -$hexagonHeight / 9;
    white-space: nowrap;

    &.uneven {
        margin-left: ($hexagonHeight / 2 + $hexagonHeight / 35);
    }
}
</style>
