<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Feature;
use App\Models\Product;

class FeatureController extends Controller
{
    public function index() {
        $featured = Feature::where('featured_type', 'products')->orderBy('position')->get('featured_id')->map(function ($value,$key) {
            return $value->featured_id;
        });

        $products = [];
        foreach($featured as $featuredId) {
            $product = Product::with(['prices', 'slugs'])->find($featuredId);
            $product->image = $product->image('cover');
            array_push($products, $product);
        }

        return [
            'products' => $products
        ];
    }
}
