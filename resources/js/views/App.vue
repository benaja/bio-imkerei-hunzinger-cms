<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

export default {};
</script>

<style lang="scss">
@import "~@/sass/_variables.scss";

body {
    background-color: $background-color;
    min-height: 100vh;
    margin-bottom: 0 !important;
}

h1 {
    text-align: center;
}

$button-primary-background: #e89602;
$button-secondary-background: #0267e8;
.uk-button-primary {
    background-color: $button-primary-background;
    &:hover {
        background-color: darken($button-primary-background, 5%);
    }

    &:focus {
        background-color: $button-primary-background;
    }

    &::selection {
        background: $button-primary-background;
    }
}
.uk-button-secondary {
    background-color: $button-secondary-background;
    &:hover {
        background-color: darken($button-secondary-background, 5%);
    }
}

.uk-button-outline-primary {
    background-color: transparent;
    border: 1px solid $button-primary-background;
    &:hover,
    &.uk-active {
        background-color: $button-primary-background;
        color: white;
    }
}

::selection {
    background: $button-primary-background;
    color: white;
}

.uk-link,
a {
    color: #e89602;
    &:hover {
        color: #dd9000;
    }
}

.text-editor-content {
    &.dark {
        p,
        h1,
        h2,
        h3 {
            color: white;

            em {
                color: white;
            }
        }
    }
}
</style>
