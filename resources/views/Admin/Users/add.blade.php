{{--这里继承了Layouts目录下的主模板--}}
@extends('Layouts/admin')

{{--这里继承了title标题--}}
@section('title')
用户添加
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
    	<form class="mws-form" action="/admin/index" method="post" enctype="multipart/form-data">
    		@if (count($errors) > 0)
    		<div class="mws-form-message error">
            	抱歉!出现一些错误!!
                <ul>
                	@foreach ($errors->all() as $error)
		                <li>{{ $error }}</li>
		            @endforeach
                </ul>
            </div>
    		@endif
    		{{csrf_field()}}
    		<div class="mws-form-inline">
    			<div class="mws-form-row">
    				<label class="mws-form-label">品牌名称</label>
    				<div class="mws-form-item">
    					<input type="text" class="small" name="brandName">
    				</div>
    			</div>
    			<div class="mws-form-row">
                	<label class="mws-form-label">品牌头像</label>
                	<div class="mws-form-item">
                    	<div class="fileinput-holder" style="position: relative;"><input type="file" name="brandPhoto" style="position: absolute; top: 0px; right: 0px; margin: 0px; cursor: pointer; font-size: 999px; opacity: 0; z-index: 999;"></div>
                    </div>
                </div>
    		</div>
    		<div class="mws-button-row">
    			<input type="submit" value="提交" class="btn btn-danger">
    			<input type="reset" value="重置" class="btn ">
    		</div>
    	</form>
    </div>    	
</div>
@endsection
