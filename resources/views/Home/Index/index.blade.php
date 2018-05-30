{{--继承公告模板--}}
@extends('Home.Layouts.index')

{{--替换网页标题--}}
@section('title', '易机网|手机回收,二手机回收,二手手机交易,手机回收网,旧手机回收|手机回收专业平台')

{{--顶部导航栏--}}
@section('global_topbar')

	<div class="global_topbar banner-recylce">
		<div class="nav-column">
			<div class="nav-left">
				<a href="index.html" class="logo"><img src="hom/images/logo.png" alt=""></a>
				<div class="globar_topbar_links">
					<a href="index.html" ><span>旧机回收</span><i class="line">下划线</i></a>
					<a href="index-1.html" rel="nofollow" target="_self"><span>二手良品</span></a>

				</div>
			</div>
			<div class="nav-right">
				<ul>
					<li class="cooperation">
						<a href="javascript:;" class="nav-r-link">企业合作/服务</a><i class="tringle"></i><i class="line-bar">线</i>
						<div class="nav-select">
							<i class="select-tringle"></i>
							<a href="purchaseCustomer.html" target="_blank">批量回收/采购</a>
							<!--<a href="http://open.58yiji.com/login" target="_blank" class="last-child">易机网开放平台</a>-->
						</div>
					</li>
					<li class="search-r">
						<a href="index.html" ><i class="search-navbr">搜索</i></a><i class="line-bar">线</i>
						<!-- 
                <div class="nav-select nav-select-sh">
                    <i class="select-tringle"></i>
                    <div class="search-inner">
                        <input type="text" class="search-text" placeholder="请输入想要购买的二手良品机型">
                        <a href="javascript:;" class="search">搜索</a>
                    </div>
                </div>
                 -->
					</li>
					<li class="phone-s">
						<i class="phone-ewm">手机扫二维码</i><i class="tringle"></i><i class="line-bar">线</i>
						<div class="nav-select">
							<i class="select-tringle"></i>
							<a href="javascript:;" class="last-child erweima"><img src="hom/images/code_03.jpg" alt="" width="130" height="130">
								<p>易机网移动端</p>
							</a>
						</div>
					</li>
					<li class="user-login">
						<!--未登录-->

						<a href="javascript:if(confirm(%27http://www.58yiji.com/member/toLogin.html  \n\nThis file was not retrieved by Teleport Pro, because it is addressed on a path excluded by the site\%27s Robot Exclusion parameters.  (Teleport Pro\%27s compliance with this system is optional; see the Project Properties, Netiquette page.)  \n\nDo you want to open it from the server?%27))window.location=%27http://www.58yiji.com/member/toLogin.html%27" class="nav-r-link login"><span class="state">未登录</span></a>

						<!--已登录-->

					</li>
				</ul>
			</div>
		</div>

		<div class="main-search">
			<h1>省心卖 | 专业旧机回收平台</h1>
			<div class="advantages">
				<span class="high-price"><img src="hom/images/2.png" alt="">高价回收</span>
				<span><img src="hom/images/3.png" alt="">隐私保护</span>
				<span><img src="hom/images/4.png" alt="">专业质检</span>
				<span><img src="hom/images/5.png" alt="">极速打款</span>
				<span class="keep-safe"><img src="hom/images/6.png" alt="">价保无忧</span>
			</div>
			<form action="http://www.58yiji.com/index.html" id="sercheForm" method="post">
				<div class="search-all">
					<input type="text" name="keyWord" id="keyWord" autocomplete="off" placeholder="请输入想要回收手机/平板机型" value="">
					<a href="javascript:;" class="search"><i class="search-icon" id="searchBnt">搜索</i></a>
				</div>
				<div class="search-recycle-end hide" id="searchSelect1">
					<ul id="searchList"></ul>
				</div>
				<div class="search-select hide" id="searchSelect2">
					<h2 class="name">热门推荐</h2>
					<div class="hot-tj">
						<a href="javascript:;">普通环保机型</a>
						<a href="javascript:;">触屏环保机型</a>
						<a href="javascript:;">苹果 iPhone 6</a>
						<a href="javascript:;">苹果 iPhone 5S</a>
						<a href="javascript:;">苹果iPhone 6s</a>
						<a href="javascript:;">苹果 iPhone 6 Plus</a>
						<a href="javascript:;">苹果iPhone 6S Plus</a>
						<a href="javascript:;">苹果 iPhone 4s</a>
					</div>
					<h2 class="name">搜索历史</h2>
					<div class="history-search">

						暂无
					</div>
				</div>
			</form>
			<p class="now-recycle">立刻回收</p>
			<a href="#proQuility" class="tringle-infinite"><img src="hom/images/7.png" alt=""></a>
		</div>
		<script type="text/javascript">
			jQuery(function() {
				//获得焦点事件
				$("#keyWord").bind("click", function(e) {
					var keyWord = $.trim($("#keyWord").val());
					if(!checkIsEmpty(keyWord)) {
						$("#searchSelect1").hide();
						$("#searchSelect2").show();
					} else {
						ajaxQueryDate();
						$("#searchSelect2").hide();
						$("#searchSelect1").show();
					}
					return false;
				});
				//文本输入事件
				$("#keyWord").bind("keyup", function(e) {
					var keyWord = $.trim($("#keyWord").val());
					if(!checkIsEmpty(keyWord)) {
						$("#searchSelect1").hide();
						$("#searchSelect2").show();
					} else {
						ajaxQueryDate();
						$("#searchSelect2").hide();
						$("#searchSelect1").show();
					}
					return false;
				});
				//单机隐藏
				$(document).click(function() {
					if($("#searchSelect1").css("display") == "block") {
						$("#searchSelect1").hide();
					}
					if($("#searchSelect2").css("display") == "block") {
						$("#searchSelect2").hide();
					}
				});
				//行选中事件
				$("#searchSelect1").on("click", "p", function(e) {
					var text = $(this).html();
					if(text != "没有匹配的数据") {
						$("#keyWord").val(text);
						$("#searchSelect1").hide();
					}
				});
				//行选中事件
				$("#searchSelect2").on("click", "a", function(e) {
					var text = $(this).html();
					$("#keyWord").val(text);
					$("#searchSelect2").hide();
					$("#sercheForm").submit();
				});
				//搜索事件
				$("#searchBnt").bind("click", function(e) {
					$("#sercheForm").submit();
				});
			});
			//异步查询数据
			function ajaxQueryDate() {
				var keyWord = $("#keyWord").val();
				$.ajax({
					type: 'post',
					url: "ajaxByKeyWord.html.js"  ,
					data: {
						"keyWord": keyWord
					},
					dataType: 'json',
					cache: false,
					async: true,
					success: function(data) {
						if(data.success == 1) {
							var arr = [];
							if(data.productList.length > 0) {
								for(var i = 0; i < data.productList.length; i++) {
									var pro = data.productList[i];
									var html = "<p>" + pro.productName + "</p>";
									arr.push(html);
								}
								arr = arr.join('');
								$("#searchList").empty();
								$("#searchList").append(arr);
							} else {
								var html = "<p>没有匹配的数据</p>";
								$("#searchList").empty();
								$("#searchList").append(html);
							}
						} else {
							var html = "<p>没有匹配的数据</p>";
							$("#searchList").empty();
							$("#searchList").append(html);
						}
					},
					error: function() {
						var html = "<p>没有匹配的数据</p>";
						$("#searchList").empty();
						$("#searchList").append(html);
					}
				});
			}

			function checkIsEmpty(value) {
				if(null == value || "" == value || undefined == value || '' == value || "null" == value) {
					return false;
				}
				return true;
			}
		</script>

	</div>
@endsection


{{--主体导航栏--}}
@section('main')


	<!-- 主要部分 -->
	<!--旧机回收-->
	<div class="step-recycle">
		<div class="container">
			<span class="step-intro">四步闪电回收</span>
			<div class="step1"><img src="hom/images/8.png" alt="">
				<p>搜索估价机型</p>
			</div><i class="tringle-r"><img src="hom/images/9.png" alt=""></i>
			<div class="step1"><img src="hom/images/10.png" alt="">
				<p>评估回收价</p>
			</div><i class="tringle-r"><img src="hom/images/9.png" alt=""></i>
			<div class="step1"><img src="hom/images/11.png" alt="">
				<p>提交订单并发货</p>
			</div><i class="tringle-r"><img src="hom/images/9.png" alt=""></i>
			<div class="step1"><img src="hom/images/12.png" alt="">
				<p>坐等收钱</p>
			</div>
			<a href="huishouliucheng.html" target="_blank" class="check-guide">查看回收指南</a>
		</div>
	</div>
	<!--要回收的型号-->
	<div class="main-type-old" id="proQuility">
		<input type="hidden" id="queryKeyWord" value="">
		<input type="hidden" id="categoryId" value="18">
		<input type="hidden" id="brandId" value="1">
		<input type="hidden" id="offset" value="0">
		<div class="container">
			<h2 class="title">请选择您要回收的型号</h2>
			<h3 class="title">选择回收型号后，即可立即估价</h3>
			<div class="phone-compu">
				<div class="left" id="categoryDiv">
					<a href="javascript:;" id="cgPhone" class="active"><i class="phone"></i>手机</a>
					<a href="javascript:;" id="cgPinBan"><i class="computer"></i>平板</a>
				</div>
				<div class="right">
					<div class="nav-pro" id="">
						<div class="phone small-level" id="shoujiBrandDiv">
							<ul>
								<li class="active" title="苹果">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="1">
										<input type="hidden" value="苹果">
										<img src="hom/images/a919cac6-3f3f-4433-9c25-4f1d097fdb89.png" class="hover-black">
									</a>
								</li>
								<li title="三星">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="2">
										<input type="hidden" value="三星">
										<img src="hom/images/7c77647f-4217-485c-b859-033fee4d3dc7.png" class="hover-black">
									</a>
								</li>
								<li title="小米">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="6">
										<input type="hidden" value="小米">
										<img src="hom/images/4f52eb8c-a0f4-4dd5-8501-15a6068bd2be.png" class="hover-black">
									</a>
								</li>
								<li title="魅族">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="7">
										<input type="hidden" value="魅族">
										<img src="hom/images/6cc166e9-9833-4deb-8a53-94aaa70afef6.png" class="hover-black">
									</a>
								</li>
								<li title="华为">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="8">
										<input type="hidden" value="华为">
										<img src="hom/images/688d4512-d98a-41b9-9a9b-6e22d9003fe1.png" class="hover-black">
									</a>
								</li>
								<li title="HTC">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="4">
										<input type="hidden" value="HTC">
										<img src="hom/images/c88232ed-8943-41c2-a42a-4114325f6af0.png" class="hover-black">
									</a>
								</li>
								<li title="金立">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="13">
										<input type="hidden" value="金立">
										<img src="hom/images/d1c2e728-558b-4c0c-b0dc-2d46d68c85f4.png" class="hover-black">
									</a>
								</li>
								<li title="诺基亚">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="3">
										<input type="hidden" value="诺基亚">
										<img src="hom/images/14eb640f-2942-49bb-b2e6-476b7b7f0da2.png" class="hover-black">
									</a>
								</li>
								<li title="黑莓">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="5">
										<input type="hidden" value="黑莓">
										<img src="hom/images/44e2a942-06f8-4322-ab11-0fe472d2ede9.png" class="hover-black">
									</a>
								</li>
								<li title="索尼">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="9">
										<input type="hidden" value="索尼">
										<img src="hom/images/69b426d8-7216-4f24-a4af-fab3533d9407.png" class="hover-black">
									</a>
								</li>
								<li title="联想">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="10">
										<input type="hidden" value="联想">
										<img src="hom/images/a3ed9683-9c14-4721-abff-844a2d503af4.png" class="hover-black">
									</a>
								</li>
								<li title="摩托罗拉">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="11">
										<input type="hidden" value="摩托罗拉">
										<img src="hom/images/1ea40050-6af4-4492-8a4d-f6cdde134da0.png" class="hover-black">
									</a>
								</li>
								<li title="酷派">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="12">
										<input type="hidden" value="酷派">
										<img src="hom/images/183aa7a0-896e-4a65-90d3-62884e382f2b.png" class="hover-black">
									</a>
								</li>
								<li>
									<a href="javascript:;" class="show-more"><span>展开更多</span><i></i></a>
								</li>
								<li title="OPPO">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="14">
										<input type="hidden" value="OPPO">
										<img src="hom/images/836ef88c-f63b-4219-b4cf-c3b273ad058e.png" class="hover-black">
									</a>
								</li>
								<li title="LG">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="15">
										<input type="hidden" value="LG">
										<img src="hom/images/8bcf6bb1-770b-40c4-9ea1-ed4edc62d6f0.png" title="LG" class="hover-black">
									</a>
								</li>
								<li title="天语">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="18">
										<input type="hidden" value="天语">
										<img src="hom/images/1df2621a-8964-4398-ab03-f7520d5239a9.png" title="天语" class="hover-black">
									</a>
								</li>
								<li title="中兴">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="20">
										<input type="hidden" value="中兴">
										<img src="hom/images/de49338c-e006-46b3-b11f-f242bf7ccc45.png" title="中兴" class="hover-black">
									</a>
								</li>
								<li title="TCL">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="21">
										<input type="hidden" value="TCL">
										<img src="hom/images/78e81f22-312d-4af9-acf8-54ec008d757c.png" title="TCL" class="hover-black">
									</a>
								</li>
								<li title="vivo">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="22">
										<input type="hidden" value="vivo">
										<img src="hom/images/bd29e57a-c1fc-44c9-90e7-64b3aae851e5.png" title="vivo" class="hover-black">
									</a>
								</li>
								<li title="朵唯">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="23">
										<input type="hidden" value="朵唯">
										<img src="hom/images/462c8cb3-84c9-4577-9c19-7ec6cc11fc64.png" title="朵唯" class="hover-black">
									</a>
								</li>
								<li title="Nubia">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="26">
										<input type="hidden" value="Nubia">
										<img src="hom/images/8a72a100-2500-4714-ab5d-cd72898210f3.png" title="Nubia" class="hover-black">
									</a>
								</li>
								<li title="微软">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="29">
										<input type="hidden" value="微软">
										<img src="hom/images/1996d2f3-ad9b-46ac-89ca-d872b35e1d58.png" title="微软" class="hover-black">
									</a>
								</li>
								<li title="华硕">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="30">
										<input type="hidden" value="华硕">
										<img src="hom/images/2bb63a00-71f2-41e3-afc6-97018c2a943e.png" title="华硕" class="hover-black">
									</a>
								</li>
								<li title="谷歌">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="31">
										<input type="hidden" value="谷歌">
										<img src="hom/images/826e50c3-5859-4ee9-9a30-2b3b0a549e59.png" title="谷歌" class="hover-black">
									</a>
								</li>
								<li title="乐视">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="32">
										<input type="hidden" value="乐视">
										<img src="hom/images/ea5a86d2-95b7-437e-a546-944b96f0156b.png" title="乐视" class="hover-black">
									</a>
								</li>
								<li title="vertu">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="34">
										<input type="hidden" value="vertu">
										<img src="hom/images/82f747d7-1f44-4df1-8df3-993cf4617bcb.png" title="vertu" class="hover-black">
									</a>
								</li>
								<li title="ZUK">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="35">
										<input type="hidden" value="ZUK">
										<img src="hom/images/494e2e9c-1173-401e-8164-e30eb3b57b90.png" title="ZUK" class="hover-black">
									</a>
								</li>
								<li title="小辣椒">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="36">
										<input type="hidden" value="小辣椒">
										<img src="hom/images/7d6e9cd8-0387-47c8-86af-56317317c160.png" title="小辣椒" class="hover-black">
									</a>
								</li>
								<li title="青橙">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="37">
										<input type="hidden" value="青橙">
										<img src="hom/images/3d4e7f8e-7ec2-4265-a63b-b69df93a0731.png" title="青橙" class="hover-black">
									</a>
								</li>
								<li title="奇酷">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="38">
										<input type="hidden" value="奇酷">
										<img src="hom/images/ddb15669-d04a-4a83-bd23-3cbd8c9f0801.png" title="奇酷" class="hover-black">
									</a>
								</li>
								<li title="飞利浦">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="39">
										<input type="hidden" value="飞利浦">
										<img src="hom/images/06402923-f523-4484-bd33-7c9c8715fe2f.png" title="飞利浦" class="hover-black">
									</a>
								</li>
								<li title="YOTAPHONE">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="40">
										<input type="hidden" value="YOTAPHONE">
										<img src="hom/images/6d8b55f1-70a8-439c-9f1d-c3fac51f1e7f.png" title="YOTAPHONE" class="hover-black">
									</a>
								</li>
								<li title="环保机型">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="42">
										<input type="hidden" value="环保机型">
										<img src="hom/images/cf581e4f-efbd-48c0-967d-097adb2f1e17.png" title="环保机型" class="hover-black">
									</a>
								</li>
								<li title="亚马逊">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="45">
										<input type="hidden" value="亚马逊">
										<img src="hom/images/8665267e-1222-4725-b029-9034ebf78758.png" title="亚马逊" class="hover-black">
									</a>
								</li>
								<li title="詹姆士">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="47">
										<input type="hidden" value="詹姆士">
										<img src="hom/images/002293b3-649b-43c7-beea-a1b2d4455348.png" title="詹姆士" class="hover-black">
									</a>
								</li>
								<li title="酷比">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="48">
										<input type="hidden" value="酷比">
										<img src="hom/images/83b92450-2c74-400c-977d-21903de2ab81.png" title="酷比" class="hover-black">
									</a>
								</li>
								<li title="VETAS">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="50">
										<input type="hidden" value="VETAS">
										<img src="hom/images/88adcf89-395f-4a3c-b8a7-440a4bd79bec.png" title="VETAS" class="hover-black">
									</a>
								</li>
								<li title="8848">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="51">
										<input type="hidden" value="8848">
										<img src="hom/images/58f0c4c7-c951-4ef1-8560-65685cae7419.png" title="8848" class="hover-black">
									</a>
								</li>
								<li title="一加">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="27">
										<input type="hidden" value="一加">
										<img src="hom/images/1e0a99c6-f369-4795-bd50-5895227dffad.png" title="一加" class="hover-black">
									</a>
								</li>
								<li title="美图">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="25">
										<input type="hidden" value="美图">
										<img src="hom/images/2562c062-10a8-442f-9c9c-690ddff5aa21.png" title="美图" class="hover-black">
									</a>
								</li>
								<li title="锤子">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="28">
										<input type="hidden" value="锤子">
										<img src="hom/images/649f47dc-427e-4a54-ac37-6b05b5289ab3.png" title="锤子" class="hover-black">
									</a>
								</li>
							</ul>
						</div>
						<div class="computer small-level hide" id="pinbanBrandDiv">
							<ul>
								<li title="苹果">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="1">
										<input type="hidden" value="苹果">
										<img src="hom/images/a919cac6-3f3f-4433-9c25-4f1d097fdb89.png" class="hover-black">
									</a>
								</li>
								<li title="三星">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="2">
										<input type="hidden" value="三星">
										<img src="hom/images/7c77647f-4217-485c-b859-033fee4d3dc7.png" class="hover-black">
									</a>
								</li>
								<li title="小米">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="6">
										<input type="hidden" value="小米">
										<img src="hom/images/4f52eb8c-a0f4-4dd5-8501-15a6068bd2be.png" class="hover-black">
									</a>
								</li>
								<li title="华为">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="8">
										<input type="hidden" value="华为">
										<img src="hom/images/688d4512-d98a-41b9-9a9b-6e22d9003fe1.png" class="hover-black">
									</a>
								</li>
								<li title="HTC">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="4">
										<input type="hidden" value="HTC">
										<img src="hom/images/c88232ed-8943-41c2-a42a-4114325f6af0.png" class="hover-black">
									</a>
								</li>
								<li title="诺基亚">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="3">
										<input type="hidden" value="诺基亚">
										<img src="hom/images/14eb640f-2942-49bb-b2e6-476b7b7f0da2.png" class="hover-black">
									</a>
								</li>
								<li title="黑莓">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="5">
										<input type="hidden" value="黑莓">
										<img src="hom/images/44e2a942-06f8-4322-ab11-0fe472d2ede9.png" class="hover-black">
									</a>
								</li>
								<li title="索尼">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="9">
										<input type="hidden" value="索尼">
										<img src="hom/images/69b426d8-7216-4f24-a4af-fab3533d9407.png" class="hover-black">
									</a>
								</li>
								<li title="联想">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="10">
										<input type="hidden" value="联想">
										<img src="hom/images/a3ed9683-9c14-4721-abff-844a2d503af4.png" class="hover-black">
									</a>
								</li>
								<li title="摩托罗拉">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="11">
										<input type="hidden" value="摩托罗拉">
										<img src="hom/images/1ea40050-6af4-4492-8a4d-f6cdde134da0.png" class="hover-black">
									</a>
								</li>
								<li title="LG">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="15">
										<input type="hidden" value="LG">
										<img src="hom/images/8bcf6bb1-770b-40c4-9ea1-ed4edc62d6f0.png" class="hover-black">
									</a>
								</li>
								<li title="微软">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="29">
										<input type="hidden" value="微软">
										<img src="hom/images/1996d2f3-ad9b-46ac-89ca-d872b35e1d58.png" class="hover-black">
									</a>
								</li>
								<li title="华硕">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="30">
										<input type="hidden" value="华硕">
										<img src="hom/images/2bb63a00-71f2-41e3-afc6-97018c2a943e.png" class="hover-black">
									</a>
								</li>
								<li>
									<a href="javascript:;" class="show-more"><span>展开更多</span> <i></i></a>
								</li>
								<li title="谷歌">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="31">
										<input type="hidden" value="谷歌">
										<img src="hom/images/826e50c3-5859-4ee9-9a30-2b3b0a549e59.png" class="hover-black">
									</a>
								</li>
								<li title="飞利浦">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="39">
										<input type="hidden" value="飞利浦">
										<img src="hom/images/06402923-f523-4484-bd33-7c9c8715fe2f.png" class="hover-black">
									</a>
								</li>
								<li title="E人E本">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="41">
										<input type="hidden" value="E人E本">
										<img src="hom/images/5660f48d-50ad-4418-8693-0c2972753165.png" class="hover-black">
									</a>
								</li>
								<li title="惠普">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="43">
										<input type="hidden" value="惠普">
										<img src="hom/images/b6a67f4d-5ace-4343-ba5c-32d1600bf84b.png" class="hover-black">
									</a>
								</li>
								<li title="VOYO">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="44">
										<input type="hidden" value="VOYO">
										<img src="hom/images/a2de032c-101f-4fb0-b43f-9b13ccf824ea.png" class="hover-black">
									</a>
								</li>
								<li title="亚马逊">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="45">
										<input type="hidden" value="亚马逊">
										<img src="hom/images/8665267e-1222-4725-b029-9034ebf78758.png" class="hover-black">
									</a>
								</li>
								<li title="戴尔">
									<a href="javascript:;">
										<i class="line"></i>
										<input type="hidden" value="46">
										<input type="hidden" value="戴尔">
										<img src="hom/images/8d6a1649-eaa2-4e71-8dfe-bfafc4180dd7.png" class="hover-black">
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="pro-list">
						<h2 class="name">
	                        <span id="keyWordSpan"></span>
	                        <span id="brandName">苹果</span>
	                    	<span id="categoryName">(手机)</span>
	                    	相关回收机型
	                    </h2>
						<ul id="productUl">
							<li title="苹果 iPhone 8">
								<a href="3041.html" >
									<div class="pro-img"><img src="hom/images/97bca775-5327-4156-8c92-a79e1b6e643f.png"></div>
									<h2 class="pro-name">苹果 iPhone 8</h2>
									<p class="pro-num">目前已回收20台</p>
								</a>
							</li>
							<li title="苹果iPhone 6s">
								<a href="1591.html" >
									<div class="pro-img"><img src="hom/images/9475200a-e977-4b66-aa77-1b5538369b52.png"></div>
									<h2 class="pro-name">苹果iPhone 6s</h2>
									<p class="pro-num">目前已回收9864台</p>
								</a>
							</li>
							<li title="苹果 iPhone 6">
								<a href="1167.html" >
									<div class="pro-img"><img src="hom/images/140bfd81-c0e4-4268-bfc7-10b092b70d98.png"></div>
									<h2 class="pro-name">苹果 iPhone 6</h2>
									<p class="pro-num">目前已回收17035台</p>
								</a>
							</li>
							<li title="苹果iPhone X">
								<a href="3043.html" >
									<div class="pro-img"><img src="hom/images/df06d715-83e7-48ae-bd07-5445d75206f6.png"></div>
									<h2 class="pro-name">苹果iPhone X</h2>
									<p class="pro-num">目前已回收46台</p>
								</a>
							</li>
							<li title="苹果 iPhone 7 Plus">
								<a href="2135.html" >
									<div class="pro-img"><img src="hom/images/37808028-366c-4566-8afe-67e4e3c4b298.png"></div>
									<h2 class="pro-name">苹果 iPhone 7 Plus</h2>
									<p class="pro-num">目前已回收846台</p>
								</a>
							</li>
							<li title="苹果 iPhone 7">
								<a href="2134.html" >
									<div class="pro-img"><img src="hom/images/d673093d-02c9-41bc-b710-b093d9bc4e9d.png"></div>
									<h2 class="pro-name">苹果 iPhone 7</h2>
									<p class="pro-num">目前已回收965台</p>
								</a>
							</li>
							<li title="苹果 iPhone 7 Plus（A1784）">
								<a href="2983.html" >
									<div class="pro-img"><img src="hom/images/8f907726-65d7-4a76-8ca7-b53cf4647874.png"></div>
									<h2 class="pro-name">苹果 iPhone 7 Plus（A1784）</h2>
									<p class="pro-num">目前已回收0台</p>
								</a>
							</li>
							<li title="苹果 iPhone 7（A1778）">
								<a href="2982.html" >
									<div class="pro-img"><img src="hom/images/0901507b-0869-4667-b56f-5167fa5d6b16.png"></div>
									<h2 class="pro-name">苹果 iPhone 7（A1778）</h2>
									<p class="pro-num">目前已回收11台</p>
								</a>
							</li>
							<li title="苹果iPhone 6S Plus">
								<a href="1590.html" >
									<div class="pro-img"><img src="hom/images/6e23f524-76b7-4866-88d9-edaf8f4c234e.png"></div>
									<h2 class="pro-name">苹果iPhone 6S Plus</h2>
									<p class="pro-num">目前已回收5551台</p>
								</a>
							</li>
							<li title="苹果 iPhone 6 Plus">
								<a href="1165.html" >
									<div class="pro-img"><img src="hom/images/c80f5b21-872b-4c37-8a7a-88af13e250ae.png"></div>
									<h2 class="pro-name">苹果 iPhone 6 Plus</h2>
									<p class="pro-num">目前已回收9640台</p>
								</a>
							</li>
							<li title="苹果 iphone 8 plus">
								<a href="3042.html" >
									<div class="pro-img"><img src="hom/images/df06d715-83e7-48ae-bd07-5445d75206f6.png"></div>
									<h2 class="pro-name">苹果 iphone 8 plus</h2>
									<p class="pro-num">目前已回收43台</p>
								</a>
							</li>
							<li title="苹果 iPhone 5">
								<a href="3.html" >
									<div class="pro-img"><img src="hom/images/7eab09b1-706e-45e4-bbb8-1bd6eed3be93.png"></div>
									<h2 class="pro-name">苹果 iPhone 5</h2>
									<p class="pro-num">目前已回收4030台</p>
								</a>
							</li>
							<li title="苹果 iPhone 5C">
								<a href="4.html" >
									<div class="pro-img"><img src="hom/images/add3b05b-1608-40bf-8612-dd35ec4e15ef.png"></div>
									<h2 class="pro-name">苹果 iPhone 5C</h2>
									<p class="pro-num">目前已回收597台</p>
								</a>
							</li>
							<li title="苹果 iPhone 4s">
								<a href="2.html" >
									<div class="pro-img"><img src="hom/images/e1538f72-340a-439a-b0bb-d57894ab6194.png"></div>
									<h2 class="pro-name">苹果 iPhone 4s</h2>
									<p class="pro-num">目前已回收5401台</p>
								</a>
							</li>
							<li title="苹果 iPhone 4（A1332）">
								<a href="1.html" >
									<div class="pro-img"><img src="hom/images/e48e8a3c-8299-4291-ae54-7e29f062eef2.png"></div>
									<h2 class="pro-name">苹果 iPhone 4（A1332）</h2>
									<p class="pro-num">目前已回收2836台</p>
								</a>
							</li>
						</ul>
						<span class="hide" id="isMore">
	                    	   <a href="javascript:;" class="ck-more" id="moreBtn">查看更多</a>
	                        </span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--专业质检-->
	<div class="pro-quility">
		<div class="container">
			<div class="left">
				<video id="my-video" class="video-js " controls width="565p;" height="330px;" poster="hom/images/user-comt.jpg" data-setup="{}">
					<source src="hom/video/check.mp4" type="video/mp4">
				</video>
			</div>
			<div class="right">
				<h2 class="name">验机师专业质检</h2>
				<p><i></i>屏幕质检</p>
				<p><i></i>外观成色</p>
				<p><i></i>功能检测</p>
				<p><i></i>硬件检测</p>
				<a href="ckIntroduction.html" target="_blank" class="ck-quality">查看质检说明</a>
			</div>
		</div>
	</div>
	<!--用户购买评价-->
	<!-- 
	<div class="part-two">
	    <div class="container">
	        <h3 class="user-comt"><i></i>用户体验评价</h3>
	        <p class="purchase-user">我们已成功为 <span>234123412</span> 台旧机找到新的主人，用户评价显示顾客们非常满意买到的二手机。</p>
	        <ul>
	        	<li>
			                <a href="javascript:;">
			                    <div class="user-img"><img src="hom/images/http://imgspace.yjshou.com/resources/userUpLoadImages/320_320/" alt="" width="362px" height="195px"></div>
			                    <p class="user-name"></p>
			                    <p class="user-buy">购买过 <span>三星 GALAXY Note4（N9100/公开版/双4G）</span></p>
			                    <p class="user-intro">非常好</p>
			                </a>
			             </li>
		             <li>
			                <a href="javascript:;">
			                    <div class="user-img"><img src="hom/images/http://imgspace.yjshou.com/resources/userUpLoadImages/320_320/" alt="" width="362px" height="195px"></div>
			                    <p class="user-name"></p>
			                    <p class="user-buy">购买过 <span>红米手机3S</span></p>
			                    <p class="user-intro">价钱合理，打款快</p>
			                </a>
			             </li>
		             <li>
			                <a href="javascript:;">
			                    <div class="user-img"><img src="hom/images/http://imgspace.yjshou.com/resources/userUpLoadImages/320_320/" alt="" width="362px" height="195px"></div>
			                    <p class="user-name"></p>
			                    <p class="user-buy">购买过 <span>苹果iPhone 6S Plus</span></p>
			                    <p class="user-intro">很不错</p>
			                </a>
			             </li>
		             </ul>
	    </div>
	</div>  -->

		<script>
			var hasSub = false;
			var basePath = "";
			$(function() {
				var queryIsMore = 'yes';
				var queryKeyWord = '';
				var isQuery = 'no';
				if(isQuery == "yes") {
					var target_top = $("#proQuility").offset().top;
					$("html,body").scrollTop(target_top);
					$("#offset").val(0);
					$("#brandId").val("");
					$("#categoryId").val("");
					$("#brandName").html("");
					$("#categoryName").html("");
					$("#keyWordSpan").html(queryKeyWord);
					if(queryIsMore == "yes") {
						$("#isMore").show();
					} else {
						$("#isMore").hide();
					}
					if(queryKeyWord != "") {
						$("#pinbanBrandDiv").find("li").each(function(e) {
							$(this).removeClass("active");
						});
						//清空品牌选中
						$("#shoujiBrandDiv").find("li").each(function(e) {
							$(this).removeClass("active");
						});
					}
				} else {
					if(queryIsMore == "yes") {
						$("#isMore").show();
					} else {
						$("#isMore").hide();
					}
				}
				//类别选择
				var productlist = $('.right .nav-pro .small-level');
				$('#categoryDiv').on("click", "a", function() {
					$("#keyWord").val("");
					$(this).addClass('active');
					$(this).siblings('a').removeClass('active');
					var index = $(this).index();
					var categoryId = 0;
					if(index == 0) {
						categoryId = 18;
						$("#offset").val(0);
						$("#brandId").val("");
						$("#categoryId").val(18);
						$("#brandName").html("");
						$("#pinbanBrandDiv").hide();
						$("#shoujiBrandDiv").show();
						$("#categoryName").html("(手机)");
						$("#keyWordSpan").html("");

						//清空品牌选中
						$("#shoujiBrandDiv").find("li").each(function(e) {
							$(this).removeClass("active");
						});
					}
					if(index == 1) {
						categoryId = 21;
						$("#offset").val(0);
						$("#brandId").val("");
						$("#categoryId").val(21);
						$("#brandName").html("");
						$("#shoujiBrandDiv").hide();
						$("#pinbanBrandDiv").show();
						$("#categoryName").html("(平板)");
						$("#keyWordSpan").html("");
						//清空品牌选中
						$("#pinbanBrandDiv").find("li").each(function(e) {
							$(this).removeClass("active");
						});
					}
					$("#offset").val(0);
					var dataParam = {
						"categoryId": categoryId,
						"offset": 0
					};
					ajaxQueryData(dataParam, "no");
				});
				//品牌选择
				$('.small-level li').click(function() {
					$("#keyWord").val("");
					$(this).addClass('active');
					$(this).siblings('li').removeClass('active');
					var showMore = $(this).find("a").attr("class");
					var value = $(this).find("a").find("input:first").val();
					var brandName = $(this).find("a").find("input:first").next().val();
					var divId = $(this).parents().parents().attr("id");
					$("#offset").val(0);
					$("#brandId").val(value);
					$("#brandName").html(brandName);
					$("#keyWordSpan").html("");
					if(showMore != "show-more") {
						var categoryId = "";
						if(divId == "shoujiBrandDiv") {
							categoryId = 18;
							$("#categoryId").val(18);
							$("#cgPinBan").removeClass("active");
							$("#cgPhone").addClass("active");
						}
						if(divId == "pinbanBrandDiv") {
							categoryId = 21;
							$("#categoryId").val(21);
							$("#cgPhone").removeClass("active");
							$("#cgPinBan").addClass("active");
						}
						var dataParam = {
							"categoryId": categoryId,
							"brandId": value,
							"offset": 0
						};
						ajaxQueryData(dataParam, "no");
					}
				});
				//查看更多品牌
				$('.show-more').click(function() {
					$(this).parents('ul').css('height', 'auto');
					$(this).find('span').text('没有更多');
					$(this).parents('ul:first').append($(this).parent());
				});
				//查看更多商品
				$('#moreBtn').bind("click", function() {
					var offset = $("#offset").val();
					var brandId = $("#brandId").val();
					var categoryId = $("#categoryId").val();
					var keyWord = $("#queryKeyWord").val();
					$("#offset").attr("value", parseInt(offset) + 1);
					if(checkIsEmpty(keyWord)) {
						if(!checkIsEmpty(categoryId)) {
							var dataParam = {
								"keyWord": keyWord,
								"offset": parseInt(offset) + 1
							};
						} else {
							var dataParam = {
								"categoryId": categoryId,
								"brandId": brandId,
								"offset": parseInt(offset) + 1
							};
						}
					} else {
						var dataParam = {
							"categoryId": categoryId,
							"brandId": brandId,
							"offset": parseInt(offset) + 1
						};
					}
					ajaxQueryData(dataParam, "yes");
				});

				//提交愿望机型
				$("#ad_sub").bind("click", function() {
					if(!hasSub) {
						var content = $.trim($("#ad_con_input").val());
						var phone = $.trim($("#ad_ph_input").val());
						if(phone == '' || phone == '请填写您的手机号') {
							$("#ad_ph_input").focus();
							return;
						} else if(!checkPhone("#ad_ph_input")) {
							$("#ad_ph_input").focus();
							return;
						}
						if(content == '' || content == '请输入手机型号、版本等') {
							$("#ad_con_input").focus();
							return;
						}
						$.post(basePath + "/subAdvise.html", {
							content: content,
							phone: phone
						}, function(data) {
							if(eval(data) == 1) {
								alert("您的建议已提交，谢谢支持！");
								$("#ad_con_input").attr("disabled", true);
								$("#ad_ph_input").attr("disabled", true);
								$("#keyWord").val("");
								window.location = basePath + "/index.html";
								hasSub = true;
							} else {
								alert("对不起，您的建议提交失败了！");
							}
						});
					} else {
						alert("您刚刚已经提交过建议!");
						$("#keyWord").val("");
						window.location = basePath + "/index.html";
						return false;
					}
				});

			});

			function ajaxQueryData(ajaxDataJson, isAdd) {
				//异步加载数据
				$.ajax({
					type: 'post',
					url: basePath + '/ajaxQueryProduct.html',
					data: ajaxDataJson,
					dataType: 'json',
					cache: false,
					async: true,
					success: function(data) {
						if(data.success == 1) {
							var arr = [];
							var basePath = data.contPath;
							if(data.proList.length > 0) {
								for(var i = 0; i < data.proList.length; i++) {
									var pro = data.proList[i];
									var html = '<li title="' + pro.productName + '">';
									html += '<a href="' + basePath + '/wymj/' + pro.id + '.html">';
									html += '<div class="pro-img"><img src="' + data.imgUrl + '160_160/' + pro.smallImage + '" ></div>';
									html += '<h2 class="pro-name">' + pro.productName + '</h2>';
									html += '<p class="pro-num">目前已回收' + pro.sumNum + '台</p>';
									html += '</a>';
									html += '</li>';
									arr.push(html);
								}
								arr = arr.join('');
								if(isAdd == "no") {
									$("#productUl").empty();
								}
								$("#productUl").append(arr);
								if(data.isMore == "yes") {
									$("#isMore").show();
								} else {
									$("#isMore").hide();
								}
							} else {
								$("#productUl").empty();
								var imgUrl = basePath + "/resources/v2/images/no-model.png";
								var html = "";
								html += "<div class=\"now-no-product\">";
								html += "<div class=\"no-model\">";
								html += "<img src=\"" + imgUrl + "\" title=\"\">";
								html += "<p>暂无此机型，看看别的商品";
								html += "</div>";
								html += "</div>";
								$("#productUl").append(html);
								$("#isMore").hide();
							}
						} else {
							$("#productUl").empty();
							var imgUrl = basePath + "/resources/v2/images/no-model.png";
							var html = "";
							html += "<div class=\"now-no-product\">";
							html += "<div class=\"no-model\">";
							html += "<img src=\"" + imgUrl + "\" alt=\"\">";
							html += "<p>暂无此机型，看看别的商品";
							html += "</div>";
							html += "</div>";
							$("#productUl").append(html);
							$("#isMore").hide();
						}
					},
					error: function() {
						var html = "<li>没有匹配数据</li>";
						$("#productUl").empty();
						$("#productUl").append(html);
					}
				});
			}

			function checkIsEmpty(value) {
				if(null == value || "" == value || undefined == value || '' == value || "null" == value) {
					return false;
				}
				return true;
			}

			function checkPhone(obj) {
				var phone = $.trim($(obj).val());
				var reg = /^((13[0-9]{1}|17[0-9]{1}|14[0-9]{1}|15[0-9]{1}|18[0-9]{1})+\d{8})$/;
				if(phone == "") {
					return false;
				} else if(!reg.test(phone)) {
					return false;
				}
				return true;
			}

		</script>
@endsection
