<?php

namespace App\Repositories;


use A17\Twill\Repositories\ModuleRepository;
use App\Models\Price;

class PriceRepository extends ModuleRepository
{
    

    public function __construct(Price $model)
    {
        $this->model = $model;
    }
}
