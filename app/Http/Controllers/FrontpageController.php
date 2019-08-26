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

        $products = [];
        foreach($featured as $featuredId) {
            array_push($products, Product::find($featuredId));
        }

        // dd($products[0]->image('cover'));

        // dd($products);
        return view('frontpage', ['products' => $products]);
    }
}
