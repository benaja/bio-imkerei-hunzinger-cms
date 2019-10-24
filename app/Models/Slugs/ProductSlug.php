<?php

namespace App\Models\Slugs;

use A17\Twill\Models\Model;
use App\Models\Product;

class ProductSlug extends Model
{
    protected $table = "product_slugs";

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
}
