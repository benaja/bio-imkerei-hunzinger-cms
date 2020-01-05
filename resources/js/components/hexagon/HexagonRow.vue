<template>
    <div class="row" :class="{ uneven: uneven, inverted: inverted }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        uneven: {
            type: Boolean,
            default: false
        },
        inverted: {
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
    display: flex;

    &.uneven {
        margin-left: -($hexagonHeight / 2 + $hexagonHeight / 30);
    }

    &.inverted {
        justify-content: flex-end;
        &.uneven {
            margin-left: 0;
            margin-right: -($hexagonHeight / 2 + $hexagonHeight / 30);
        }
    }
}

@media only screen and (max-width: 1250px) {
    .row {
        height: $hexagonMediumHeight;
        margin-bottom: -$hexagonMediumHeight / 10;

        &.uneven {
            margin-left: -($hexagonMediumHeight / 2 + $hexagonMediumHeight / 30);
        }

        &.inverted.uneven {
            margin-right: -($hexagonMediumHeight / 2 + $hexagonMediumHeight / 30);
        }
    }
}

@media only screen and (max-width: 800px) {
    .row {
        height: $hexagonMobileHeight;
        margin-bottom: -$hexagonMobileHeight / 10;

        &.uneven {
            margin-left: -($hexagonMobileHeight / 2 + $hexagonMobileHeight / 30);
        }

        &.inverted.uneven {
            margin-right: -($hexagonMobileHeight / 2 + $hexagonMobileHeight / 30);
        }
    }
}
</style>
