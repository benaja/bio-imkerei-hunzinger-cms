<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return Product::with(['prices', 'slugs', 'medias', 'categories'])
            ->where('published', true)
            ->whereDate('publish_end_date', '>=', (new \DateTime())->format('Y-m-d H:i:s'))
            ->orWhere('publish_end_date', null)->get();
    }

    public function getBySlug(Request $request)
    {
        return Product::with(['slug' => function ($query) use ($request) {
            $query->where('slug', $request->slug);
        }, 'prices', 'medias', 'categories'])->first();
    }
}
