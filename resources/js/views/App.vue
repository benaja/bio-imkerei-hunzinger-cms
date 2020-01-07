<template>
    <div>
        <NavigationBar :sticky="$route.path === '/'"></NavigationBar>
        <router-view></router-view>
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

<style lang="scss">
@import "~@/sass/_variables.scss";

body {
    background-color: $background-color;
    min-height: 100vh;
    margin-bottom: 0 !important;
}

h1 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
}

.ql-align-justify {
    text-align: justify;
}

.ql-align-center {
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

.uk-button-default {
    border-color: $yellow;
    color: $yellow;

    &:hover {
        border-color: darken($yellow, 10%);
        color: darken($yellow, 10%);
    }

    &:focus,
    &::selection {
        border-color: $yellow;
    }
}

.uk-button-link {
    color: $yellow;

    &:hover {
        color: darken($yellow, 10%);
    }

    &:focus,
    &::selection {
        color: $yellow;
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

@media only screen and (max-width: 600px) {
    h1 {
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>
