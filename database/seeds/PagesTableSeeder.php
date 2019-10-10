<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Page;

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

        // DB::table('pages')->insert([
        //     'name' => 'about_us'
        // ]);
        // DB::table('pages')->insert([
        //     'name' => 'products'
        // ]);
        // DB::table('pages')->insert([
        //     'name' => 'about_us'
        // ]);
    }
}
