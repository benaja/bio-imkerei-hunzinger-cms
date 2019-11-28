<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Feature;
use App\Models\Product;
// use App\ModelsBlock;
use A17\Twill\Models\Block;
use App\Page;

class FeatureController extends Controller
{
    public function index()
    {
        $featured = Feature::where('featured_type', 'products')->orderBy('position')->get('featured_id')->map(function ($value, $key) {
            return $value->featured_id;
        });

        $products = [];
        foreach ($featured as $featuredId) {
            $product = Product::with(['prices', 'slugs', 'medias'])->find($featuredId);
            $product->images = $product->images('cover', 'default', ['w' => 300]);
            array_push($products, $product);
        }

        $frontPage = Page::getByPageName('frontpage_more_content');
        $cards = Block::where('blockable_id', $frontPage->id)->where('parent_id', null)->get();

        foreach ($cards as &$card) {
            if ($card->type === 'image_gallery') {
                $card->images = $card->images('cover', 'default', 'landscape');
            } else if ($card->type === 'card_with_image') {
                if (isset($card['content']['orientation']) && $card['content']['orientation'] === 'portrait') {
                    $card->images = $card->images('cardimages', 'portrait');
                } else {
                    $card->images = $card->images('cardimages', 'landscape');
                }
            } else {
                $card->images = $card->images('slideshow', 'desktop');
            }
        }

        return [
            'products' => $products,
            'cards' => $cards
        ];
    }
}
