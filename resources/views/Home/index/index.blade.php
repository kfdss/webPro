{{--继承公告模板--}}
@extends('Home.Layouts.index')

{{--替换网页标题--}}
@section('title', '易机网|手机回收,二手机回收,二手手机交易,手机回收网,旧手机回收|手机回收专业平台')

{{--顶部导航栏--}}
@section('global_topbar')
	<div class="global_topbar banner-recylce">
		<div class="nav-column">
			<div class="nav-left">
				<a href="/" class="logo"><img src="hom/images/logo.png" alt=""></a>
				<div class="globar_topbar_links">
					<a href="/" ><span>旧机回收</span><i class="line">下划线</i></a>
					<a href="/news" rel="nofollow" target="_self"><span>资讯中心</span></a>

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

						<a href="##" class="nav-r-link login"><span class="state">未登录</span></a>

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
			{{--搜索手机类型--}}
			<search></search>
			<p class="now-recycle">立刻回收</p>
			<a href="#proQuility" class="tringle-infinite"><img src="hom/images/7.png" alt=""></a>
		</div>
		{{--<script type="text/javascript">
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
		</script>--}}

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
				{{--首页品牌和机型选择--}}
				<right></right>
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
		{{--<script>
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

		</script>--}}
@endsection
