<!DOCTYPE html>
<html>

	<head>
		<meta name="baidu-site-verification" content="l0wo5at91x" />
		<meta name="360-site-verification" content="f2ca490ee320d6e2d0f43957887a8688" />
		<meta charset="UTF-8" />
		<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
		<title>@yield('title')</title>
		<meta http-equiv="Expires" content="0">
		<meta http-equiv="Cache-Control" content="no-cache">
		<meta http-equiv="Pragma" content="no-cache">
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta http-equiv="X-UA-Compatible" content="chrome=1; IE=edge" />
		<meta name="renderer" content="webkit">
		<meta name="description" content="易机网是中国专业的数码产品手机回收网。直面用户回收，30秒评估手机交易价格，快速了解二手手机回收价格并网上回购交易，是专业的二手手机交易平台，二手苹果,二手三星手机等主流机型,马上换钱,变废为宝,同时易机网提供二手良品和以旧换新服务,是用户实现闲置手机变现,手机回收的好选择。 " />
		<meta name="keywords" content="易机网,手机回收网,回收旧手机,二手手机回收,旧手机回收网,废旧手机回收网,苹果平板回收, 三星手机系列回收,苹果系列手机回收" />
		<meta property="qc:admins" content="34640475211216375" />
		<script type="text/javascript">
			var basePath = '';
			if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0") {
				toOtherPage();
			} else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
				toOtherPage();
			}

			function toOtherPage() {
				window.location.href = 'http://www.58yiji.com/dibanben.html';
			}
		</script>
		<script src="{{ asset('hom/js/jquery-1.7.2.min.js') }}" type="text/javascript"></script>
		<script src="{{ asset('hom/js/common.js') }}" type="text/javascript"></script>
		<link rel="stylesheet" href="{{ asset('hom/css/base-all.css') }}">
		<link rel="stylesheet" href="{{ asset('hom/css/index.css') }}" >
		<link rel="stylesheet" href="{{ asset('hom/css/video-js.css') }}">
		<link rel="stylesheet" href="{{ asset('hom/css/news.css') }}">
	</head>

	<body>
		<!-- 顶部 -->
		<div id="app">
			
		
			<div class="header">
				
				<!--顶部导航替换内容-->
				@section('global_topbar')
					
				@show
			</div>
			
			<!--替换主体内容-->
			@section('main')
		    
		    @show
			
			<!-- 底部 -->
			<div class="footer">
				<div class="container">
					<ul>
						<li class="first">
							<h2 class="name"><i></i>资讯中心</h2>
							<a href="index.htm" target="_blank"><i></i>回收资讯</a>
							<a href="index-1.htm" target="_blank"><i></i>手机资讯</a>
							<a href="index-2.htm" target="_blank"><i></i>易机资讯</a>
						</li>
						<li class="second">
							<h2 class="name"><i></i>回收事项</h2>
							<a href="term.html" target="_blank"><i></i>交易条款</a>
							<a href="ckIntroduction.html" target="_blank"><i></i>质检说明</a>
							<a href="lcjs.html" target="_blank"><i></i>交易流程</a>
						</li>
						<li class="third">
							<h2 class="name"><i></i>关于我们</h2>
							<a href="about_yjw.html" target="_blank"><i></i>了解我们</a>
							<a href="1-1.html" target="_blank"><i></i>常见问题</a>
							<a href="12.html" target="_blank"><i></i>联系我们</a>
							<a href="13.html" target="_blank"><i></i>加入我们</a>
						</li>
						<li class="four">
							<h2 class="name tel-phone"><i></i>400-848-9711</h2>
							<p class="time">上午：9:30-12:00 <br>下午：13:30-18:30</p>
							<p class="address">地址：深圳市南山区南海大道1057<br> 号科技大厦二期B座402室</p>
						</li>
						<li class="five">
							<p class="name-ewm">关注公众号查订单</p>
							<p class="ewm"><img src="hom/images/erweima.png" alt="" height="90" width="90"></p>
						</li>
						<!-- 
	            <li class="five">
	                <p class="name-ewm">关注公众号查订单</p>
	                <p class="ewm"><img src="hom/images//resources/v2/images/erweima.png" alt="" height="90" width="90"></p>
	            </li>
	             -->
					</ul>
				</div>
				<p class="copyright">© Copyright 2017 All Rights Reserved 深圳威锋互动网络有限公司 版权所有 粤ICP备18022101号-1</p>
				<div style="width:300px;margin:0 auto; padding:20px 0;">
					<a target="_blank" href="##" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="hom/images/record.png" style="float:left;" />
						<p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">粤公网安备 44030502001885号</p>
					</a>
				</div>
			</div>
			<script type="text/javascript" src="{{ asset('hom/js/video.js') }}" ></script>
			<script type="text/javascript">
				var myPlayer = videojs('my-video');
				jQuery(function() {
					$(".vjs-mouse-display").on("click", function() {
						var whereYouAt = myPlayer.currentTime();
						var value = $(this).attr("data-current-time");
						var valueArray = value.split(":");
						var minue = valueArray[0];
						var des = valueArray[1];
						myPlayer.currentTime(120);
	
					});
				});
			</script>
			<!--右侧导航-->
			<div class="nav-right-bar">
				<a href="javascript:;" class="info-kf"><img src="hom/images/r-bar1.png" alt=""></a>
				<a href="javascript:;" class="attention-us"><img src="hom/images/r-bar2.png" alt="">
					<div class="erweima">
						<p>扫码关注</p>
						<img src="hom/images/erweima.png" alt="" width="100" height="100">
					</div>
				</a>
				<a href="javascript:;" class="go-top"><img src="hom/images/r-bar3.png" alt=""></a>
			</div>
			<!--资讯客服弹出框-->
			<div class="info-service hide">
				<div class="bigbg" style="display: block;">
					<div class="cart_con">
						<div class="close"></div>
						<div class="cart_nav">
							<a href="javascript:;" class="on">在线客服</a>
							<a href="javascript:;" class="">交易流程</a>
							<a href="javascript:;" class="">快递问题</a>
							<a href="javascript:;" class="" style="margin-right: 0;">退货问题</a>
						</div>
						<div class="cart_Box">
							<div class="cart_box" style="display: block;">
								<div class="cartdiv">
									<p><img class="no_lazy" src="hom/images/Qcart.jpg" alt="在线客服"></p>
									<a target="_blank" href="##" >旧机回收</a>
									<a target="_blank" href="##" >二手良品</a>
								</div>
							</div>
							<div class="cart_box" style="display: none;">
								<div class="problem">
									<ul>
										<li>
											<div class="question">提交订单后需要做什么？</div>
											<div class="answer" style="display: none;">提交订单后，邮寄手机，填写快递单号，点击发货，接着就坐等收钱啦！</div>
										</li>
										<li>
											<div class="question">回收过程安全吗？</div>
											<div class="answer" style="display: none;">我们使用支付宝、官方网银全程担保交易，确保回收过程安全。</div>
										</li>
										<li>
											<div class="question">手机资料安全吗？</div>
											<div class="answer" style="display: none;">请在邮寄之前备份好您的手机数据，我们检测确认之后，会使用专业设备彻底清除手机中的信息，确保您的资料安全。</div>
										</li>
										<li>
											<div class="question">质检人员是怎么检测？</div>
											<div class="answer" style="display: none;">我们需要了解您的机子是否为真机，功能是否正常，有没有拆修进水，屏幕是否有磨损，摄像头是否完好，无需拆机，使用专业设备检测。</div>
										</li>
										<li>
											<div class="question">多久能收到款？</div>
											<div class="answer" style="display: none;">到货24小时内确认付款，最快只需2小时（特殊节假日除外），当日到货数量多时会酌情处理。</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="cart_box" style="display: none;">
								<div class="problem">
									<ul>
										<li>
											<div class="question">快递上门取件？</div>
											<div class="answer" style="display: none;">您可以自己联系快递公司邮寄手机，也可以由我们客服帮您预约快递公司上门取件。</div>
										</li>
										<li>
											<div class="question">邮寄费用怎么算？</div>
											<div class="answer" style="display: none;">
												易机网旧机回收采取快递包邮，您可放心选择邮费到付（易机网承担回收旧机的邮寄费用，除邮寄费用以外的额外费用如保价费用等不包含在内）。 若因个人原因要求退货，退货产生的邮寄费用请您自理。
											</div>
										</li>
										<li>
											<div class="question">邮寄需要注意什么？</div>
											<div class="answer" style="display: block;">
												1. 全触摸屏的手机，千万不要把保护膜撕掉了，避免快递途中屏幕的磨损。 2. 寄送快递时请妥善打包您的包裹，可以适当在箱子缝隙加入填充物，以免运输途中损坏设备。 3. 请在邮寄前，将机子密码进行解除，以便我们检测人员及时检测处理您的订单。
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="cart_box" style="display: none;">
								<div class="problem">
									<ul>
										<li>
											<div class="question">哪些手机会被拒收？</div>
											<div class="answer" style="display: none;">如果收到的手机为高仿、山寨及盗抢机，我们将做退回处理，不予运费补贴。</div>
										</li>
										<li>
											<div class="question">可以选择退货吗？</div>
											<div class="answer" style="display: none;">若实际检测和订单描述有差异，客服人员将及时与您说明情况，与您协商新的回收价，如果对价格还是不满意，可以选择退货。</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="cart_bottom">
							<dl>
								<dt><img class="no_lazy" src="hom/images/mezi.png" alt="联系客服"></dt>
								<dd>
									<h2 style="line-height: 25px;font-size: 18px;color: #333333;text-align: center">400-848-9711</h2>
									<p style="line-height: 20px;font-size: 12px;color: #333333;text-align: center">咨询时间9:00-19:00</p>
								</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<script>
			//联系客服
			$('.cart_nav a').mouseenter(function() {
				$(this).addClass('on');
				$(this).siblings('a').removeClass('on');
				var indexNum = $(this).index();
				$(this).parents().find('.cart_Box .cart_box').hide().eq(indexNum).show();
			});
			$('.question').click(function() {
				$(this).parent().find('.answer').show();
				$(this).parent().siblings('li').find('.answer').hide();
			});
			$('.close').click(function() {
				$(this).parents('.info-service').hide();
			});
			$('.info-kf').click(function() {
				$(this).parents().find('.info-service').show();
			});
			//返回顶部
			$('.go-top').click(function() {
				$('html, body').animate({
					'scrollTop': 0
				}, 1000);
			});
		</script>
	</body>

</html>