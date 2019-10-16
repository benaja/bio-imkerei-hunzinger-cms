<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $table = 'categories';

    public function product() {
        return $this->belongsToMany(Product::class, 'categories_products');
    }
}
