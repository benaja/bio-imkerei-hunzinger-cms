<template>
<div>
    <div uk-parallax="bgy: -200" class="background-image">
        <div class="darken-background">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <a class="uk-navbar-item uk-logo" href="/">
                    <img class="logo" src="/images/logo_portrait.png">
                </a>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li><a href="/produkte">Produkte</a></li>
                        <li><a href="/galerie">Galerie</a></li>
                        <li><a href="/news">News</a></li>
                        <li>
                            <a href="/about">Über Uns</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="/kontakt">Über Uns</a></li>
                                    <li><a href="/kontakt">Kontakt</a></li>
                                    <li><a href="/projekt">Projekt</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <h1 class="main-title">Bio-Imkerei Hunzinger</h1>
            <h2 class="second-title">Schweizer Bienenhonig feinster Qualität</h2>
        </div>
    </div>

    <div class="content">
        <h1>Produkte</h1>
        <h2>test 123</h2>
    </div>
</div>
</template>

<script>
export default {
    name: 'Frontpage',
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.axios.get('/features').then(response => {
            this.products = response.data.products
        })
    }
}
</script>

<style lang="scss" scoped>
.background-image{
        height: 100vh;
        width: 100%;
        background-position: center center;
        background-size: cover;
        background-image: url('/images/wallpaper01.jpg');
    }

    .darken-background{
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100vh;
    }

    .main-title{
        color: white;
        font-size: 80px;
        text-align: center;
        margin-top: calc(50vh - 200px);
    }

    .second-title{
        color: white;
        font-size: 40px;
        text-align: center;
        margin-top: 0;
    }

    .uk-navbar-right{
        margin-right: 10px;
    }

    .uk-navbar-nav>li>a{
        color: white;
    }

    .uk-navbar-nav>li.uk-active>a{
        color: lightgray;
    }

    .logo{
        height: 60px;
    }

    .content{
        margin: 20px 10%;
    }
</style>