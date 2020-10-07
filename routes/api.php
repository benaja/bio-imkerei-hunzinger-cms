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

Route::get('frontpage', 'FeatureController@index');

Route::get('products', 'ProductController@index');
Route::get('products/{slug}', 'ProductController@getBySlug');

Route::get('categories', 'CategoryController@index');

Route::get('buy-information', 'MoreContentController@buyInformation');
Route::get('gallery', 'MoreContentController@gallery');
Route::get('news', 'MoreContentController@news');
Route::get('about-us', 'MoreContentController@aboutUs');
Route::get('project', 'MoreContentController@project');
Route::get('trainee', 'MoreContentController@trainee');
Route::get('contact', 'MoreContentController@contact');
Route::get('footer', 'MoreContentController@footer');
Route::post('newsletter', 'SinglePageController@registerForNewsletter');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
