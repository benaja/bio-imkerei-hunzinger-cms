<?php

// Register Twill routes here (eg. Route::module('posts'))
Route::module('products');
Route::module('news');
Route::module('pages');

Route::name('about.about_us')->get('about/about_us', 'PageController@aboutUsPage');
Route::name('about.contact')->get('about/contact', 'PageController@contactPage');
Route::name('about.project')->get('about/project', 'PageController@projectPage');
Route::name('featured.frontpage_more_content')->get('featured/frontpage_more_content', 'PageController@frontpageMoreContent');
