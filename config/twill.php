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
            'content_card' => [
                'title' => 'Karte',
                'icon' => 'image',
                'component' => 'a17-block-content_card',
            ]
        ],
        'repeaters' => [
            'prices' => [
                'title' => 'Preis',
                'trigger' => 'Preis hinzufügen',
                'component' => 'a17-block-prices',
                'max' => 10,
            ],
        ],
        'crops' => [
            'slideshow' => [
                'desktop' => [
                    [
                        'name' => 'desktop',
                        // 'ratio' => 4 / 3,
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
        'frontpage' => [
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
