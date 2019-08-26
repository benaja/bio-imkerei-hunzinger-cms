<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Repositories\ProductRepository;
use App\Feature;

class FrontpageController extends Controller
{
    private $repository;

    public function __construct()
    {
        $this->repository = new ProductRepository(new Product());
    }

    public function index(){
        $featured = Feature::where('featured_type', 'products')->orderBy('position')->get('featured_id')->map(function ($value,$key) {
            return $value->featured_id;
        });
        $products = Product::whereIn('id', $featured)->get();

        dd($products);
        $products = Product::rightJoin('features', 'products.id', '=', 'featured_id::int')
            ->where('features.featured_type', '=', 'products')
            ->get();
        // $products = Product::where('featured_type', '=', 'products')->get();
        dd($products);
        // dd(Product);
        // dd(Product::features()->get());
        return view('frontpage');
    }
}
