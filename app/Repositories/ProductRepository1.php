<?php

namespace App\Repositories;

use A17\Twill\Repositories\Behaviors\HandleMedias;
use A17\Twill\Repositories\Behaviors\HandleRepeaters;
use A17\Twill\Repositories\ModuleRepository;
use App\Models\Product;
use App\Models\Price;

class ProductRepository extends ModuleRepository
{
    use HandleMedias, HandleRepeaters;

    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function afterSave($product, $fields)
    {
        $this->updateRepeater($product, $fields, 'prices');
        parent::afterSave($product, $fields);
    }

    public function getFormFields($object) {
        $fields = parent::getFormFields($object);

        $fields = $this->getFormFieldsForRepeater($object, $fields, 'prices');

        return $fields;
    }
}
