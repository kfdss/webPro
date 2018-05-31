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
        $type=Articletype::all()->toArray();
        //$detail=Article::paginate(5);
        $detail=Article::get(['id','title','created_at','actype_id'])->toArray();

        //var_dump($type);
    	return view('Home/News/index',compact('type','detail'));
    }
	
	public function details($id){
        $details=Article::where('id','=',$id)->first()->toArray();
        //上一篇
        $prev=Article::where('id','<',$id)->orderBy('id','desc')->first();
        if(!$prev){
            $prev['title'] = "已经是首页了";
            $prev['id']=1;
        }
        //下一篇
        $next=Article::where('id','>',$id)->orderBy('id')->first();
        if(!$next){
            $next['title'] = "已经是尾页了";
            $next_id=Article::where('id','<',$id)->max('id');
            $next['id']=$next_id+1;
        }

        /*//上一篇id
        $prev_id=Article::where('id','<',$id)->max('id');

        //下一篇id
        $next_id=Article::where('id','>',$id)->min('id');*/


        $ac_id=$details['actype_id'];
        $type=Articletype::where('id','=',$ac_id)->first()->toArray();
    	return view('Home/News/newsDetails',compact('details','type','prev','next'));
    }





}
