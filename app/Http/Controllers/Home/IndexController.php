<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Users;
use App\Brand;
use App\Machine_type;

class IndexController extends Controller
{
    //加载前台首页方法
    public function index(){

        $brand=Brand::all()->toArray();

        //var_dump($brand);

        return view('Home/Index/index',compact('brand'));
    }
}
