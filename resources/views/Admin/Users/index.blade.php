{{--这里继承了Layouts目录下的主模板--}}
@extends('Layouts/admin')

{{--这里继承了title标题--}}
@section('title')
用户浏览
@endsection

{{--这里继承了active高亮--}}
@section('active2')
active
@endsection

{{--替换main内容--}}
@section('mws-container')
<div class="container">
	<div class="mws-panel grid_8">
		<div class="mws-panel-header">
			<span><i class="icon-table"></i> 用户浏览</span>
		</div>
		<div class="mws-panel-body no-padding">
			<div id="DataTables_Table_1_wrapper" class="dataTables_wrapper" role="grid">
				<form action="/admin/users" method="get">
					<div id="DataTables_Table_1_length" class="dataTables_length">
						<label>显示
						<select size="1" name="shownum" aria-controls="DataTables_Table_1">
							<option value="10" @if(isset($request['shownum']) && $request['shownum']==10) selected @endif >10</option>
	    					<option value="25" @if(isset($request['shownum']) && $request['shownum']==25) selected @endif >25</option>
	    					<option value="50" @if(isset($request['shownum']) && $request['shownum']==50) selected @endif >50</option>
	    					<option value="100" @if(isset($request['shownum']) && $request['shownum']==100) selected @endif >100</option>
						</select> 条</label>
					</div>
					<div class="dataTables_filter" id="DataTables_Table_1_filter">
						<label>搜索: 
		    				<input type="text" aria-controls="DataTables_Table_1" name="keywords" @if(isset($request['keywords'])) value="{{$request['keywords']}}" @endif>
		    				<button type="submit">搜索</button>
		    			</label>
					</div>
				</form>
				<table class="mws-datatable-fn mws-table dataTable" id="DataTables_Table_1" aria-describedby="DataTables_Table_1_info">
					<thead>
						<tr role="row">
							<th class="sorting_asc" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" aria-sort="ascending">用户id</th>
							<th class="" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1">用户账号</th>
							<th class="" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1">用户类型</th>
							<th class="" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1">用户性别</th>
							<th class="" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1">用户名称</th>
							<th class="" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1">用户生日</th>
							<th class="" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1">用户头像</th>
							<th class="" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1">用户电话</th>
							<th class="" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1">操作</th>
						</tr>
					</thead>

					<tbody role="alert" aria-live="polite" aria-relevant="all">
						<!--<tr class="odd">
							<td class="  sorting_1">Gecko</td>
							<td class=" ">Firefox 1.0</td>
							<td class=" ">Win 98+ / OSX.2+</td>
							<td class=" ">1.7</td>
							<td class=" ">A</td>
						</tr>-->
						@foreach ($res as $vo)
						<tr class="even">
							<td class="  sorting_1">{{$vo->id}}</td>
							<td class=" ">{{$vo->loginName}}</td>
							<td class=" ">{{$vo->userType}}</td>
							<td class=" ">{{$vo->userSex}}</td>
							<td class=" ">{{$vo->userName}}</td>
							<td class=" ">{{$vo->birthday}}</td>
							<td class=" ">
								@if ($vo->userPhoto)
					    				<div class=" " style="width: 60px;height: 60px;font-size: 0;"><img src="/Uploads/{{$vo->userPhoto}}" style="width: 100%;height: 100%;"/></div>
					    			@else
					    				<div class=" " style="width: 60px;height: 60px;font-size: 0;"><img src="/Uploads/default_pic.jpg" style="width: 100%;height: 100%;"/></div>
					        	@endif
							</td>
							<td class=" ">{{$vo->userPhone}}</td>
							<td class=" ">
		                        <span class="btn-group">
		                            <a href="users/{{$vo->id}}" class="btn btn-small"><i class="icon-search"></i></a>
		                            <a href="users/{{$vo->id}}/edit" class="btn btn-small"><i class="icon-pencil"></i></a>
		                            <a href="##" class="btn btn-small del" id="{{$vo->id}}"><i class="icon-trash"></i></a>
		                        </span>
		                    </td>
						</tr>
						@endforeach
					</tbody>
				</table>
				<div class="dataTables_info" id="DataTables_Table_1_info">
					Showing 1 to 10 of 57 entries
				</div>
				{{$res->appends($request)->links()}}
			</div>
		</div>
	</div>
	<!-- Panels End -->
</div>
<script src="/js/jquery-1.11.3.min.js"></script>
<script>
$('.del').click(function() {

	//获取正在被删除的信息的id
	var id = $(this).attr('id');

	//存储当前操作a链接元素信息
	var _this = $(this);

	//让用户进行判断，是否确定要删除
	if(confirm('您确定要删除该信息吗？！')) {

		//使用ajax发送post请求，执行delete删除
		$.post('users/' + id, {
			"_token": "{{csrf_token()}}",
			"_method": "DELETE"
		}, function(data) {

			//判断是成功还是失败
			if(data == 1) {

				//刷新页面
				window.location.href='/admin/users';

				//删除表格
				alert('恭喜，删除成功！');
			} else {
				alert('抱歉，删除失败！');
			}
		});
	}
});
</script>
@endsection
