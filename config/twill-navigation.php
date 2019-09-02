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
        'title' => 'Features',
        'route' => 'admin.featured.frontpage',
        'primary_navigation' => [
            'frontpage' => [
                'title' => 'Startseite',
                'route' => 'admin.featured.frontpage',
            ],
        ],
    ],
];
