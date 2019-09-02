<template>
  <div>
    <div
      uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 60"
    >
      <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left menu-icon">
          <a class="uk-navbar-toggle" uk-navbar-toggle-icon href="#offcanvas-slide" uk-toggle></a>
        </div>
        <a class="uk-navbar-item uk-logo" href="/">
          <img class="logo" src="/images/logo_portrait_inverted_without_text.png" />
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
  name: "NavigationBar"
};
</script>

<style lang="scss" scoped>
.uk-navbar-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.uk-navbar-right {
  margin-right: 10px;
}

.uk-navbar-sticky {
  background-color: black;

  .uk-navbar-nav > li > a,
  .uk-navbar-item,
  .uk-navbar-toggle {
    min-height: 50px;
  }

  .uk-logo > .logo {
    display: block;
    height: 44px;
    margin: 3px 0;
  }
}

.uk-navbar-nav > li > a {
  color: white;
}

.uk-navbar-nav > li.uk-active > a {
  color: lightgray;
}

.logo {
  display: none;
  height: 80px;
  margin: 10px 0;
}

.menu-icon {
  display: none;
}

.uk-navbar-toggle {
  color: white;
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