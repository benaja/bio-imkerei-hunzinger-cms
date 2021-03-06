<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController;
use App\Repositories\GalleryRepository;
use App\Repositories\PageRepository;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\View;

class PageController extends ModuleController
{
    protected $moduleName = 'pages';

    protected $indexOptions = [
        'create' => true,
        'edit' => false,
        'publish' => false,
        'bulkPublish' => true,
        'feature' => false,
        'bulkFeature' => false,
        'restore' => true,
        'bulkRestore' => true,
        'delete' => true,
        'bulkDelete' => true,
        'reorder' => false,
        'permalink' => true,
        'bulkEdit' => true,
        'editInModal' => false,
    ];

    public function aboutUsPage(PageRepository $repository)
    {
        return $this->getView($repository, 'about_us', 'Über Uns');
    }

    public function contactPage(PageRepository $repository)
    {
        return $this->getView($repository, 'contact', 'Kontakt');
    }

    public function projectPage(PageRepository $repository)
    {
        return $this->getView($repository, 'project', 'Projekt');
    }

    public function traineePage(PageRepository $repository)
    {
        return $this->getView($repository, 'trainee', 'Praktikant/in');
    }

    public function frontpageMoreContent(PageRepository $repository)
    {
        return $this->getView($repository, 'frontpage_more_content', 'Füge hier weitere Elemente ein, welche auf der Startseite angezeigt werden');
    }

    public function buyInformation(PageRepository $repository)
    {
        return $this->getView($repository, 'buy_information', 'Informationen welche angezeigt werden sollen, wenn jemand ein Produkt kaufen will.');
    }

    public function gallery(PageRepository $repository)
    {
        return $this->getView($repository, 'gallery', 'Wähle alle Bilder aus, welche in der Gallerie angezeigt werden sollen.');
    }

    public function footer(PageRepository $repository)
    {
        return $this->getView($repository, 'footer', 'Footer');
    }

    private function getView($repository, $pageName, $pageNameGerman)
    {
        $page = $repository->byName($pageName);

        $this->submodule = isset($submoduleId);
        $this->submoduleParentId = $page->id;
        if ($this->getIndexOption('editInModal')) {
            return $this->request->ajax()
                ? Response::json($this->modalFormData($submodule ?? $page->id))
                : Redirect::to(moduleRoute($this->moduleName, $this->routePrefix, 'index'));
        }
        $this->setBackLink();
        $view = Collection::make([
            "$this->viewPrefix.{$pageName}_form",
            "twill::$this->moduleName.form",
            'twill::layouts.form',
        ])->first(function ($view) {
            return View::exists($view);
        });

        $form = $this->form($submoduleId ?? $page->id);
        // dd($form);
        $form['editableTitle'] = false;
        $form['customTitle'] = $pageNameGerman;

        return View::make($view, $form);
    }
}
