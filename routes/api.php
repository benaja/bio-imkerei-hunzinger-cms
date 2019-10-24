<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('features', 'FeatureController@index');

Route::get('products', 'ProductController@index');
Route::get('products/{slug}', 'ProductController@getBySlug');

Route::get('categories', 'CategoryController@index');

Route::get('buy-information', 'MoreContentController@buyInformation');
Route::get('gallery', 'MoreContentController@gallery');
Route::get('news', 'MoreContentController@news');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
