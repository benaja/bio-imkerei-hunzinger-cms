<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Slugs\ProductSlug;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with(['prices' => function ($query) {
            $query->orderBy('amount');
        }, 'slugs', 'categories'])
            ->where('published', true)
            ->where(function ($query) {
                $query->where('publish_end_date', '>=', (new \DateTime())->format('Y-m-d H:i:s'));
                $query->orWhere('publish_end_date', null);
            })
            ->where(function ($query) {
                $query->where('publish_start_date', '<=', (new \DateTime())->format('Y-m-d H:i:s'));
                $query->orWhere('publish_start_date', null);
            })->orderBy('publish_start_date', 'desc')->get();

        foreach ($products as $product) {
            $product->images = $product->images('cover', 'default', ['w' => 300]);
        }
        return $products;
    }

    public function getBySlug(Request $request)
    {
        $product = ProductSlug::with(['product.prices' => function ($query) {
            $query->orderBy('amount');
        }, 'product.categories'])->where('slug', $request->slug)->first()->product;

        $product->images = $product->images('cover', 'default', ['w' => 1000]);
        return $product;
    }
}
