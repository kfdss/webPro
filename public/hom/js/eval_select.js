/**
 * 回收估价选择属性页JS。
 */
$(function () {
	// 移除没有选项组的分类
	$('.left-inner').each(function() {
		if($(this).find('.first-choose div').length == 0) {
			$(this).remove();
		}
	});
	// 显示第一组
	$('.left-inner:eq(0)').removeClass('hide');
	$('.basic-info:eq(0)').removeClass('hide').find('.version').addClass('active');
	// 只有一个多选组时，直接显示估价按钮
	if($('.basic-info').length == 1 && $('.basic-info').hasClass('other-question-t')) {
		$('#btnEval').show();
	}
	
	/* 图表 */
	var xArr = xValue.split(",");
	var yArr = yValue.split(",");
	var chart = $('#myfirstchart').highcharts({
		chart: {
			type: 'line'
		},
		credits:{
			enabled:false,
		},
		title:{
			text:''
		},
		xAxis: {
			categories: [xArr[0],xArr[1],xArr[2]]
		},
		yAxis: {
			min:min,
			max:max,
			//tickInterval : 2000,
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}],
			title: {
				enabled: false
			},
			labels: {
				formatter: function() {
					return '¥' + this.value;
				}
			}
		},
		exporting:
		{
			enabled: false
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true
				},
				enableMouseTracking: false
			}
		},
		series:
			[{
				name: '回收均价',
				type: 'area',
				data: [parseInt(yArr[0]),parseInt(yArr[1]),parseInt(yArr[2])],
				dataLabels: {
					enabled:true
				}
			}]
	});

	// 点击选项组时
	$('.version').click(function () {
		$('.version').removeClass('active');
		$(this).addClass('active');
		$('.basic-info-choose').addClass('hide');
		$(this).parent().find('.basic-info-choose').removeClass('hide');
		// 展开其它已显示分类的多选组
		var idx = $(this).parents('.left-inner').index();
		$('.left-inner').each(function() {
			var $this = $(this);
			if($this.index() != idx && !$this.hasClass('hide')) {
				if($this.find('.version.active').length == 0) {
					var $multiGroup = $this.find('.basic-info.other-question-t:eq(0)');
					if($multiGroup.length && !$multiGroup.hasClass('hide')) {
						$multiGroup.find('.version').addClass('active');
						$multiGroup.find('.basic-info-choose').removeClass('hide');
					}
				}
			}
		});
    });

	// 点击描述项时
	$('.intro').click(function () {
		if($(this).parent().hasClass('other-question')) { // 多选组
			$(this).toggleClass('multiple-t');
			$(this).parents('.basic-info').find('.version').addClass('selected'); // 标识已选择
			// 刷新描述
			var desc = '';
			$(this).parent().find('.intro.multiple-t').each(function() {
				if(desc) {
					desc += ',';
				}
				desc += $(this).find('p').text();
			});
			var $desc = $(this).parents('.basic-info:eq(0)').find('.sel-value').text(desc).removeClass('hide');
			// 处理多选组描述信息位置
			if($desc.height() >= Number($desc.css('font-size').replace(/\D/g,'')) * 2) { // 文本超过两行时，top设为0
				$desc.css('top', 0);
			} else { // 否则恢复原top值
				var oriTop = $('.single-grp .sel-value').eq(0).css('top');
				if(oriTop) {
					$desc.css('top', oriTop);
				}
			}
		} else { // 单选组
			var $group = $(this).parents('.basic-info').find('.version'); // 选项组
			var $allPropLi = $(this).parents('.first-choose').children('.basic-info-choose').find('li'); // 同分类所有选项组的描述项
			// 激活点击的描述项，并取消其它描述项的激活状态
			$(this).addClass('active');
			$(this).siblings('.intro').removeClass('active');

			// 更新用户选择的文本
			var textWord = $(this).find('p').text();
			$group.find('.sel-value').text(textWord).removeClass('hide');
			$group.addClass('selected'); // 标识已选择

			// 取消当前选项组的激活状态并隐藏其描述项
			$(this).parent().addClass('hide');
			$group.removeClass('active').siblings('.version').removeClass('active');
			
			// 切换显示下一个选项组
			showNextGroup($group.parent(), true);

			// 必选项均已选择时，显示“立即估价”
			if($('.version.single-grp').length == $('.version.single-grp.selected').length) {
				$('#btnEval').show();
				$(this).parents('.left').addClass('marg-btm');
			}
		};
	});
	
	/**
	 * 显示下一个选项组。
	 * @param $currGrp 当前选项组
	 * @param showProp 是否展开描述项，true/false
	 */
	function showNextGroup($currGrp, showProp) {
		// 切换显示下一个选项组
		var $nextCate; // 下一个展开选项组所属分类
		var $nextGroup; // 下一个展开选项组
		var currCateIdx = $currGrp.parents('.left-inner:eq(0)').index(); // 当前分类索引
		var currGrpIdx = $currGrp.index();// 当前选项组索引
		// 找到下一个没有选择的选项组和所属分类
		$('.version').each(function() {
			// 同一选项组的跳过，避免切换到多选组后要显示下一单选组时引起栈溢出的问题
			if(!$(this).hasClass('selected') 
					&& ($(this).parents('.left-inner:eq(0)').index() != currCateIdx || $(this).parent().index() != currGrpIdx)) {
				$nextGroup = $(this).parent();
				$nextCate = $nextGroup.parents('.left-inner:eq(0)');
				return false;
			}
		});
		// 显示并展开下一个分类和选项组
		if($nextCate) {
			$nextCate.removeClass('hide');
			$nextGroup.removeClass('hide');
			if(showProp) {
				$nextGroup.find('.version').addClass('active');
				$nextGroup.find('.basic-info-choose').removeClass('hide');
			}
			// 滚动到上一个选项组
			var $allGroups = $('.basic-info');
			currGrpIdx = $allGroups.index($nextGroup);
			if(currGrpIdx > 0) {
				var $preGroup = $allGroups.eq(currGrpIdx - 1);
				$(document.body).animate({scrollTop:$preGroup.offset().top});
			}
		}
		// 切换分类或没有下一个分类时，默认展开多选组
		if(!$nextCate || $nextCate.index() != $currGrp.parents('.left-inner:eq(0)').index()) {
			var $multiGroup = $currGrp.parents('.first-choose').children('.basic-info.other-question-t:eq(0)');
			if($multiGroup.length) {
				$multiGroup.removeClass('hide').find('.version').addClass('active');
				$multiGroup.find('.basic-info-choose').removeClass('hide');
			}
		}
		
		// 切换后的选项组为多选组时，显示下一个选项组但不展开，直到为单选组（因点击多选组描述项时不触发切换组）
		if($nextGroup && $nextGroup.find('.version').hasClass('multi-grp')) {
			showNextGroup($nextGroup, false);
		}
	}
	
	// 点击“立即估价”
	$('#btnEval').click(function() {
		if($('.version.single-grp').length != $('.version.single-grp.selected').length) {
			alert('还有估价属性没有选择哦');
			return;
		}
		var options = '';
		$('div.intro.active,div.intro.multiple-t').each(function() {
			options += $(this).data('id') + ',';
		});
		$('#formEval input[name="subOptions"]').val(options.substr(0, options.length-1));
		$('#formEval').submit();
	});
});