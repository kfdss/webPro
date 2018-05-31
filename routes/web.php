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
    //机型切换
    Route::post('/{id}','IndexController@switch');

	
	Route::get('/recovery','RecoveryController@index');

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



