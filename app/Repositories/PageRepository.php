<?php

namespace App\Repositories;

use A17\Twill\Repositories\Behaviors\HandleBlocks;
use A17\Twill\Repositories\Behaviors\HandleSlugs;
use A17\Twill\Repositories\Behaviors\HandleMedias;
use A17\Twill\Repositories\Behaviors\HandleFiles;
use A17\Twill\Repositories\Behaviors\HandleRevisions;
use A17\Twill\Repositories\ModuleRepository;
use App\Models\Page;

class PageRepository extends ModuleRepository
{
    use HandleBlocks, HandleSlugs, HandleMedias, HandleFiles, HandleRevisions;

    public function __construct(Page $model)
    {
        $this->model = $model;
    }

    public function afterSave($product, $fields)
    {
        $values = [];
        foreach ($fields as $key => $value) {
            if (preg_match('/^values\.(.+)$/', $key, $matches)) {
                $values[$matches[1]] = $value;
            }
        }
        $product->values = $values;
        $product->save();
        parent::afterSave($product, $fields);
    }
}
