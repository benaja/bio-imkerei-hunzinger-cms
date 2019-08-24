<?php

return [
    'products' => [
        'title' => 'Produkte',
        'module' => true,
    ],
    'news' => [
        'title' => 'News',
        'module' => true
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
