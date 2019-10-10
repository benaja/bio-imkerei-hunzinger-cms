<?php

return [
    'products' => [
        'title' => 'Produkte',
        'module' => true,
    ],
    'pages' => [
        'title' => 'Seiten',
        'module' => true,
    ],
    'news' => [
        'title' => 'News',
        'module' => true
    ],
    'about' => [
        'title' => 'Über Uns',
        'route' => 'admin.about.about_us',
        'primary_navigation' => [
            'about_us' => [
                'title' => 'Über Uns',
                'route' => 'admin.about.about_us',
            ],
            'contact' => [
                'title' => 'Kontakt',
                'route' => 'admin.about.contact',
            ],
            'project' => [
                'title' => 'Projekt',
                'route' => 'admin.about.project',
            ]
        ]
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
                'route' => 'admin.featured.frontpage_more_content'
            ]
        ],
    ],
];
