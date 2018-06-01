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



        return view('Home/Index/index',compact('macytpe'));
    }
    //挂载前首页信息加载
    public function right(){
        //获取数据
        $brand=Brand::orderBy('id')->take(13)->get();
        $macytpe=Machine_type::where('brand_id','=','1')->orderBy('brand_id')->take(15)->get();
        return [$brand,$macytpe];
    }

    //首页机型切换
    public function switch(Request $request,$id){

        //获取机型表数据
        $brandi=Brand::find($id)->brandName;
        $res=Machine_type::where('brand_id','=',$id)->orderBy('brand_id')->take(15)->get();
        return [$brandi,$res];

    }
    //品牌点击更多
    public function brmore(){
        //获取数据
        $brand=Brand::orderBy('id')->take(41)->get();
        return $brand;
    }
    //机型点击更多
    public function macmore($id){
        //获取数据
        $res=Machine_type::where('brand_id','=',$id)->get();
        return $res;
    }
    //首页搜索
    public function search(Request $request){
        $txt = $request->txt;
        $res = Machine_type::where('macType','like','%'.$txt.'%')->get();
        return $res;
    }



}
