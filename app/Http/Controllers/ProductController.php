<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index() {
        $slug = 'blütenhonig';
        $product = Product::whereHas('slugs', function ($query) use ($slug) { $query->where('slug', $slug); })->first();
        dd($product);
    }
}
