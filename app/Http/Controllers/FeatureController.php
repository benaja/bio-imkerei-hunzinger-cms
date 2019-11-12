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
            $product->image = $product->image('cover');
            array_push($products, $product);
        }

        $frontPage = Page::getByPageName('frontpage_more_content');
        $cards = Block::where('blockable_id', $frontPage->id)->where('parent_id', null)->get();

        foreach ($cards as $card) {
            if ($card->type == 'card_with_image') {
                $card->images = $card->images('slideshow', 'desktop');
            } else if ($card->type == 'multi_card') {
                $card->subCards = Block::where('parent_id', $card->id)->get();
                foreach ($card->subCards as $subCard) {
                    $subCard->images = $subCard->images('slideshow', 'desktop');
                }
            }
        }

        return [
            'products' => $products,
            'cards' => $cards
        ];
    }
}
