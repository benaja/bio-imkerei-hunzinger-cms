<template>
    <div class="hexagon">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$hexagonHeight: 100px;
$hexagonBaseColor: rgba(255, 255, 255, 0.5);

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

    &:before,
    &:after {
        // content: "";
        // position: absolute;
        // width: 0;
        // border-left: $hexagonHeight / 2 solid transparent;
        // border-right: $hexagonHeight / 2 solid transparent;
        // z-index: -1;
        content: "";
        width: 0;
        position: absolute;
        border-left: $hexagonHeight / 2 solid transparent;
        border-right: $hexagonHeight / 2 solid transparent;
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

// .hexagon:before {
//     content: " ";
//     width: 0;
//     height: 0;
//     border-bottom: 30px solid #6c6;
//     border-left: 52px solid transparent;
//     border-right: 52px solid transparent;
//     position: absolute;
//     top: -30px;
// }

// .hexagon {
//     margin-top: 30px;
//     width: 104px;
//     height: 60px;
//     background-color: #6c6;
//     position: relative;
// }

// .hexagon:after {
//     content: "";
//     width: 0;
//     position: absolute;
//     bottom: -30px;
//     border-top: 30px solid #6c6;
//     border-left: 52px solid transparent;
//     border-right: 52px solid transparent;
// }
</style>
