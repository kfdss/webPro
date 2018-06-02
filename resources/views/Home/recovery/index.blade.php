{{--继承公告模板--}}
@extends('Home.Layouts.index')

{{--替换网页标题--}}
@section('title', '易机网|手机回收,二手机回收,二手手机交易,手机回收网,旧手机回收|手机回收专业平台')

{{--替换标题下划线--}}
@section('lin')

@endsection

{{--主体内容--}}
@section('main')
<h2 class="start-recylce">开始回收</h2>
<div class="textnav">
	<span class="current">1.选择属性</span>
	<span>2.获得估价</span>
	<span>3.提交订单</span>
	<span>4.质检确认最终回收价 </span>
	<span>5.快速收款</span>
</div>
<div class="container">
	<div class="old-re-step">
		<form id="formEval" action="/recovery/submit" method="POST">
			{{csrf_field()}}
			<input type="hidden" name="plusPrice" value="0" />
			<input type="hidden" name="modelId" value="1" />
			<input type="hidden" name="subOptions" value="" />
			<div class="left">

				@foreach($faults as $v)

					<div class="left-inner hide">
						<div class="first-choose">
							<h2 class="name">{{$v[0]}}</h2>

							@foreach($v['infor'] as $va)
								<div class="basic-info hide ">
									<div class="version single-grp">
										<p class="name" title="{{$va['attribute']}}">{{$va['attribute']}}</p>
										<i class="tringle"></i>
										<p class="sel-value hide"></p>
									</div>
									
									<div class="basic-info-choose ">
										@foreach($va['fault'] as $val)
											<div class="intro" data-id="{{$val['id']}}">
												<p  title="{{$val['fault']}}">{{$val['fault']}}</p>
											</div>
										@endforeach	
									</div>
									
								</div>
							@endforeach

						</div>
					</div>

				@endforeach

				<div class="left-inner hide">
					<div class="first-choose">
						
						<div class="basic-info hide other-question-t">
							<div class="version multi-grp">
								<p class="name line-two" title="其它问题">
									其它问题
									<br />
									<span>如无，可“立即估价”</span>
								</p>
								<i class="tringle"></i>
								<p class="sel-value hide"></p>
							</div>
							<div class="basic-info-choose other-question">
								<div class="intro" data-id="29">
									<p  title="无法开机">
										无法开机
									</p>
									<i class="tringle-ok"></i>
								</div>
								<div class="intro" data-id="30">
									<p  title="无法充电">
										无法充电
									</p>
									<i class="tringle-ok"></i>
								</div>
								<div class="intro" data-id="31">
									<p  title="触摸失灵">
										触摸失灵
									</p>
									<i class="tringle-ok"></i>
								</div>
								<div class="intro" data-id="32">
									<p  title="摄像头故障">
										摄像头故障
									</p>
									<i class="tringle-ok"></i>
								</div>
								<div class="intro" data-id="33">
									<p  title="通话故障">
										通话故障
									</p>
									<i class="tringle-ok"></i>
								</div>
								<div class="intro" data-id="34">
									<p  title="扬声器故障">
										扬声器故障
									</p>
									<i class="tringle-ok"></i>
								</div>
								<div class="intro" data-id="35">
									<p  title="WIFI/蓝牙故障">
										WIFI/蓝牙故障
									</p>
									<i class="tringle-ok"></i>
								</div>
								<div class="intro" data-id="36">
									<p  title="GPS/重力感应故障">
										GPS/重力感应故障
									</p>
									<i class="tringle-ok"></i>
								</div>
								<div class="intro" data-id="37">
									<p  title="按键失灵">
										按键失灵
									</p>
									<i class="tringle-ok"></i>
								</div>
								<div class="intro" data-id="38">
									<p  title="指纹功能失灵">
										指纹功能失灵
									</p>
									<i class="tringle-ok"></i>
								</div>
								<div class="intro" data-id="39">
									<p title="感光故障">
										感光故障
									</p>
									<i class="tringle-ok"></i>
								</div>
								<div class="intro" data-id="40">
									<p title="系统账户无法注销">
										系统账户无法注销
									</p>
									<i class="tringle-ok"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a id="btnEval" href="javascript:;" class="immediately-va-btn" style="display:none;">
					立即估价
				</a>
			</div>
		</form>
		<div class="right">
			<img src="/Uploads/{{$iphone['macPhoto']}}" alt="{{$iphone['macType']}}" title="{{$iphone['macType']}}" class="img-right">
			<h2>{{$iphone['macType']}}</h2>
			<div class="re-num-p">
				<div class="re-num">
					<p class="num">{{$iphone['recoveryNum']}}</p>
					<p>历史回收次数</p>
				</div>
				<div class="re-price">
					<p class="price">
					{{$iphone['macMoney']}}
					</p>
					<p>回收最高价/元</p>
				</div>
			</div>
			<h2>历史平均价格趋势</h2>
		</div>
	</div>
</div>
@endsection
