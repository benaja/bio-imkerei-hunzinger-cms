<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class FrontpageController extends Controller
{
    public function index(){
        dd(Product);
        // dd(Product::features()->get());
        return view('frontpage');
    }
}
