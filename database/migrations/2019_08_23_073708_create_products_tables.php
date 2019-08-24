<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductsTables extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            
            // this will create an id, a "published" column, and soft delete and timestamps columns
            createDefaultTableFields($table);
            
            // feel free to modify the name of this column, but title is supported by default (you would need to specify the name of the column Twill should consider as your "title" column in your module controller if you change it)
            $table->string('title', 200)->nullable();
            
            // your generated model and form include a description field, to get you started, but feel free to get rid of it if you don't need it
            $table->text('description')->nullable();

            // add those 2 colums to enable publication timeframe fields (you can use publish_start_date only if you don't need to provide the ability to specify an end date)
            // $table->timestamp('publish_start_date')->nullable();
            // $table->timestamp('publish_end_date')->nullable();


            // use this column with the HasPosition trait
            $table->integer('position')->unsigned()->nullable();
        });

        Schema::create('prices', function (Blueprint $table) {
            createDefaultTableFields($table);
            // $table->bigIncrements('id');
            
            $table->float('amount', 8, 2);

            $table->string('name', 200);

            $table->unsignedBigInteger('product_id')->nullable();

            $table->foreign('product_id')->references('id')->on('products');
        });

        // remove this if you're not going to use any translated field, ie. using the HasTranslation trait. If you do use it, create fields you want translatable in this table instead of the main table above. You do not need to create fields in both tables.
        // Schema::create('product_translations', function (Blueprint $table) {
        //     createDefaultTranslationsTableFields($table, 'product');
            // add some translated fields
            // $table->string('title', 200)->nullable();
            // $table->text('description')->nullable();
        // });

        // remove this if you're not going to use slugs, ie. using the HasSlug trait
        // Schema::create('product_slugs', function (Blueprint $table) {
        //     createDefaultSlugsTableFields($table, 'product');
        // });

        // remove this if you're not going to use revisions, ie. using the HasRevisions trait
        // Schema::create('product_revisions', function (Blueprint $table) {
        //     createDefaultRevisionsTableFields($table, 'product');
        // });
    }

    public function down()
    {
        Schema::dropIfExists('prices');
        Schema::dropIfExists('product_revisions');
        Schema::dropIfExists('product_translations');
        Schema::dropIfExists('product_slugs');
        Schema::dropIfExists('products');
    }
}
