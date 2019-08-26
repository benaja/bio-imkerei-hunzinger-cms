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
        ],
        'repeaters' => [
            'prices' => [
                'title' => 'Preis',
                'trigger' => 'Preis hinzufügen',
                'component' => 'a17-block-prices',
                'max' => 10,
            ],
        ]
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
