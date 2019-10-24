<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Bio-Imkerei Hunzinger</title>

        <link rel="stylesheet" href="css/uikit.min.css" />
        <script src="/js/uikit.min.js"></script>
        <script src="/js/uikit-icons.min.js"></script>

        <link rel="stylesheet" type="text/css" href="/css/uikit-rtl.min.css">
        <link rel="stylesheet" type="text/css" href="/css/uikit.min.css">
        <link href="{{ asset('css/app.css') }}"/>

    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
