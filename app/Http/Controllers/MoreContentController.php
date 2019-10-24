<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Page;
use App\Repositories\NewsRepository;
use Illuminate\Http\Request;

class MoreContentController extends Controller
{
    public function buyInformation()
    {
        return Page::byName('buy_information')->text;
    }

    public function gallery()
    {
        return Page::byName('gallery')->imagesAsArrays('gallery');
    }

    public function news(NewsRepository $newsRepository)
    {
        $news = $newsRepository->getPublished()->get();

        foreach ($news as &$article) {
            $article->image = $article->image('cover', 'default');
        }
        return $news;
    }
}
