<template>
    <div class="hexagon" :class="{transparent: transparent}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        transparent: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";

$hexagonBaseColor: rgba(255, 255, 255, 0.6);

// -webkit-clip-path: polygon(
//   50% 0%,
//   100% 25%,
//   100% 75%,
//   50% 100%,
//   0% 75%,
//   0% 25%
// );
// clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

.hexagon {
    height: $hexagonHeight / 1.8;
    width: $hexagonHeight;
    margin-left: $hexagonHeight / 35;
    margin-right: $hexagonHeight / 35;
    background-color: $hexagonBaseColor;
    display: inline-block;
    position: relative;
    vertical-align: top;
    z-index: 2;

    &.transparent {
        background-color: transparent;
        &::before,
        &::after {
            border-bottom-color: transparent;
            border-top-color: transparent;
        }
    }

    &:before,
    &:after {
        content: "";
        width: 0;
        position: absolute;
        border-left: $hexagonHeight / 2 solid transparent;
        border-right: $hexagonHeight / 2 solid transparent;
        z-index: -1;
    }

    &:before {
        top: -$hexagonHeight / 3.464;
        height: 0;
        border-bottom: $hexagonHeight / 3.464 solid $hexagonBaseColor;
    }

    &:after {
        top: 100%;
        width: 0;
        border-top: $hexagonHeight / 3.464 solid $hexagonBaseColor;
    }
}

@media only screen and (max-width: 800px) {
    .hexagon {
        height: $hexagonMobileHeight / 1.8;
        width: $hexagonMobileHeight;
        margin-left: $hexagonMobileHeight / 35;
        margin-right: $hexagonMobileHeight / 35;

        &:before,
        &:after {
            border-left: $hexagonMobileHeight / 2 solid transparent;
            border-right: $hexagonMobileHeight / 2 solid transparent;
        }

        &:before {
            top: -$hexagonMobileHeight / 3.464;
            border-bottom: $hexagonMobileHeight / 3.464 solid $hexagonBaseColor;
        }

        &:after {
            border-top: $hexagonMobileHeight / 3.464 solid $hexagonBaseColor;
        }
    }
}
</style>
