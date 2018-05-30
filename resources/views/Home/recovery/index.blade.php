@extends('Layouts.page')

@section('main')
	<h2 class="start-recylce">开始回收</h2>
	<div class="textnav">
		<span class="current">1.选择属性</span>
		<span>2.获得估价</span>
		<span>3.提交订单</span>
		<span>4.质检确认最终回收价</span>
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
					<div class="left-inner hide">
						<div class="first-choose">
							<h2 class="name">1.基础信息</h2>
							<div class="basic-info hide ">
								<div class="version single-grp">
									<p class="name" title="购买渠道">
										购买渠道
									</p>
									<i class="tringle"></i>
									<p class="sel-value hide"></p>
								</div>
								<div class="basic-info-choose ">
									<div class="intro" data-id="4">
										<p  title="大陆国行">
											大陆国行
										</p>
									</div>
									<div class="intro" data-id="6">
										<p  title="香港行货">
											香港行货
										</p>
									</div>
									<div class="intro" data-id="5">
										<p  title="水货有锁">
											水货有锁
										</p>
									</div>
									<div class="intro" data-id="2">
										<p  title="水货无锁">
											水货无锁
										</p>
									</div>
									<div class="intro" data-id="254">
										<p  title="烧卡机（写号机）">
											烧卡机（写号机）
										</p>
									</div>
								</div>
							</div>
							<div class="basic-info hide ">
								<div class="version single-grp">
									<p class="name " title="机身内存">
										机身内存
									</p>
									<i class="tringle"></i>
									<p class="sel-value hide"></p>
								</div>
								<div class="basic-info-choose ">
									<div class="intro" data-id="124">
										<p  title="8G">
											8G
										</p>
									</div>
									<div class="intro" data-id="125">
										<p  title="16G">
											16G
										</p>
									</div>
									<div class="intro" data-id="126">
										<p  title="32G">
											32G
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="left-inner hide">
						<div class="first-choose">
							<h2 class="name">2.外观信息</h2>
							<div class="basic-info hide ">
								<div class="version single-grp">
									<p class="name " title="机身外观">
										机身外观
									</p>
									<i class="tringle"></i>
									<p class="sel-value hide"></p>
								</div>
								<div class="basic-info-choose ">
									<div class="intro" data-id="234">
										<p  title="外壳有划痕">
											外壳有划痕
										</p>
									</div>
									<div class="intro" data-id="235">
										<p  title="外壳磕碰/掉漆">
											外壳磕碰/掉漆
										</p>
									</div>
									<div class="intro" data-id="247">
										<p  title="机身弯曲/断裂">
											机身弯曲/断裂
										</p>
									</div>
									<div class="intro" data-id="233">
										<p  title="完好无使用痕迹">
											完好无使用痕迹
										</p>
									</div>
								</div>
							</div>
							<div class="basic-info hide ">
								<div class="version single-grp">
									<p class="name " title="屏幕外观">
										屏幕外观
									</p>
									<i class="tringle"></i>
									<p class="sel-value hide"></p>
								</div>
								<div class="basic-info-choose ">
									<div class="intro" data-id="238">
										<p  title="屏幕有划痕">
											屏幕有划痕
										</p>
									</div>
									<div class="intro" data-id="239">
										<p  title="屏幕缺角/碎裂">
											屏幕缺角/碎裂
										</p>
									</div>
									<div class="intro" data-id="237">
										<p  title="屏幕完好">
											屏幕完好
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="left-inner hide">
						<div class="first-choose">
							<h2 class="name">3.其它信息</h2>
							<div class="basic-info hide ">
								<div class="version single-grp">
									<p class="name " title="屏幕显示">
										屏幕显示
									</p>
									<i class="tringle"></i>
									<p class="sel-value hide"></p>
								</div>
								<div class="basic-info-choose ">
									<div class="intro" data-id="250">
										<p  title="轻微色差/轻微背光">
											轻微色差/轻微背光
										</p>
									</div>
									<div class="intro" data-id="251">
										<p  title="严重色差/严重背光">
											严重色差/严重背光
										</p>
									</div>
									<div class="intro" data-id="398">
										<p  title="漏液/断线/压伤">
											漏液/断线/压伤
										</p>
									</div>
									<div class="intro" data-id="590">
										<p  title="无法显示">
											无法显示
										</p>
									</div>
									<div class="intro" data-id="249">
										<p  title="显示完好">
											显示完好
										</p>
									</div>
								</div>
							</div>
							<div class="basic-info hide ">
								<div class="version single-grp">
									<p class="name " title="维修拆机史">
										维修拆机史
									</p>
									<i class="tringle"></i>
									<p class="sel-value hide"></p>
								</div>
								<div class="basic-info-choose ">
									<div class="intro" data-id="563">
										<p  title="小部件维修">
											小部件维修
										</p>
									</div>
									<div class="intro" data-id="556">
										<p  title="更换外壳">
											更换外壳
										</p>
									</div>
									<div class="intro" data-id="41">
										<p  title="主板维修/严重拆修">
											主板维修/严重拆修
										</p>
									</div>
									<div class="intro" data-id="39">
										<p  title="无拆机无修理">
											无拆机无修理
										</p>
									</div>
									<div class="intro" data-id="40">
										<p  title="屏幕维修">
											屏幕维修
										</p>
									</div>
								</div>
							</div>
							<div class="basic-info hide ">
								<div class="version single-grp">
									<p class="name " title="浸渍或受潮">
										浸渍或受潮
									</p>
									<i class="tringle"></i>
									<p class="sel-value hide"></p>
								</div>
								<div class="basic-info-choose ">
									<div class="intro" data-id="560">
										<p  title="轻微进水或受潮">
											轻微进水或受潮
										</p>
									</div>
									<div class="intro" data-id="37">
										<p  title="严重进水主板异常">
											严重进水主板异常
										</p>
									</div>
									<div class="intro" data-id="559">
										<p  title="无进水">
											无进水
										</p>
									</div>
								</div>
							</div>
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
									<div class="intro" data-id="13">
										<p  title="无法开机">
											无法开机
										</p>
										<i class="tringle-ok"></i>
									</div>
									<div class="intro" data-id="45">
										<p  title="无法充电">
											无法充电
										</p>
										<i class="tringle-ok"></i>
									</div>
									<div class="intro" data-id="24">
										<p  title="触摸失灵">
											触摸失灵
										</p>
										<i class="tringle-ok"></i>
									</div>
									<div class="intro" data-id="51">
										<p  title="摄像头故障">
											摄像头故障
										</p>
										<i class="tringle-ok"></i>
									</div>
									<div class="intro" data-id="17">
										<p  title="通话故障">
											通话故障
										</p>
										<i class="tringle-ok"></i>
									</div>
									<div class="intro" data-id="572">
										<p  title="扬声器故障">
											扬声器故障
										</p>
										<i class="tringle-ok"></i>
									</div>
									<div class="intro" data-id="48">
										<p  title="WIFI/蓝牙故障">
											WIFI/蓝牙故障
										</p>
										<i class="tringle-ok"></i>
									</div>
									<div class="intro" data-id="571">
										<p  title="GPS/重力感应故障">
											GPS/重力感应故障
										</p>
										<i class="tringle-ok"></i>
									</div>
									<div class="intro" data-id="570">
										<p  title="按键失灵">
											按键失灵
										</p>
										<i class="tringle-ok"></i>
									</div>
									<div class="intro" data-id="177">
										<p  title="指纹功能失灵">
											指纹功能失灵
										</p>
										<i class="tringle-ok"></i>
									</div>
									<div class="intro" data-id="573">
										<p title="感光故障">
											感光故障
										</p>
										<i class="tringle-ok"></i>
									</div>
									<div class="intro" data-id="135">
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
				<img src="e48e8a3c-8299-4291-ae54-7e29f062eef2-2.png" alt="苹果 iPhone 4" title="苹果 iPhone 4" class="img-right">
				<h2>苹果 iPhone 4（A1332）</h2>
				<div class="re-num-p">
					<div class="re-num">
						<p class="num">
							2836
						</p>
						<p>
							历史回收次数
						</p>
					</div>
					<div class="re-price">
						<p class="price">
							20
						</p>
						<p>
							回收最高价/元
						</p>
					</div>
				</div>
				<h2>历史平均价格趋势</h2>
				<div class="total-trend">
					<div class="stDe-tb">
						<div id="myfirstchart" style="width:222px;height:146px;"></div>
						<h2>下月预计跌幅
						<br>
						<span>￥
						2</span>元</h2>
					</div>
				</div>
			</div>
		</div>
	</div>


@endsection
