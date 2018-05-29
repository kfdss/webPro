<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RecoveryController extends Controller
{
    //
    public function index(){
    	return view("Home/recovery/index");
    }
	public function submit(){
		
		$data=$_POST;
		
		dd($data);
	}
}
