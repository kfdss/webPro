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
	<span class="current">2.获得估价</span>
	<span>3.提交订单</span>
	<span>4.质检确认最终回收价</span>
	<span>5.快速收款</span>
</div>
<div class="container">
			<div class="recycle-step-three recycle-three-yjhx">
			    </div>
		    <div class="old-re-step2">
		        <div class="top-detail">
		            <div class="left">
		                <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//240_240/978215bc-65c7-491f-97a1-ec344025a9a2.png" alt="苹果iPhone SE（全网通）" title="苹果iPhone SE（全网通）" class="img-left">
		                <h2>苹果iPhone SE</h2>
		            </div>
		            <div class="center">
		                <div class="top-price">
		                    <p class="quotation-p">
								评估报价 <br>
		                        <span>￥45</span>
		                    </p>
		                    <div class="two-lj-btn">
		                    	<a id="aOrder" href="javascript:;" class="immediately-hq">立即换钱</a>
		                    </div>
		                    <form action="/order/input.html" id="formOrder" method="post" target="_self">
			                	<input name="pid" value="1952" type="hidden">
			                	<input name="price" value="45.0" type="hidden">
			                	<input name="pprice" value="0" type="hidden">
			                	<input name="options" value="491,6,126,129,10,235,239,251,556,37,17" type="hidden">
			                	<input name="img" value="978215bc-65c7-491f-97a1-ec344025a9a2.png" type="hidden">
			                	<input name="productName" value="苹果iPhone SE" type="hidden">
			                	<input name="newPid" value="" id="sale_input" type="hidden">
			                	<input name="isYjhx" value="0" id="sale_yjhx" type="hidden">
			                </form>
		                </div>
		                <div class="center-user-ck">
		                    <form id="formEval" action="/doGuJia.html" method="POST">
					        	<input type="hidden" name="plusPrice" value="0">
					        	<input type="hidden" name="modelId" value="1952">
					        	<input type="hidden" name="subOptions" value="">
				        	</form>
		                    <ul class="basic-info clearfix">
		                    	<li>
				                            <div class="select-question">
				                            	<div class="question" data-id="491">
					                                	<span>A1724</span>
					                                    <i></i>
					                                </div>
				                            		<div class="select-down">
				                                    <p data-id="491">A1724</p>
					                            		<p data-id="490">A1723</p>
					                            		<p data-id="245">其它型号</p>
					                            		<p data-id="231">官换机</p>
					                            		<p data-id="514">展示机</p>
					                            		</div>
				                            </div>
			                            </li>
		                    		<li>
				                            <div class="select-question">
				                            	<div class="question" data-id="6">
					                                	<span>香港行货</span>
					                                    <i></i>
					                                </div>
				                            		<div class="select-down">
				                                    <p data-id="4">大陆国行</p>
					                            		<p data-id="6">香港行货</p>
					                            		<p data-id="5">水货有锁</p>
					                            		<p data-id="2">水货无锁</p>
					                            		</div>
				                            </div>
			                            </li>
		                    		<li>
				                            <div class="select-question">
				                            	<div class="question" data-id="126">
					                                	<span>32G</span>
					                                    <i></i>
					                                </div>
				                            		<div class="select-down">
				                                    <p data-id="125">16G</p>
					                            		<p data-id="126">32G</p>
					                            		<p data-id="136">64G</p>
					                            		<p data-id="137">128G</p>
					                            		</div>
				                            </div>
			                            </li>
		                    		<li>
				                            <div class="select-question">
				                            	<div class="question" data-id="129">
					                                	<span>白色</span>
					                                    <i></i>
					                                </div>
				                            		<div class="select-down">
				                                    <p data-id="130">金色</p>
					                            		<p data-id="129">白色</p>
					                            		<p data-id="128">黑色</p>
					                            		<p data-id="140">粉色</p>
					                            		</div>
				                            </div>
			                            </li>
		                    		<li>
				                            <div class="select-question">
				                            	<div class="question" data-id="10">
					                                	<span>保修一个月内或过保</span>
					                                    <i></i>
					                                </div>
				                            		<div class="select-down">
				                                    <p data-id="9">保修一个月以上</p>
					                            		<p data-id="10">保修一个月内或过保</p>
					                            		</div>
				                            </div>
			                            </li>
		                    		<li>
				                            <div class="select-question">
				                            	<div class="question" data-id="235">
					                                	<span>外壳磕碰/掉漆</span>
					                                    <i></i>
					                                </div>
				                            		<div class="select-down">
				                                    <p data-id="234">外壳有划痕</p>
					                            		<p data-id="235">外壳磕碰/掉漆</p>
					                            		<p data-id="247">机身弯曲/断裂</p>
					                            		<p data-id="327">全新机器</p>
					                            		<p data-id="233">完好无使用痕迹</p>
					                            		</div>
				                            </div>
			                            </li>
		                    		<li>
				                            <div class="select-question">
				                            	<div class="question" data-id="239">
					                                	<span>屏幕缺角/碎裂</span>
					                                    <i></i>
					                                </div>
				                            		<div class="select-down">
				                                    <p data-id="238">屏幕有划痕</p>
					                            		<p data-id="239">屏幕缺角/碎裂</p>
					                            		<p data-id="237">屏幕完好</p>
					                            		</div>
				                            </div>
			                            </li>
		                    		<li>
				                            <div class="select-question">
				                            	<div class="question" data-id="251">
					                                	<span>严重色差/严重背光</span>
					                                    <i></i>
					                                </div>
				                            		<div class="select-down">
				                                    <p data-id="250">轻微色差/轻微背光</p>
					                            		<p data-id="251">严重色差/严重背光</p>
					                            		<p data-id="398">漏液/断线/压伤</p>
					                            		<p data-id="590">无法显示</p>
					                            		<p data-id="249">显示完好</p>
					                            		</div>
				                            </div>
			                            </li>
		                    		<li>
				                            <div class="select-question">
				                            	<div class="question" data-id="556">
					                                	<span>更换外壳</span>
					                                    <i></i>
					                                </div>
				                            		<div class="select-down">
				                                    <p data-id="563">小部件维修</p>
					                            		<p data-id="556">更换外壳</p>
					                            		<p data-id="40">屏幕维修</p>
					                            		<p data-id="41">主板维修/严重拆修</p>
					                            		<p data-id="39">无拆机无修理</p>
					                            		</div>
				                            </div>
			                            </li>
		                    		<li>
				                            <div class="select-question">
				                            	<div class="question" data-id="37">
					                                	<span>严重进水主板异常</span>
					                                    <i></i>
					                                </div>
				                            		<div class="select-down">
				                                    <p data-id="560">轻微进水或受潮</p>
					                            		<p data-id="37">严重进水主板异常</p>
					                            		<p data-id="559">无进水</p>
					                            		</div>
				                            </div>
			                            </li>
		                    		<li class="other-q">
				                    			<p data-id="17"><span>通话故障</span><i></i></p>
				                    		</li>
				                    		<li class="other-q">
				                            <p class="add-bug"><a href="javascript:;" class="add"></a></p>
				                        </li>
				                        <div class="ck-other-info clearfix hide">
			                            	<a href="javascript:;" class="close-ck">关闭</a>
			                            	<a href="javascript:;" class="question" data-id="13">无法开机</a>
					                    		<a href="javascript:;" class="question" data-id="45">无法充电</a>
					                    		<a href="javascript:;" class="question" data-id="24">触摸失灵</a>
					                    		<a href="javascript:;" class="question" data-id="51">摄像头故障</a>
					                    		<a href="javascript:;" class="question" data-id="17" style="display:none;">通话故障</a>
					                    		<a href="javascript:;" class="question" data-id="572">扬声器故障</a>
					                    		<a href="javascript:;" class="question" data-id="48">WIFI/蓝牙故障</a>
					                    		<a href="javascript:;" class="question" data-id="571">GPS/重力感应故障</a>
					                    		<a href="javascript:;" class="question" data-id="570">按键失灵</a>
					                    		<a href="javascript:;" class="question" data-id="177">指纹功能失灵</a>
					                    		<a href="javascript:;" class="question" data-id="573">感光故障</a>
					                    		<a href="javascript:;" class="question" data-id="135">系统账户无法注销</a>
					                    		</div>
		                    		<a id="btnReeval" href="javascript:;" class="new-price">重新估价</a>
		                    </ul>
		                </div>
		                <p class="ensure-read"><span>*重要提示：</span>请您务必确保您已阅读并同意<a href="/term.html" target="_blank">易机网交易条款</a>，并保证机器来源合法！</p>
		                <div class="btm-four-step clearfix">
		                    <ul>
		                        <li>
		                            <div class="tu-and-word">
		                                <img src="/resources/v2/images/recycle/deliever1.png" alt="">
		                                <p>快递包邮</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="tu-and-word">
		                                <img src="/resources/v2/images/recycle/deliever2.png" alt="">
		                                <p>即时付款</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="tu-and-word">
		                                <img src="/resources/v2/images/recycle/deliever3.png" alt="">
		                                <p>隐私保护</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="tu-and-word bor-r-none">
		                                <img src="/resources/v2/images/recycle/deliever4.png" alt="">
		                                <p>绝不拆机</p>
		                            </div>
		                        </li>
		                    </ul>
		                </div>
		            </div>
		            <div class="right">
		                <h2>历史平均价格趋势</h2>
		                <div class="total-trend">
		                    <div class="stDe-tb">
		                        <div id="myfirstchart" style="width:222px;height:146px;" data-highcharts-chart="0"><div class="highcharts-container" id="highcharts-0" style="position: relative; overflow: hidden; width: 222px; height: 146px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg version="1.1" style="font-family:&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size:12px;" xmlns="http://www.w3.org/2000/svg" width="222" height="146"><desc>Created with Highcharts 4.2.5</desc><defs><clipPath id="highcharts-1"><rect x="0" y="0" width="159" height="96"></rect></clipPath></defs><rect x="0" y="0" width="222" height="146" fill="#FFFFFF" class=" highcharts-background"></rect><g class="highcharts-grid"></g><g class="highcharts-grid"><path fill="none" d="M 53 106.5 L 212 106.5" stroke="#D8D8D8" stroke-width="1" opacity="1"></path><path fill="none" d="M 53 58.5 L 212 58.5" stroke="#D8D8D8" stroke-width="1" opacity="1"></path><path fill="none" d="M 53 9.5 L 212 9.5" stroke="#D8D8D8" stroke-width="1" opacity="1"></path></g><g class="highcharts-axis"><path fill="none" d="M 105.5 106 L 105.5 116" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 158.5 106 L 158.5 116" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 212.5 106 L 212.5 116" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 52.5 106 L 52.5 116" stroke="#C0D0E0" stroke-width="1" opacity="1"></path><path fill="none" d="M 53 106.5 L 212 106.5" stroke="#C0D0E0" stroke-width="1"></path></g><g class="highcharts-axis"></g><g class="highcharts-series-group"><g class="highcharts-series highcharts-series-0" transform="translate(53,10) scale(1 1)" clip-path="url(#highcharts-1)"><path fill="#7cb5ec" d="M 26.5 30.72 L 79.5 37.440000000000005 L 132.5 57.6 L 132.5 96 L 79.5 96 L 26.5 96" fill-opacity="0.75"></path><path fill="none" d="M 26.5 30.72 L 79.5 37.440000000000005 L 132.5 57.6" stroke="#7cb5ec" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path><path fill="none" d="M 16.5 30.72 L 26.5 30.72 L 79.5 37.440000000000005 L 132.5 57.6 L 142.5 57.6" stroke-linejoin="round" visibility="visible" stroke="rgba(192,192,192,0.0001)" stroke-width="22" class=" highcharts-tracker" style=""></path></g><g class="highcharts-markers highcharts-series-0 highcharts-tracker" transform="translate(53,10) scale(1 1)" clip-path="url(#highcharts-2)" style=""><path fill="#7cb5ec" d="M 132 53.6 C 137.328 53.6 137.328 61.6 132 61.6 C 126.672 61.6 126.672 53.6 132 53.6 Z"></path><path fill="#7cb5ec" d="M 79 33.440000000000005 C 84.328 33.440000000000005 84.328 41.440000000000005 79 41.440000000000005 C 73.672 41.440000000000005 73.672 33.440000000000005 79 33.440000000000005 Z"></path><path fill="#7cb5ec" d="M 26 26.72 C 31.328 26.72 31.328 34.72 26 34.72 C 20.672 34.72 20.672 26.72 26 26.72 Z"></path></g></g><g class="highcharts-data-labels highcharts-series-0" visibility="visible" transform="translate(53,10) scale(1 1)" opacity="1"><g style="" transform="translate(11,4)"><text x="5" style="font-size:11px;font-weight:bold;color:#000000;text-shadow:0 0 6px #FFFFFF, 0 0 3px #FFFFFF;fill:#000000;text-rendering:geometricPrecision;" y="16"><tspan>672</tspan></text></g><g style="" transform="translate(64,10)"><text x="5" style="font-size:11px;font-weight:bold;color:#000000;text-shadow:0 0 6px #FFFFFF, 0 0 3px #FFFFFF;fill:#000000;text-rendering:geometricPrecision;" y="16"><tspan>644</tspan></text></g><g style="" transform="translate(117,31)"><text x="5" style="font-size:11px;font-weight:bold;color:#000000;text-shadow:0 0 6px #FFFFFF, 0 0 3px #FFFFFF;fill:#000000;text-rendering:geometricPrecision;" y="16"><tspan>560</tspan></text></g></g><g class="highcharts-axis-labels highcharts-xaxis-labels"><text x="79.5" style="color:#606060;cursor:default;font-size:11px;fill:#606060;" text-anchor="middle" transform="translate(0,0)" y="125" opacity="1">3月</text><text x="132.5" style="color:#606060;cursor:default;font-size:11px;fill:#606060;" text-anchor="middle" transform="translate(0,0)" y="125" opacity="1">4月</text><text x="185.5" style="color:#606060;cursor:default;font-size:11px;fill:#606060;" text-anchor="middle" transform="translate(0,0)" y="125" opacity="1">5月</text></g><g class="highcharts-axis-labels highcharts-yaxis-labels"><text x="38" style="color:#606060;cursor:default;font-size:11px;fill:#606060;width:63px;text-overflow:clip;" text-anchor="end" transform="translate(0,0)" y="109" opacity="1">¥400</text><text x="38" style="color:#606060;cursor:default;font-size:11px;fill:#606060;width:63px;text-overflow:clip;" text-anchor="end" transform="translate(0,0)" y="61" opacity="1">¥600</text><text x="38" style="color:#606060;cursor:default;font-size:11px;fill:#606060;width:63px;text-overflow:clip;" text-anchor="end" transform="translate(0,0)" y="13" opacity="1">¥800</text></g><g class="highcharts-tooltip" style="cursor:default;padding:0;pointer-events:none;white-space:nowrap;" transform="translate(0,-9999)"><path fill="none" d="M 3.5 0.5 L 13.5 0.5 C 16.5 0.5 16.5 0.5 16.5 3.5 L 16.5 13.5 C 16.5 16.5 16.5 16.5 13.5 16.5 L 3.5 16.5 C 0.5 16.5 0.5 16.5 0.5 13.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="black" stroke-opacity="0.049999999999999996" stroke-width="5" transform="translate(1, 1)"></path><path fill="none" d="M 3.5 0.5 L 13.5 0.5 C 16.5 0.5 16.5 0.5 16.5 3.5 L 16.5 13.5 C 16.5 16.5 16.5 16.5 13.5 16.5 L 3.5 16.5 C 0.5 16.5 0.5 16.5 0.5 13.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="black" stroke-opacity="0.09999999999999999" stroke-width="3" transform="translate(1, 1)"></path><path fill="none" d="M 3.5 0.5 L 13.5 0.5 C 16.5 0.5 16.5 0.5 16.5 3.5 L 16.5 13.5 C 16.5 16.5 16.5 16.5 13.5 16.5 L 3.5 16.5 C 0.5 16.5 0.5 16.5 0.5 13.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" isShadow="true" stroke="black" stroke-opacity="0.15" stroke-width="1" transform="translate(1, 1)"></path><path fill="rgba(249, 249, 249, .85)" d="M 3.5 0.5 L 13.5 0.5 C 16.5 0.5 16.5 0.5 16.5 3.5 L 16.5 13.5 C 16.5 16.5 16.5 16.5 13.5 16.5 L 3.5 16.5 C 0.5 16.5 0.5 16.5 0.5 13.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"></path><text x="8" style="font-size:12px;color:#333333;fill:#333333;" y="20"></text></g></svg></div></div>
		                        <h2>下月预计跌幅 <br><span>￥
		                        84</span>元</h2>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <!--商品各种介绍-->
		        <div class="pro-intro-de">
		            <h2 class="name">
		                <a href="javascript:;" class="active">回收方式</a>
		                <a href="javascript:;" class="">质检流程</a>
		                <a href="javascript:;" class="">隐私保护</a>
		                <a href="javascript:;" class="">用户评价</a>
		                <a href="javascript:;" class="">常见问题</a>
		            </h2>
		            <div class="pro-plate">
		                <ul>
		                    <li class="current">
		                        <img src="/resources/v2/images/old-recylce-way.png" alt="" class="old-re-tu">
		                    </li>
		                    <li>
		                    	<div class="inspection-process">
		                            <img src="{{ asset('hom/images/detail-tu1.jpg') }}" alt="" class="process-tu">
		                            <img src="{{ asset('hom/images/detail-tu2.jpg') }}" alt="" class="process-tu">
		                            <img src="{{ asset('hom/images/detail-tu3.jpg') }}" alt="" class="process-tu">
		                            <img src="{{ asset('hom/images/detail-tu4.jpg') }}" alt="" class="process-tu">
		                        </div>
		                    </li>
		                    <li>
		                    	<div class="product-self">
		                            <img src="{{ asset('hom/images/detail-tu5.jpg') }}" alt="" class="product-tu">
		                            <img src="{{ asset('hom/images/detail-tu6.jpg') }}" alt="" class="product-tu">
		                            <div class="credit-c">
		                                <img src="{{ asset('hom/images/detail-tu7.jpg') }}" alt="" class="left">
		                                <p>易机网在交易确认后将有专业人士，使用专业设备清除手机内的任何信息。<br>保证您的个人信息不会外泄，为您解除后顾之忧。</p>
		                            </div>
		                        </div>
		                    </li>
		                    <li>
		                        <div class="user-comments">
		                            <table style="top: -558px;">
		                            	<tbody><tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：小米 2A</p>
			                                            <p class="estimate" title="估价合理，客服态度好。">
			                                            	估价合理，客服态度好。</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/d15de122-810e-4335-afd1-e2bd3fa27937.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">133****2343</p>
			                                            <p class="time">
			                                            	7分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：三星 Galaxy Note 2</p>
			                                            <p class="estimate" title="整个过程很流畅，服务也很规范">
			                                            	整个过程很流畅，服务也很规范</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/0f8fbdfd-b27a-4f05-b15c-2b7ee4061444.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">138****5566</p>
			                                            <p class="time">
			                                            	13分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：三星 GALAXY Note4（N9100/公开版/双4G）</p>
			                                            <p class="estimate" title="非常好">
			                                            	非常好</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/835d7fcd-3502-490f-846a-aa2219f62494.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">173****3837</p>
			                                            <p class="time">
			                                            	15分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：红米手机3S</p>
			                                            <p class="estimate" title="价钱合理，打款快">
			                                            	价钱合理，打款快</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/961fe0ed-8310-4cc9-bd1c-82eef0d7b0bd.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">150****4115</p>
			                                            <p class="time">
			                                            	15分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：诺基亚 5800</p>
			                                            <p class="estimate" title="非常好。">
			                                            	非常好。</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/2fd558d1-fd45-46e5-a28e-27d69f271cd7.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">139****3993</p>
			                                            <p class="time">
			                                            	19分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：苹果 iPhone 4s</p>
			                                            <p class="estimate" title="第一次卖手机，整体体验很不错">
			                                            	第一次卖手机，整体体验很不错</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/ad0cb070-ec2b-45ae-9655-decf1cb488fd.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">139****6508</p>
			                                            <p class="time">
			                                            	23分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：华为 Ascend P7/P7-L09 电信版</p>
			                                            <p class="estimate" title="还不错，价格很公道，非常好评的网站">
			                                            	还不错，价格很公道，非常好评的网站</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/9cd75dd7-7e7d-4649-a0a7-0465d84b69bb.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">181****7030</p>
			                                            <p class="time">
			                                            	31分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：OPPO R7s</p>
			                                            <p class="estimate" title="很满意的交易，">
			                                            	很满意的交易，</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/215cdaed-e879-4bcc-bd8e-eee4d9c7a66f.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">131****8900</p>
			                                            <p class="time">
			                                            	32分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：苹果 iPhone 4s</p>
			                                            <p class="estimate" title="很不错">
			                                            	很不错</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/a6044b7e-5ae2-4e82-bf80-a1a28c2bcbe4.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">136****3227</p>
			                                            <p class="time">
			                                            	32分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：苹果 iPhone 5S</p>
			                                            <p class="estimate" title="很不错，卖了两次手机，都是在这里卖的价格和预估的差不多！">
			                                            	很不错，卖了两次手机，都是在这里卖的价格和预估的差不多！</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/b54ded9e-3867-4783-83e7-3f6172570c4c.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">131****5637</p>
			                                            <p class="time">
			                                            	39分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：三星 Galaxy Note 3</p>
			                                            <p class="estimate" title="足不出户就能把手机卖掉，方便，讲信用。">
			                                            	足不出户就能把手机卖掉，方便，讲信用。</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/dc33dc2f-be0a-4d86-9f9e-a9c099175f53.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">158****6291</p>
			                                            <p class="time">
			                                            	39分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：vivo Y67</p>
			                                            <p class="estimate" title="很满意，客服很好，很热情，放款也快！谢谢店家！  ">
			                                            	很满意，客服很好，很热情，放款也快！谢谢店家！  </p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/84b1d144-40b8-4705-a9c5-95ea7cdb54ea.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">176****9332</p>
			                                            <p class="time">
			                                            	41分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：苹果 iPad 3代</p>
			                                            <p class="estimate" title="回款速度快，挺诚信的！">
			                                            	回款速度快，挺诚信的！</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/14a559d8-ec0d-4483-a09c-d9d8a6fa77ec.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">186****4422</p>
			                                            <p class="time">
			                                            	47分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：苹果iPhone 6s</p>
			                                            <p class="estimate" title="物流很快，易机网收到手机后，马上打款，价格不变，很公道合理，不用的手机可以处理了，很不错的平台。">
			                                            	物流很快，易机网收到手机后，马上打款，价格不变，很公道合理，不用的手机可以处理了，很不错的平台。</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:0px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/01cde9f4-590a-4697-a616-d6f70e7663d7.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">173****1686</p>
			                                            <p class="time">
			                                            	52分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	<tr>
			                                    <td>
			                                        <div class="left">
			                                            <p class="state">成功回收手机：苹果iPhone 6S Plus</p>
			                                            <p class="estimate" title="很不错">
			                                            	很不错</p>
			                                            <p class="star">回款速度：
			                                                <span>
			                                                    <em style="width:130px;"></em>
			                                                </span>
			                                            </p>
			                                        </div>
			                                    </td>
			                                    <td>
			                                        <div class="right">
			                                            <img src="http://imgspace.yjshou.com/resources/userUpLoadImages//120_120/4884ea97-0552-423f-9409-bb3af46b5304.jpg" alt="" width="120" height="120">
			                                            <p class="phone-num">183****4115</p>
			                                            <p class="time">
			                                            	53分钟前
			                                            </p>
			                                        </div>
			                                    </td>
			                                </tr>
		                            	</tbody></table>
		                        </div>
		                    </li>
		                    <li>
		                        <div class="offten-q">
		                            <p class="the-problem"><img src="/resources/v2/images/recycle/tu-q.png" alt=""><span>交易过程安全么？</span></p>
		                            <p class="answer"><img src="/resources/v2/images/recycle/tu-a.png" alt=""><span>小易推荐您选择顺丰担保。顺丰战略合作，全程监控交易流程，100%免费保价确保每一笔交易安全，没有任何安全类隐患，您可以放心下单邮寄。</span></p>
		                            <p class="the-problem"><img src="/resources/v2/images/recycle/tu-q.png" alt=""><span>有指定的快递公司么？</span></p>
		                            <p class="answer"><img src="/resources/v2/images/recycle/tu-a.png" alt=""><span>小易建议您选择顺丰快递，也可以自行选择最优快递方式，您可以自己预约快递公司，小易也能帮您预约快递公司上门取件。</span></p>
		                            <p class="the-problem"><img src="/resources/v2/images/recycle/tu-q.png" alt=""><span>邮寄费用怎么算？</span></p>
		                            <p class="answer"><img src="/resources/v2/images/recycle/tu-a.png" alt=""><span>易机网对回收成功的用户提供邮费补贴。当笔订单回收交易金额在200元及以上，享受全额快递补贴，单笔订单回收交易金额低于200元，享受一半邮费补贴。</span></p>
		                            <p class="the-problem"><img src="/resources/v2/images/recycle/tu-q.png" alt=""><span>提交订单后怎么查看交易进度？</span></p>
		                            <p class="answer"><img src="/resources/v2/images/recycle/tu-a.png" alt=""><span>您可登陆官网进入订单中心即可或微信关注易机网，随时随地查看或处理订单，我们也会及时更新订单状态。</span></p>
		                            <p class="the-problem"><img src="/resources/v2/images/recycle/tu-q.png" alt=""><span>订单价就是最终回收价么？</span></p>
		                            <p class="answer"><img src="/resources/v2/images/recycle/tu-a.png" alt=""><span>如果您手机状况描述与验机情况相符，订单价就是最终回收价，如若描述与验机实际情况不符，客服会依据手机质检结果与您协商最终定价。</span></p>
		                        </div>
		                    </li>
		                </ul>
		            </div>
		        </div>
		    </div>
		</div>

@endsection