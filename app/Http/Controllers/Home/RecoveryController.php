<?php

namespace App\Http\Controllers\Home;

use App\Models\Fault;
use App\Models\Attribute;
use App\Machine_type;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RecoveryController extends Controller
{

	//首先定义一个查询所有故障分类信息的数组
	public static function getFailure(){

		//定义一个新数组
		$data = [];

		//查找该型号故障列表
		$attribute = Attribute::all()->toArray();

		//去除原数组中的其他问题故障
		unset($attribute[7]);

		//查找所有故障
		foreach($attribute as $k=>$v){
			
			if(strpos($v['detailed'] , ',')){

				$res = explode(',', $v['detailed']);

				//去除原数组中的故障字符串
				unset($attribute[$k]['detailed']);
				
				//定义一个新数组
				$li = [];

				//查找对应故障
				foreach($res as $ke=>$va){
					$li[] = Fault::find($va)->toArray();
				}

				$attribute[$k]['fault'] = $li;

			}
			
		}
		//查找分类所有故障
		$data['0'][] = '1.基础信息';
		$data['1'][] = '2.外观信息';
		$data['2'][] = '3.其他信息';

		foreach($attribute as $k=>$v){

			if($v['infor_type'] == 1){
				
				$data['0']['infor'][] = $v;
			}else if($v['infor_type'] == 2){
				
				$data['1']['infor'][] = $v;
			}else{
				
				$data['2']['infor'][] = $v;
			}
		}
		return $data;
	}
	
	
    //加载选择属性方法
    public function index($id){

		$faults = self::getFailure();

		$iphone = Machine_type::find($id);

    	return view("Home/recovery/index",compact('faults','iphone'));
	}
	
	//执行选择属性方法
	public function submit(Request $request){
		
		$res = $request->except('_token');

		dd($res);

	
		return view("Home/recovery/evaluation");
	}

	//加载估价方法
	public function evaluation(){

	}
}
