<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController;
use App\Repositories\PageRepository;

class AboutController extends ModuleController
{
    protected $moduleName = 'pages';

    public function aboutUsPage(PageRepository $pages){
      $page = $pages->byName('about_us');
      $page->form_fields = $pages->getFormFields($page);
       // dd($page);
      return view('admin.pages.form', $page);
    }
}
