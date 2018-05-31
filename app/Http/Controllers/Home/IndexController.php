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
        //获取品牌表数据
        $brand=Brand::all()->toArray();

        //获取机型表数据
        $macytpe=Machine_type::where('brand_id','=','1')->orderBy('brand_id')->take(15)->get();
        return view('Home/Index/index',compact('brand','macytpe'));
    }

    //首页机型切换
    public function switch($id){
        //获取机型表数据
        $macytpe=Machine_type::where('brand_id','=',$id)->orderBy('brand_id')->take(15)->get();

        if ($macytpe){
            echo 1;
        }else{
            echo 0;
        }


    }
}
