<template>
    <div :class="{'navigation-box-container': !sticky}">
        <div
            :class="{sticky: sticky}"
            :uk-sticky="sticky ? 'animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 50vh' :false"
        >
            <nav class="uk-navbar-container" uk-navbar>
                <div class="uk-navbar-left menu-icon">
                    <a
                        class="uk-navbar-toggle"
                        uk-navbar-toggle-icon
                        href="#offcanvas-slide"
                        uk-toggle
                    ></a>
                </div>
                <a class="uk-navbar-item uk-logo logo-desktop" href="/">
                    <img class="logo" src="/images/logo_portrait.png" />
                    Bio-Imkerei Hunzinger
                </a>
                <a class="uk-navbar-item uk-logo logo-mobile" href="/">
                    <p>Bio-Imkerei Hunzinger</p>
                    <img class="logo" src="/images/logo_portrait.png" />
                </a>

                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li>
                            <a href="/produkte">Produkte</a>
                        </li>
                        <li>
                            <a href="/galerie">Galerie</a>
                        </li>
                        <li>
                            <a href="/kontakt">Kontakt</a>
                        </li>
                        <li>
                            <a href="/about">Über Uns</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li>
                                        <a href="/about">Über Uns</a>
                                    </li>

                                    <li>
                                        <a href="/news">News</a>
                                    </li>
                                    <li>
                                        <a href="/projekt">Projekt</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div id="offcanvas-slide" uk-offcanvas="overlay: true">
            <div class="uk-offcanvas-bar">
                <ul class="uk-nav uk-nav-default">
                    <li class="uk-active">
                        <a href="/">Startseite</a>
                    </li>
                    <li>
                        <a href="/produkte">Produkte</a>
                    </li>
                    <li>
                        <a href="/galerie">Galerie</a>
                    </li>
                    <li>
                        <a href="/kontakt">Kontakt</a>
                    </li>
                    <li>
                        <a href="/about">Über Uns</a>
                        <ul class="uk-nav-sub">
                            <li>
                                <a href="/news">News</a>
                            </li>
                            <li>
                                <a href="/projekt">Projekt</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavigationBar",
    props: {
        sticky: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.uk-navbar-right {
    margin-right: 10px;
}

.navigation-box-container {
    height: 80px;
}

.uk-navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 100;
}

.uk-light .uk-navbar-nav > li:hover > a {
    color: rgb(60, 60, 60);
}

.uk-navbar-nav > li > a {
    color: black;

    &.uk-open {
        color: black;
    }
}

.uk-light .uk-logo {
    color: black;
}

.sticky {
    .uk-navbar-container {
        position: absolute;
        background-color: transparent;
    }

    .uk-navbar-sticky {
        background-color: white;
        box-shadow: rgba(128, 128, 128, 0.623) 0 0 20px;

        .uk-navbar-nav > li > a,
        .uk-navbar-item,
        .uk-navbar-toggle {
            min-height: 70px;
            color: black;
        }

        .uk-logo {
            display: flex;
            > .logo {
                display: block;
            }
        }
    }

    & .uk-navbar-transparent .uk-navbar-nav > li:hover > a {
        color: lightgray;
    }

    & .uk-navbar-sticky .uk-navbar-nav > li:hover > a {
        color: rgb(60, 60, 60);
    }
    .uk-navbar-nav > li > a {
        color: white;
    }

    .logo {
        display: none;
    }

    .uk-logo {
        display: none;
    }

    .uk-navbar-toggle {
        min-height: 70px;
        color: white;
    }
}

.uk-navbar-nav > li.uk-active > a {
    color: rgb(48, 48, 48);
}

.logo {
    height: 60px;
    margin: 3px 20px 3px 3px;
}

.menu-icon {
    display: none;
}

.logo-mobile {
    display: none;
}

.uk-navbar-toggle {
    color: black;
    padding-left: 20px;
    padding-right: 20px;
}

.uk-nav-default {
    font-size: 1em;
}

@media only screen and (max-width: 800px) {
    .uk-navbar-toggle {
        padding-right: 0;
    }
    .logo {
        display: block;
        margin-right: 0;
        margin-left: 10px;
    }

    .sticky .uk-navbar-sticky .logo-desktop {
        display: none;
    }

    .menu-icon {
        display: block;
    }

    .uk-navbar-toggle-icon {
        min-width: 40px;
    }

    .uk-navbar-right {
        display: none;
    }

    .uk-logo {
        float: right;
        padding-left: 10px;
    }

    .logo-desktop {
        display: none;
    }

    .logo-mobile {
        display: inherit;

        p {
            margin-top: 18px;
        }
    }
}

@media only screen and (max-width: 400px) {
    .uk-logo {
        float: right;
        padding-right: 10px;
        font-size: 1.3em;
    }
}
</style>
