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
        // return Page::byName('gallery')->imagesAsArrays('gallery');
        return $this->getCardsOfPage('gallery');
    }

    public function news(NewsRepository $newsRepository)
    {
        $news = $newsRepository->getPublished()->orderBy('publish_start_date', 'desc')->get();

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

    public function trainee()
    {
        return $this->getCardsOfPage('trainee');
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
            if ($card->type === 'image_gallery' || $card->type === 'image_category') {
                $card->images = $card->imagesAsArrays('cover', 'desktop');
            } elseif ($card->type === 'card_with_image') {
                if (isset($card['content']['orientation']) && $card['content']['orientation'] === 'portrait') {
                    $card->images = $card->images('cardimages', 'portrait');
                } else {
                    $card->images = $card->images('cardimages', 'landscape');
                }
            } else {
                $card->images = $card->images('slideshow', 'desktop');
            }
        }

        return $cards;
    }
}
