<?php

namespace App\Repositories;

use A17\Twill\Repositories\Behaviors\HandleBlocks;
use A17\Twill\Repositories\Behaviors\HandleSlugs;
use A17\Twill\Repositories\Behaviors\HandleMedias;
use A17\Twill\Repositories\Behaviors\HandleFiles;
use A17\Twill\Repositories\Behaviors\HandleRevisions;
use A17\Twill\Repositories\Behaviors\HandleRepeaters;
use A17\Twill\Repositories\ModuleRepository;
use App\Models\Product;

class ProductRepository extends ModuleRepository
{
    use HandleBlocks, HandleSlugs, HandleMedias, HandleFiles, HandleRevisions, HandleRepeaters;

    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function afterSave($product, $fields)
    {
        $this->updateRepeater($product, $fields, 'prices');

        $product->categories()->sync($fields['categories'] ?? []);
        parent::afterSave($product, $fields);
    }

    public function getFormFields($object) {
        $fields = parent::getFormFields($object);

        $fields = $this->getFormFieldsForRepeater($object, $fields, 'prices');

        return $fields;
    }
}
