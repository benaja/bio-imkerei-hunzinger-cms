<?php

return [
    'enabled' => [
        'users-management' => true,
        'media-library' => true,
        'file-library' => true,
        'dashboard' => true,
        'search' => true,
        'block-editor' => true,
        'buckets' => true,
        'users-image' => false,
        'users-description' => true,
        'site-link' => false,
        'settings' => true,
        'activitylog' => true,
    ],
    'block_editor' => [
        'blocks' => [
            'prices' => [
                'title' => 'Preis',
                'icon' => 'text',
                'component' => 'a17-block-prices',
            ],
            'card_with_image' => [
                'title' => 'Karte mit Bild',
                'icon' => 'image',
                'component' => 'a17-block-card_with_image',
            ],
            'card_with_video' => [
                'title' => 'Karte mit Video',
                'icon' => 'image',
                'component' => 'a17-block-card_with_video',
            ],
            'multi_card' => [
                'title' => 'Doppelte Karte',
                'icon' => 'image',
                'component' => 'a17-block-multi_card',
            ],
            'about_us_card' => [
                'title' => 'Karte',
                'icon' => 'image',
                'component' => 'a17-block-about_us_card',
            ],

        ],
        'repeaters' => [
            'prices' => [
                'title' => 'Preis',
                'trigger' => 'Preis hinzufügen',
                'component' => 'a17-block-prices',
                'max' => 10,
            ],
            'card_with_image' => [
                'title' => 'Karte mit Bild',
                'trigger' => 'Karte hinzufügen',
                'component' => 'a17-block-card_with_image',
                'max' => 10
            ],
        ],
        'crops' => [
            'slideshow' => [
                'desktop' => [
                    [
                        'name' => 'desktop',
                        'ratio' => 16 / 9,
                        'minValues' => [
                            'width' => 100,
                            'height' => 100,
                        ],
                    ],
                ]
            ],
        ],
    ],
    'buckets' => [
        'products_on_frontpage' => [
            'name' => 'Frontpage',
            'buckets' => [
                'home_primary_feature' => [
                    'name' => 'Home primary feature',
                    'bucketables' => [
                        [
                            'module' => 'products',
                            'name' => 'Products',
                            'scopes' => ['published' => true],
                        ],
                    ],
                    'max_items' => 4,
                    'reorder' => true
                ],
            ],
        ]
    ],
];
