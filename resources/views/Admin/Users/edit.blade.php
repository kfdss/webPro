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
    	<span>用户添加</span>
    </div>
    <div class="mws-panel-body no-padding">
    	<form class="mws-form" action="/admin/users/{{$res->id}}" enctype="multipart/form-data">
    		<!-- 表单请求伪造设置 -->
			{{method_field('PUT')}}
			<!-- 放置跨域攻击的令牌 -->
			{{csrf_field()}}
    		<div class="mws-form-inline">
    			<div class="mws-form-row">
    				<label class="mws-form-label">用户账号</label>
    				<div class="mws-form-item">
    					<input type="text" class="small" name="loginName" value="{{$res->loginName}}">
    				</div>
    			</div>
    			<div class="mws-form-row">
    				<label class="mws-form-label">用户密码</label>
    				<div class="mws-form-item">
    					<input type="text" class="medium" name="loginPass" value="{{$res->loginPass}}">
    				</div>
    			</div>
    			<div class="mws-form-row">
    				<label class="mws-form-label">用户类型</label>
    				<div class="mws-form-item clearfix">
    					<ul class="mws-form-list inline">
    						<li><input type="radio" name="userType" @if ($res->userType ==0) checked @endif > <label>普通用户</label></li>
    						<li><input type="radio" name="userType" @if ($res->userType ==1) checked @endif > <label>门店用户</label></li>
    					</ul>
    				</div>
    			</div>
    			<div class="mws-form-row">
    				<label class="mws-form-label">用户性别</label>
    				<div class="mws-form-item clearfix">
    					<ul class="mws-form-list inline">
    						<li><input type="radio" name="userSex" @if ($res->userSex ==0) checked @endif > <label>保密</label></li>
    						<li><input type="radio" name="userSex" @if ($res->userSex ==1) checked @endif > <label>男</label></li>
    						<li><input type="radio" name="userSex" @if ($res->userSex ==2) checked @endif > <label>女</label></li>
    					</ul>
    				</div>
    			</div>
    			<div class="mws-form-row">
    				<label class="mws-form-label">用户昵称</label>
    				<div class="mws-form-item">
    					<input type="text" class="large" name="birthday" value="{{$res->birthday}}">
    				</div>
    			</div>
    			<div class="mws-form-row">
    				<label class="mws-form-label">用户生日</label>
    				<div class="mws-form-item">
    					<input type="text" class="large" name="loginName" value="{{$res->loginName}}">
    				</div>
    			</div>
    			<!--<div class="mws-form-row">
                	<label class="mws-form-label">用户头像</label>
                	<div class="mws-form-item">
                    	<div class="fileinput-holder" style="position: relative;"><input type="file" style="position: absolute; top: 0px; right: 0px; margin: 0px; cursor: pointer; font-size: 999px; opacity: 0; z-index: 999;"></div>
                    </div>
                </div>-->
                <div class="mws-form-row">
    				<label class="mws-form-label">用户手机</label>
    				<div class="mws-form-item">
    					<input type="text" class="large" name="userPhone" value="{{$res->userPhone}}">
    				</div>
    			</div>
    			<div class="mws-form-row">
    				<label class="mws-form-label">用户邮箱</label>
    				<div class="mws-form-item">
    					<input type="text" class="large" name="userEmail" value="{{$res->userEmail}}">
    				</div>
    			</div>
    			<div class="mws-form-row">
    				<label class="mws-form-label">用户权限</label>
    				<div class="mws-form-item clearfix">
    					<ul class="mws-form-list inline">
    						<li><input type="radio" name="userStatus" @if ($res->userStatus ==0) checked @endif > <label>关闭状态</label></li>
    						<li><input type="radio" name="userStatus" @if ($res->userStatus ==1) checked @endif > <label>开启状态</label></li>
    					</ul>
    				</div>
    			</div>
    			<div class="mws-form-row">
    				<label class="mws-form-label">支付密码</label>
    				<div class="mws-form-item">
    					<input type="text" class="medium" name="payPass" value="{{$res->payPass}}">
    				</div>
    			</div>
    		</div>
    		<div class="mws-button-row">
    			<input type="submit" value="修改" class="btn btn-danger">
    			<input type="reset" value="重置" class="btn ">
    		</div>
    	</form>
    </div>    	
</div>
@endsection
