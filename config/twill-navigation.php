<?php

return [
    'products' => [
        'title' => 'Produkte',
        'module' => true,
    ],
    'gallery' => [
        'title' => 'Galerie',
        'route' => 'admin.gallery',
    ],
    'contact' => [
        'title' => 'Kontakt',
        'route' => 'admin.contact',
    ],
    'about' => [
        'title' => 'Über Uns',
        'route' => 'admin.about.about_us',
        'primary_navigation' => [
            'about_us' => [
                'title' => 'Über Uns',
                'route' => 'admin.about.about_us',
            ],
            'project' => [
                'title' => 'Projekt',
                'route' => 'admin.about.project',
            ],
            'trainee' => [
                'title' => 'Praktikant/in',
                'route' => 'admin.about.trainee',
            ],
        ],
    ],
    'news' => [
        'title' => 'News',
        'module' => true,
    ],
    'featured' => [
        'title' => 'Startseite',
        'route' => 'admin.featured.products_on_frontpage',
        'primary_navigation' => [
            'products_on_frontpage' => [
                'title' => 'Produkte',
                'route' => 'admin.featured.products_on_frontpage',
            ],
            'frontpage_more_content' => [
                'title' => 'Weitere Inahlte',
                'route' => 'admin.featured.frontpage_more_content',
            ],
        ],
    ],
    'more_content' => [
        'title' => 'Weitere Inhalte',
        'route' => 'admin.more_content.buy_information',
        'primary_navigation' => [
            'buy_information' => [
                'title' => 'Kauf Informationen',
                'route' => 'admin.more_content.buy_information',
            ],
            'footer' => [
                'title' => 'Footer',
                'route' => 'admin.more_content.footer',
            ],
        ],
    ],
];
