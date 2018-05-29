// JavaScript Document
//
$(function () {
		$(window).bind("scroll", function () {
			var scrollTopNum = $(document).scrollTop(), 
			winHeight = $(window).height(),
			returnTop = $(".values");
			var aa = $('.admonition').css('display');
			if(aa=="block"){
				(scrollTopNum > 0) ? returnTop.addClass('active') : returnTop.removeClass('active');
			}else{
				(scrollTopNum > 0) ? returnTop.addClass('on') : returnTop.removeClass('on active');
			};
		});
		$("div.backtop").click(function () {
			$("html, body").animate({ scrollTop: 0 }, 500);
		});
	
});

/*header下拉*/
$(function(){
	
	//控制导航选中结束
	
	$('.service').hover(function(){
		$('.menu-hds a').addClass('active');
		$('.menu-bds').show();
	},function(){
		$('.menu-hds a').removeClass('active');
		$('.menu-bds').hide();
	})
	$('.taomenu').hover(function(){
		$('.menu-hde a').addClass('active');
		$('.menu-bde').show();
	},function(){
		$('.menu-hde a').removeClass('active');
		$('.menu-bde').hide();
	})
});

/*css3兼容问题*/
 $('.newnav a:last-child').css({"border-right":"0","width":"113px"});
 $('.qualityspic li div:last-child').css("margin-right","0");
 $('.icons ul li:last-child').css("padding-right","0");
 $('.footer_nav dl').css("padding-right","0");
 $('.nav_left div a:first-child').css("padding-left","19px");
 $('.business li:last-child').css({"margin-bottom":"0"});
 $('.special ul li:last-child').css("margin-right","0");
 $('.zan .zanul li:last-child').css("margin-right","0");
 $('.searchWrap div:last-child').css("border-bottom","0");
 $('.tabset_con li:last-child').css("margin-right","0");
 $('.advent ul li:last-child').css("margin-right","0");
 $('.shoppingl ul li:last-child').css("border-bottom","0");
 $('.vipnav a:last-child').css("border-bottom","0"); 
 $('.groundcon li:last-child').css("margin-right","0");
 $('.lianxi li:last-child').css("margin-right","0");
/*框框的移动*/	
	$(function () {	
		$('.deal').hide();
		$('.Nav span').click(function(){
			$('.Nav span').toggleClass('active');
			$('.deal').slideToggle(300);
		});
		
	  $(".dealslogo li").hover(function (e) {
		var _this  = $(this), //闭包
			_desc  = _this.find(".desc").stop(true),
			width  = _this.width(), //取得元素宽
			height = _this.height(), //取得元素高
			left   = e.offsetX || e.originalEvent.layerX, //得到左边界
			top    = e.offsetY || e.originalEvent.layerY, //得到上边界
			right  = width - left, //计算出右边界
			bottom = height - top, //计算出下边界
			rect   = {}, //坐标对象，用于执行对应方法。
			_min   = Math.min(left, top, right, bottom), //得到最小值
			_out   = e.type == "mouseleave", //是否是离开事件
			spos   = {}; //起始位置
	
		rect[left] = function (epos) { //鼠从标左侧进入和离开事件
		  spos = {"left": -width, "top": 0};
		  if (_out) {
			_desc.animate(spos, "fast"); //从左侧离开
		  } else {
			_desc.css(spos).animate(epos, "fast"); //从左侧进入
		  }
		};
	
		rect[top] = function (epos) { //鼠从标上边界进入和离开事件
		  spos = {"top": -height, "left": 0};
		  if (_out) {
			_desc.animate(spos, "fast"); //从上面离开
		  } else {
			_desc.css(spos).animate(epos, "fast"); //从上面进入
		  }
		};
	
		rect[right] = function (epos) { //鼠从标右侧进入和离开事件
		  spos = {"left": left,"top": -65};
		  if (_out) {
			_desc.animate(spos, "fast"); //从右侧成离开
		  } else {
			 _desc.css(spos).animate(epos, "fast"); //从右侧进入
		  }
		};
		
		rect[bottom] = function (epos) { //鼠从标下边界进入和离开事件
		  spos = {"top": height, "left": 0};
		  if (_out) {
			_desc.animate(spos, "fast"); //从底部离开
		  } else {
			_desc.css(spos).animate(epos, "fast"); //从底部进入
		  }
		};
	
		rect[_min]({"left":0, "top":0}); // 执行对应边界 进入/离开 的方法
	  });
	});

 //机型搜索框
 $("#p_search_button").click(function() {
	 if ($.trim($("#p_f_v").val()) == '' || $.trim($("#p_f_v").val()) == '请输入估价机型') {
		 //$("#p_f_v").focus();
		 window.location = "http://www.58yiji.com/wymj.html";
	 } else {
		 $("#p_form").submit();
	 }
 });