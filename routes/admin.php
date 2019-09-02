<?php

// Register Twill routes here (eg. Route::module('posts'))
Route::module('products');
Route::module('news');
Route::module('pages');

Route::name('about.about_us')->get('about/about_us', 'AboutController@aboutUsPage');
Route::name('about.contact')->get('about/contact', 'AboutController@aboutUsPage');
Route::name('about.project')->get('about/project', 'AboutController@aboutUsPage');
