<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NewsController extends Controller
{
    //
    public function index(){
    	return view('Home/News/index');
    }
	
	public function details(){
    	return view('Home/News/newsDetails');
    }
	
}
