<?php

namespace App\Repositories;

use A17\Twill\Repositories\Behaviors\HandleFiles;
use A17\Twill\Repositories\ModuleRepository;
use App\Models\Test;

class TestRepository extends ModuleRepository
{
    use HandleFiles;

    public function __construct(Test $model)
    {
        $this->model = $model;
    }
}
