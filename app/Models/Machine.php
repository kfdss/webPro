<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Machine extends Model
{   
    /**
     * 与模型关联的数据表
     *
     * @var string
     */
    protected $table = 'machine_type';
    

    //设置id不可修改
    protected  $guarded = ['id'];
}
