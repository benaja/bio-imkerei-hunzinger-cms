<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    public static function getByPageId($pageId) {
        return self::where('blockable_id', $pageId);
    }
}
