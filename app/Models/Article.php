<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //设置id不可修改
    protected  $guarded = ['id'];
}
