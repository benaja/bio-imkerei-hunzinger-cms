<?php

namespace App\Http\Controllers;

use A17\Twill\Models\Block;
use App\Page;
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

    public function aboutUs()
    {
        $aboutUsPage = Page::getByPageName('about_us');
        $cards = Block::where('blockable_id', $aboutUsPage->id)->get();
        foreach ($cards as &$card) {
            $card->images = $card->images('slideshow', 'desktop');
        }
        return $cards;
    }
}
