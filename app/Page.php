<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    public static function getByPageName($pagename)
    {
        return self::where('name', $pagename)->first();
    }
}
