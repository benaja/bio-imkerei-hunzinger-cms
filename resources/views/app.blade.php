<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="css/uikit.min.css" />
        <script src="/js/uikit.min.js"></script>
        <script src="/js/uikit-icons.min.js"></script>

        <link rel="stylesheet" type="text/css" href="/css/uikit-rtl.min.css">
        <link rel="stylesheet" type="text/css" href="/css/uikit.min.css">
        <link rel="icon" href="/images/logo_portrait.png" />
        <link href="{{ asset('css/app.css') }}"/>
        <!-- Primary Meta Tags -->
        <title>Bio-Imkerei Hunzinger | Schweizer Bienenhonig</title>
        <meta name="title" content="Bio Imkerei Hunzinger" />
        <meta
        name="description"
        content="Schweizer Bio-Honig feinster Qualität. Wir verkaufen allerlei Sorten an Honig, dazu kommen noch diverse andere Bienen-Produkte wie Met, Bienenwachskerzen oder Pollen."
        />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imkerei-hunzinger.ch/" />
        <meta property="og:title" content="Bio-Imkerei Hunzinger" />
        <meta
        property="og:description"
        content="Schweizer Bio-Honig feinster Qualität. Wir verkaufen allerlei Sorten an Honig, dazu kommen noch diverse andere Bienen-Produkte wie Met, Bienenwachskerzen oder Pollen."
        />
        <meta property="og:image" content="<%= BASE_URL %>images/meta_image.png" />
        <meta property="og:site_name" content="Bio-Imkerei Hunzinger" />

        <!-- Twitter -->
        <meta
        name="twitter:card"
        property="twitter:card"
        content="summary_large_image"
        />
        <meta
        name="twitter:url"
        property="twitter:url"
        content="https://imkerei-hunzinger.ch/"
        />
        <meta
        name="twitter:title"
        property="twitter:title"
        content="Bio-Imkerei Hunzinger"
        />
        <meta
        name="twitter:description"
        property="twitter:description"
        content="Schweizer Bio-Honig feinster Qualität. Wir verkaufen allerlei Sorten an Honig, dazu kommen noch diverse andere Bienen-Produkte wie Met, Bienenwachskerzen oder Pollen."
        />
        <meta
        name="twitter:image"
        property="twitter:image"
        content="<%= BASE_URL %>images/meta_image.png"
        />
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
