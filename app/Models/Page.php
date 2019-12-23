<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasBlocks;
use A17\Twill\Models\Behaviors\HasMedias;
use A17\Twill\Models\Behaviors\HasFiles;
use A17\Twill\Models\Behaviors\HasRevisions;
use A17\Twill\Models\Model;

class Page extends Model
{
    use HasBlocks, HasMedias, HasFiles, HasRevisions;

    protected $fillable = [
        'name',
        "text",
        "values"
        // 'position',
        // 'public',
        // 'featured',
        // 'publish_start_date',
        // 'publish_end_date',
    ];

    // uncomment and modify this as needed if you use the HasTranslation trait
    // public $translatedAttributes = [
    //     'title',
    //     'description',
    //     'active',
    // ];

    // uncomment and modify this as needed if you use the HasSlug trait
    // public $slugAttributes = [
    //     'name',
    // ];

    // add checkbox fields names here (published toggle is itself a checkbox)
    public $checkboxes = [
        'published'
    ];

    public static function byName($name)
    {
        return Page::where('name', '=', $name)->first();
    }

    public $mediasParams = [
        'gallery' => [
            'default' => [
                [
                    'name' => 'landscape'
                ]
            ]
        ],
    ];

    protected $casts = [
        'values' => 'array'
    ];
}
