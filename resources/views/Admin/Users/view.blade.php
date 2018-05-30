{{--这里继承了Layouts目录下的主模板--}}
@extends('Layouts/admin')

{{--这里继承了title标题--}}
@section('title')
用户详情
@endsection

{{--这里继承了active高亮--}}
@section('active2')
active
@endsection

{{--替换main内容--}}
@section('mws-container')
<div class="mws-panel grid_8">
	<div class="mws-panel-header">
    	<span><i class="icon-pencil"></i> 用户信息</span>
    </div>
    <div class="mws-panel-body no-padding">
    	<form class="mws-form" action="##">
        	<div class="mws-form-inline">
            	<div class="mws-form-row">
                	<label class="mws-form-label">用户姓名</label>
                	<div class="mws-form-item">
                    	<input type="text" class="large" disabled value="{{$res->userName}}">
                    </div>
                </div>
                <div class="mws-form-row">
                	<label class="mws-form-label">用户性别</label>
                	<div class="mws-form-item">
                    	<input type="radio" disabled @if ($res->userSex ==0) checked @endif >保密 
                    	<input type="radio" disabled @if ($res->userSex ==1) checked @endif >男 
                    	<input type="radio" disabled @if ($res->userSex ==2) checked @endif >女 
                    </div>
                </div>
            	<div class="mws-form-row">
                	<label class="mws-form-label">用户生日</label>
                	<div class="mws-form-item">
                    	<input type="text" class="large" disabled value="{{$res->birthday}}">
                    </div>
                </div>
            	<div class="mws-form-row">
                	<label class="mws-form-label">用户电话</label>
                	<div class="mws-form-item">
                    	<input type="text" class="large" disabled value="{{$res->userPhone}}">
                    </div>
                </div>
            	<div class="mws-form-row">
                	<label class="mws-form-label">用户邮箱</label>
                	<div class="mws-form-item">
                    	<input type="text" class="large" disabled value="{{$res->userEmail}}">
                    </div>
                </div>
                <div class="mws-form-row">
                    <label class="mws-form-label">用户积分</label>
                    <div class="mws-form-item">
                        <input type="text" class="large" disabled value="{{$res->userScore}}">
                    </div>
                </div>
                <div class="mws-form-row">
                    <label class="mws-form-label">用户权限</label>
                    <div class="mws-form-item">
                        <input type="radio" disabled @if ($res->userStatus ==0) checked @endif >关闭状态
                        <input type="radio" disabled @if ($res->userStatus ==1) checked @endif >开启状态
                    </div>
                </div>
                <div class="mws-form-row">
                    <label class="mws-form-label">用户类型</label>
                    <div class="mws-form-item">
                        <input type="radio" disabled @if ($res->userStatus ==0) checked @endif >普通会员
                        <input type="radio" disabled @if ($res->userStatus ==1) checked @endif >门店用户
                    </div>
                </div>
                <div class="mws-form-row">
                    <label class="mws-form-label">用户金额</label>
                    <div class="mws-form-item">
                        <input type="text" class="large" disabled value="{{$res->userMoney}}">
                    </div>
                </div>
                <div class="mws-form-row">
                    <label class="mws-form-label">用户头像</label>
                    @if ($res->userPhoto)
		    				<div class="mws-form-item" style="width: 120px;height: 120px;font-size: 0;"><img src="/Uploads/{{$res->userPhoto}}" style="width: 100%;height: 100%;"/></div>
		    			@else
		    				<div class="mws-form-item" style="width: 120px;height: 120px;font-size: 0;"><img src="/Uploads/default_pic.jpg" style="width: 100%;height: 100%;"/></div>
		        	@endif
                </div>
            </div>
            <a href="/admin/users" style="display: block;width: 40px;height: 20px;background: #999;color: #fff;line-height: 20px;text-align: center;margin: 0 0 10px 25px;">返回</a>
        </form>
    </div>    	
</div>
@endsection
