<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController;

class ProductController extends ModuleController
{
    protected $moduleName = 'products';

    protected $indexColumns = [
        'image' => [
            'thumb' => true, // image column
            'variant' => [
                'role' => 'cover',
                'crop' => 'default',
            ],
        ],
        'title' => [ // field column
            'title' => 'Title',
            'field' => 'title',
        ],
        'prices' => [ // relation column
            'title' => 'Prices',
            'sort' => true,
            'relationship' => 'prices',
            'field' => 'amount'
        ],
    ];

    protected $browserColumns = [
        // 'image' => [
        //     'thumb' => false, // image column
        //     'variant' => [
        //         'role' => 'featured',
        //         'crop' => 'default',
        //     ],
        //     'field' => 'cover'
        // ],
        // 'title' => [
        //     'title' => 'Title',
        //     'field' => 'title',
        // ],
    ];
}
