<template>
    <div class="f-modal-icon f-modal-success animate">
        <span class="f-modal-line f-modal-tip animateSuccessTip"></span>
        <span class="f-modal-line f-modal-long animateSuccessLong"></span>
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

    &.f-modal-success {
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

    + .f-modal-icon {
        margin-top: 50px;
    }
}

.animateSuccessTip {
    animation: animateSuccessTip 0.75s;
}

.animateSuccessLong {
    animation: animateSuccessLong 0.75s;
}

.f-modal-icon.f-modal-success.animate:after {
    animation: rotatePlaceholder 4.25s ease-in;
}

@keyframes animateSuccessTip {
    0%,
    54% {
        width: 0;
        left: 1px;
        top: 19px;
    }

    70% {
        width: 50px;
        left: -8px;
        top: 37px;
    }

    84% {
        width: 17px;
        left: 21px;
        top: 48px;
    }

    100% {
        width: 25px;
        left: 14px;
        top: 45px;
    }
}

@keyframes animateSuccessLong {
    0%,
    65% {
        width: 0;
        right: 46px;
        top: 54px;
    }

    84% {
        width: 55px;
        right: 0;
        top: 35px;
    }

    100% {
        width: 47px;
        right: 8px;
        top: 38px;
    }
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
</style>
