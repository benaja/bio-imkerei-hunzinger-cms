<template>
    <div>
        <div
            :class="{sticky: sticky}"
            :uk-sticky="sticky ? 'animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 60' :false"
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
                <a class="uk-navbar-item uk-logo" href="/">
                    <img class="logo" src="/images/logo_portrait.png" />
                    Bio-Imkerei Hunzinger
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
                            <a href="/news">News</a>
                        </li>
                        <li>
                            <a href="/about">Über Uns</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li>
                                        <a href="/kontakt">Über Uns</a>
                                    </li>
                                    <li>
                                        <a href="/kontakt">Kontakt</a>
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
                        <a href="/news">News</a>
                    </li>
                    <li>
                        <a href="/about">Über Uns</a>
                        <ul class="uk-nav-sub">
                            <li>
                                <a href="/kontakt">Kontakt</a>
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

.uk-navbar-nav > li > a {
    color: black;
}

.uk-navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 100;
}

.sticky {
    .uk-navbar-container {
        position: absolute;
        background-color: transparent;
    }

    .uk-navbar-sticky {
        background-color: white;

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
    .uk-navbar-nav > li > a {
        color: white;
    }

    .logo {
        display: none;
    }

    .uk-logo {
        display: none;
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

.uk-navbar-toggle {
    color: black;
    padding-left: 20px;
    padding-right: 20px;
}

@media only screen and (max-width: 600px) {
    .logo {
        display: block;
    }

    .menu-icon {
        display: block;
    }

    .uk-navbar-right {
        display: none;
    }

    .uk-logo {
        float: right;
    }
}
</style>
