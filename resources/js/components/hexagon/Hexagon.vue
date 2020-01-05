<template>
    <div
        class="hexagon"
        :class="[`opacity-${opacity * 100}`, { transparent: transparent }]"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        transparent: {
            type: Boolean,
            default: false
        },
        opacity: {
            type: Number,
            default: 1
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@/sass/_variables.scss";

$hexagonBaseColor: white;

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
    margin-left: $hexagonHeight / 30;
    margin-right: $hexagonHeight / 30;
    background-color: $hexagonBaseColor;
    position: relative;
    vertical-align: top;
    z-index: 2;

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

    &:hover {
        filter: brightness(90%);
    }

    &.transparent,
    &.opacity-0 {
        background-color: transparent;
        &::before,
        &::after {
            border-bottom-color: transparent;
            border-top-color: transparent;
        }
    }

    &.opacity-10 {
        background-color: rgba(255, 255, 255, 0.1);
        &::before,
        &::after {
            border-bottom-color: rgba(255, 255, 255, 0.1);
            border-top-color: rgba(255, 255, 255, 0.1);
        }
    }

    &.opacity-20 {
        background-color: rgba(255, 255, 255, 0.2);
        &::before,
        &::after {
            border-bottom-color: rgba(255, 255, 255, 0.2);
            border-top-color: rgba(255, 255, 255, 0.2);
        }
    }

    &.opacity-30 {
        background-color: rgba(255, 255, 255, 0.3);
        &::before,
        &::after {
            border-bottom-color: rgba(255, 255, 255, 0.3);
            border-top-color: rgba(255, 255, 255, 0.3);
        }
    }

    &.opacity-40 {
        background-color: rgba(255, 255, 255, 0.4);
        &::before,
        &::after {
            border-bottom-color: rgba(255, 255, 255, 0.4);
            border-top-color: rgba(255, 255, 255, 0.4);
        }
    }

    &.opacity-50 {
        background-color: rgba(255, 255, 255, 0.5);
        &::before,
        &::after {
            border-bottom-color: rgba(255, 255, 255, 0.5);
            border-top-color: rgba(255, 255, 255, 0.5);
        }
    }

    &.opacity-60 {
        background-color: rgba(255, 255, 255, 0.6);
        &::before,
        &::after {
            border-bottom-color: rgba(255, 255, 255, 0.6);
            border-top-color: rgba(255, 255, 255, 0.6);
        }
    }

    &.opacity-70 {
        background-color: rgba(255, 255, 255, 0.7);
        &::before,
        &::after {
            border-bottom-color: rgba(255, 255, 255, 0.7);
            border-top-color: rgba(255, 255, 255, 0.7);
        }
    }

    &.opacity-80 {
        background-color: rgba(255, 255, 255, 0.8);
        &::before,
        &::after {
            border-bottom-color: rgba(255, 255, 255, 0.8);
            border-top-color: rgba(255, 255, 255, 0.8);
        }
    }

    &.opacity-90 {
        background-color: rgba(255, 255, 255, 0.9);
        &::before,
        &::after {
            border-bottom-color: rgba(255, 255, 255, 0.9);
            border-top-color: rgba(255, 255, 255, 0.9);
        }
    }
}

@media only screen and (max-width: 1250px) {
    .hexagon {
        height: $hexagonMediumHeight / 1.8;
        width: $hexagonMediumHeight;
        margin-left: $hexagonMediumHeight / 35;
        margin-right: $hexagonMediumHeight / 35;

        &:before,
        &:after {
            border-left: $hexagonMediumHeight / 2 solid transparent;
            border-right: $hexagonMediumHeight / 2 solid transparent;
        }

        &:before {
            top: -$hexagonMediumHeight / 3.464;
            border-bottom: $hexagonMediumHeight / 3.464 solid $hexagonBaseColor;
        }

        &:after {
            border-top: $hexagonMediumHeight / 3.464 solid $hexagonBaseColor;
        }
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
