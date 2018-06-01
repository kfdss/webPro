<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



//前台路由组
Route::prefix('/')->namespace('Home')->group(function (){

    Route::get('/','IndexController@index');
    //挂载前首页数据加载
    Route::get('/right','IndexController@right');
    //ajax替换数据内容
    Route::get('/switch/{id}','IndexController@switch');
    //品牌点击更多
    Route::post('/brmore','IndexController@brmore');
    //机型点击更多
    Route::get('/macmore/{id}','IndexController@macmore');
    //首页搜索
    Route::post('/search','IndexController@search');







	
	Route::get('/recovery/{id}','RecoveryController@index');

	Route::post('/recovery/submit','RecoveryController@submit');
	//新闻资讯列表页
	Route::get('/news','NewsController@index');
	//新闻资讯详情页
	Route::get('/news/details/{id}','NewsController@details');


	
	
});

//定义一个后台路由
Route::prefix('admin/')->namespace('Admin')->group(function(){


    //加载后台首页控制器
    Route::resource('index','IndexController');

});



