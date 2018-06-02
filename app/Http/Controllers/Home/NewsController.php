<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Articletype;
use App\Article;

class NewsController extends Controller
{
    //
    public function index(){


    	return view('Home/News/index');
    }
    //挂载完成
    public function loade(){
        $type=Articletype::all()->toArray();
        $detail=Article::where('actype_id','=','1')->get(['id','title','created_at','actype_id'])->take(15)->toArray();


        return [$type,$detail];
    }
    //点击新闻分类切换列表
    public function type($id){
        $detail=Article::where('actype_id','=',$id)->get(['id','title','created_at','actype_id'])->take(15)->toArray();
        return $detail;
    }


	public function details($id){
        $res=Article::where('id',$id)->get()->toArray();
        $detail=$res[0];
        $ty_id=$detail['actype_id'];
        $res1=Articletype::where('id',$ty_id)->get()->toArray();
        $type=$res1[0];
        //上一篇
        $prev=Article::where('id','<',$id)->where('actype_id','=',$ty_id)->orderBy('id','desc')->first();
        if(!$prev){
            $prev['title'] = "已经是首页了";
            $prev['id']=1;
        }
        //下一篇
        $next=Article::where('id','>',$id)->where('actype_id','=',$ty_id)->orderBy('id')->first();
        if(!$next){
            $next['title'] = "已经是尾页了";
            $next_id=Article::where('id','<',$id)->max('id');
            $next['id']=$next_id+1;
        }
        return view('Home/News/newsDetails',compact('detail','type','prev','next'));
    }





}
