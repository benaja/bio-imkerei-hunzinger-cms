<template>
    <div class="f-modal-icon f-modal-error animate">
        <span class="f-modal-x-mark">
            <span class="f-modal-line f-modal-left animateXLeft"></span>
            <span class="f-modal-line f-modal-right animateXRight"></span>
        </span>
        <div class="f-modal-placeholder"></div>
        <div class="f-modal-fix"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.f-modal-icon {
    border-radius: 50%;
    border: 4px solid gray;
    box-sizing: content-box;
    height: 80px;
    margin: 20px auto;
    padding: 0;
    position: relative;
    width: 80px;

    &.f-modal-error {
        border-color: #a5dc86;

        &:after,
        &:before {
            background: #fff;
            content: "";
            height: 120px;
            position: absolute;
            transform: rotate(45deg);
            width: 60px;
        }

        &:before {
            border-radius: 120px 0 0 120px;
            left: -33px;
            top: -7px;
            transform-origin: 60px 60px;
            transform: rotate(-45deg);
        }

        &:after {
            border-radius: 0 120px 120px 0;
            left: 30px;
            top: -11px;
            transform-origin: 0 60px;
            transform: rotate(-45deg);
        }

        .f-modal-placeholder {
            border-radius: 50%;
            border: 4px solid rgba(165, 220, 134, 0.2);
            box-sizing: content-box;
            height: 80px;
            left: -4px;
            position: absolute;
            top: -4px;
            width: 80px;
            z-index: 2;
        }

        .f-modal-fix {
            background-color: #fff;
            height: 90px;
            left: 28px;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 5px;
            z-index: 1;
        }

        .f-modal-line {
            background-color: #a5dc86;
            border-radius: 2px;
            display: block;
            height: 5px;
            position: absolute;
            z-index: 2;

            &.f-modal-tip {
                left: 14px;
                top: 46px;
                transform: rotate(45deg);
                width: 25px;
            }

            &.f-modal-long {
                right: 8px;
                top: 38px;
                transform: rotate(-45deg);
                width: 47px;
            }
        }
    }

    // Error icon
    &.f-modal-error {
        border-color: #f27474;

        .f-modal-x-mark {
            display: block;
            position: relative;
            z-index: 2;
        }

        .f-modal-placeholder {
            border: 4px solid rgba(200, 0, 0, 0.2);
        }

        .f-modal-line {
            background-color: #f27474;
            top: 37px;
            width: 47px;

            &.f-modal-left {
                left: 17px;
                transform: rotate(45deg);
            }

            &.f-modal-right {
                right: 16px;
                transform: rotate(-45deg);
            }
        }
    }

    + .f-modal-icon {
        margin-top: 50px;
    }
}

.f-modal-icon.f-modal-error.animate:after {
    animation: rotatePlaceholder 4.25s ease-in;
}

.animateErrorIcon {
    animation: animateErrorIcon 0.5s;
}

.animateXLeft {
    animation: animateXLeft 0.75s;
}

.animateXRight {
    animation: animateXRight 0.75s;
}

@keyframes rotatePlaceholder {
    0%,
    5% {
        transform: rotate(-45deg);
    }

    100%,
    12% {
        transform: rotate(-405deg);
    }
}

@keyframes animateErrorIcon {
    0% {
        transform: rotateX(100deg);
        opacity: 0;
    }

    100% {
        transform: rotateX(0deg);
        opacity: 1;
    }
}

@keyframes animateXLeft {
    0%,
    65% {
        left: 82px;
        top: 95px;
        width: 0;
    }

    84% {
        left: 14px;
        top: 33px;
        width: 47px;
    }

    100% {
        left: 17px;
        top: 37px;
        width: 47px;
    }
}

@keyframes animateXRight {
    0%,
    65% {
        right: 82px;
        top: 95px;
        width: 0;
    }

    84% {
        right: 14px;
        top: 33px;
        width: 47px;
    }

    100% {
        right: 16px;
        top: 37px;
        width: 47px;
    }
}
</style>
