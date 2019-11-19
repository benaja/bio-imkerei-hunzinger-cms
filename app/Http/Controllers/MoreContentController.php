<?php

namespace App\Http\Controllers;

use A17\Twill\Models\Block;
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
            $article->file = $article->file('single_file');
        }
        return $news;
    }

    public function aboutUs()
    {
        return $this->getCardsOfPage('about_us');
    }

    public function project()
    {
        return $this->getCardsOfPage('project');
    }

    public function contact()
    {
        return Page::byName('contact');
    }

    public function footer()
    {
        return Page::byName('footer');
    }

    private function getCardsOfPage($pageName)
    {
        $page = Page::byName($pageName);
        $cards = Block::where('blockable_id', $page->id)->get();
        foreach ($cards as &$card) {
            if ($card->type === 'image_gallery') {
                $card->images = $card->images('cover', 'desktop');
            } else {
                $card->images = $card->images('slideshow', 'desktop');
            }
        }
        return $cards;
    }
}
