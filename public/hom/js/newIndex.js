(function($){
	//封装，只有左右箭头和小圆点的轮播图
	$.fn.one_lunbo=function(){

		var oldI = 0,
			container = $(this),
			pic_in = container.find('.process_container'),
			process_info = pic_in.find('.process_info'),
			pic_len = process_info.length,
			pre_next = container.find('.pre_next'),
			circle_in = container.find('.tabs');

		if( pic_len == 1 ){
			
			//只有一张图，不要左右箭头
			pre_next.remove();
		}

		//动态设置容器宽度
		pic_in.width( pic_len * container.width() );

		//左右箭头移入移出
		process_info.mouseover(function(){
			container.find('.pre_next').fadeIn('slow');
		});
		container.mouseleave(function(){
			container.find('.pre_next').fadeOut('slow');
		});

		//点击小圆点事件
		circle_in.find('li').click(function(){
			var _this = $(this);
			var newI = $(this).index();

			if( oldI == newI ){
				return;
			}

			changeLeft( newI );

			oldI = newI;

		});

		//点击左右箭头事件
		pre_next.find('.pre').click(function(){
			oldI--;

			if( oldI < 0 ){
				oldI = pic_len - 1;
			}

			changeLeft( oldI );
		});

		pre_next.find('.next').click(function(){
			oldI++;

			if( oldI == pic_len ){
				oldI = 0;
			}

			changeLeft( oldI );
		});

		//改变容器绝对定位的Left值和小圆点的active
		function changeLeft( i ){
			circle_in.find('li').eq(i).addClass('current').siblings().removeClass('current');
			// pic_in.css( 'left' , - i * container.width() );
			pic_in.animate( {'left' : - i * container.width()},500 );
		}
	};

	/* 选项卡插件
	** @params the_tabs 所要切换的选项卡，class，传入不需要.class，而是直接的class。
	** @params active   被点击的内容的class，同上。
	** @params noactive   未被点击的内容的class以及点击了的去class，同上。
	*/
	$.fn.Tabs = function(the_tabs,active,noactive){
		var _this = $(this),
			i = _this.index(),
			_parent = _this.parent().parent(),
			_tab = _parent.find('.'+the_tabs);

		if(noactive){
			_this.addClass(active).removeClass(noactive).siblings().removeClass(active).addClass(noactive);
		}else{
			_this.addClass(active).siblings().removeClass(active);
		}

		_tab.hide();
		_tab.eq(i).show();
	};


	//自动轮播，自适应宽度，无左右箭头的轮播图
	$.fn.bigCarousel = function(){
		var i = 0,
			container = $(this),
			pic_in = container.find('.carousel_img'),
			contain_img = pic_in.find('.contain_img');
			pic_len = contain_img.length,
			circle_in = container.find('.tabs');

		if( pic_len == 1 ){
			
			//只有一张图，不要左右箭头
			return;
		}

		// //动态设置容器宽度
		pic_in.width( pic_len * container.width() );
		// //动态设置各个图片的宽度
		contain_img.width( pic_in.width()/pic_len );

		var timer = setInterval( changeLeft , 4000 );

		function changeLeft(){
			i++;
			if( i == pic_len ){
				i = 0 ;
			}
			//动态设置容器宽度
			pic_in.width( pic_len * container.width() );
			//动态设置各个图片的宽度
			contain_img.width( pic_in.width()/pic_len );
			circle_in.find('li').eq(i).addClass('active').siblings().removeClass('active');
			pic_in.animate( { 'left' : -container.width()*i },1000 );
		};

		circle_in.on('click','li',function(){
			var _this = $(this);
			var index = _this.index();
			if( i != index ){
				clearInterval( timer );
				timer = setInterval( changeLeft , 4000 );
				i = index;
				circle_in.find('li').eq(i).addClass('active').siblings().removeClass('active');
				pic_in.animate( { 'left' : -container.width()*i },1000 );
			};
		});		

		$(window).resize(function(){
			clearInterval( timer );
			//动态设置容器宽度
			pic_in.width( pic_len * container.width() );
			//动态设置各个图片的宽度
			contain_img.width( pic_in.width()/pic_len );
			pic_in.css('left',-container.width()*i)
			timer = setInterval( changeLeft , 4000 );
		});

	};

})(jQuery);