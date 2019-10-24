<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNewsTables extends Migration
{
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {

            // this will create an id, a "published" column, and soft delete and timestamps columns
            createDefaultTableFields($table);

            // feel free to modify the name of this column, but title is supported by default (you would need to specify the name of the column Twill should consider as your "title" column in your module controller if you change it)
            $table->string('title', 200)->nullable();

            // your generated model and form include a description field, to get you started, but feel free to get rid of it if you don't need it
            $table->longText('description')->nullable();

            // add those 2 colums to enable publication timeframe fields (you can use publish_start_date only if you don't need to provide the ability to specify an end date)
            $table->timestamp('publish_start_date')->nullable();
            $table->timestamp('publish_end_date')->nullable();


            $table->integer('position')->unsigned()->nullable();
        });

        // remove this if you're not going to use slugs, ie. using the HasSlug trait
        Schema::create('news_slugs', function (Blueprint $table) {
            createDefaultSlugsTableFields($table, 'news');
        });

        // remove this if you're not going to use revisions, ie. using the HasRevisions trait
        Schema::create('news_revisions', function (Blueprint $table) {
            createDefaultRevisionsTableFields($table, 'news');
        });
    }

    public function down()
    {
        Schema::dropIfExists('news_revisions');
        Schema::dropIfExists('news_slugs');
        Schema::dropIfExists('news');
    }
}
