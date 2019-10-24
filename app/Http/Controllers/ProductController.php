<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Slugs\ProductSlug;

class ProductController extends Controller
{
    public function index()
    {
        return Product::with(['prices' => function ($query) {
            $query->orderBy('amount');
        }, 'slugs', 'medias', 'categories'])
            ->where('published', true)
            ->whereDate('publish_end_date', '>=', (new \DateTime())->format('Y-m-d H:i:s'))
            ->orWhere('publish_end_date', null)->get();
    }

    public function getBySlug(Request $request)
    {
        return ProductSlug::with(['product.prices' => function ($query) {
            $query->orderBy('amount');
        }, 'product.medias', 'product.categories'])->where('slug', $request->slug)->first()->product;
    }
}
