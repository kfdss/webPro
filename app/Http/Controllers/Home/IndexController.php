<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    //加载前台首页方法
    public function index(){

        return view('Home/Index/index');
    }
}
