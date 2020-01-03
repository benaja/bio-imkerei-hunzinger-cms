<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasBlocks;
use A17\Twill\Models\Behaviors\HasSlug;
use A17\Twill\Models\Behaviors\HasMedias;
use A17\Twill\Models\Behaviors\HasFiles;
use A17\Twill\Models\Behaviors\HasRevisions;
use A17\Twill\Models\Behaviors\HasPosition;
use A17\Twill\Models\Behaviors\Sortable;
use A17\Twill\Models\Model;
use App\Models\Slugs\ProductSlug;

class Product extends Model implements Sortable
{
    use HasBlocks, HasSlug, HasMedias, HasFiles, HasRevisions, HasPosition;

    protected $fillable = [
        'published',
        'title',
        'description',
        'short_description',
        'available',
        'position',
        'isBio',
        // 'public',
        'featured',
        'publish_start_date',
        'publish_end_date',
    ];

    // uncomment and modify this as needed if you use the HasSlug trait
    public $slugAttributes = [
        'title',
    ];

    // add checkbox fields names here (published toggle is itself a checkbox)
    public $checkboxes = [
        'published'
    ];

    // uncomment and modify this as needed if you use the HasMedias trait
    public $mediasParams = [
        'cover' => [
            'default' => [
                [
                    'name' => 'landscape',
                ],
            ]
        ],
    ];

    public function prices()
    {
        return $this->hasMany(Price::class, 'product_id', 'id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'categories_products');
    }

    public function slug()
    {
        return $this->hasMany(ProductSlug::class);
    }
}
