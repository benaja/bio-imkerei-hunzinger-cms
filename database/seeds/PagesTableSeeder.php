<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Page;
use App\Models\Category;
use App\Models\Gallery;

class PagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Page::firstOrCreate(['name' => 'about_us']);
        Page::firstOrCreate(['name' => 'contact']);
        Page::firstOrCreate(['name' => 'project']);
        Page::firstOrCreate(['name' => 'frontpage_more_content']);
        Page::firstOrCreate(['name' => 'buy_information']);
        Page::firstOrCreate(['name' => 'gallery']);
        Page::firstOrCreate(['name' => 'footer']);

        Category::firstOrCreate(['name' => 'Neuigkeiten']);
        Category::firstOrCreate(['name' => 'Honig']);
    }
}
