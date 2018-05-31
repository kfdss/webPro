{{--继承公告模板--}}
@extends('Home.Layouts.index')

{{--替换网页标题--}}
@section('title', '易机网|手机回收,二手机回收,二手手机交易,手机回收网,旧手机回收|手机回收专业平台')

{{--顶部导航栏--}}
@section('global_topbar')
	<div class="global_topbar ">
        <div class="nav-column">
            <div class="nav-left">
                <a href="/" class="logo"><img src="logo.png" alt=""></a>
                <div class="globar_topbar_links">
                    <a href="/" ><span>旧机回收</span></a>
                    <a href="/news" rel="nofollow" target="_self"><span>资讯中心</span></a>
                </div>
            </div>
            <div class="nav-right">
                <ul>
                    <li class="cooperation">
                        <a href="javascript:;" class="nav-r-link">企业合作/服务</a><i class="tringle"></i><i class="line-bar">线</i>
                         <div class="nav-select">
                             <i class="select-tringle"></i>
                             <a href="purchaseCustomer.html" target="_blank" >批量回收/采购</a>
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
                            <a href="javascript:;" class="last-child erweima"><img src="code_03.jpg" alt="" width="130" height="130"><p>易机网移动端</p></a>
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
        
    </div>

@endsection


{{--主体导航栏--}}
@section('main')
	<div class="container">
		<div class="mains">
			<div class="list_nav w1100">
				<a href="#" target="_self">首页 </a>
				<span>&gt;</span>
				<a href="#" target="_self">新闻动态</a>
				<span>&gt;</span>
				<a href="#">回收资讯</a>
			</div>
		</div>
		<div class="w1100 center">
			<div class="centerleft">
				<h3><span>新闻动态</span></h3>
				<h3>
					<a href="/news" target="_self" class="q_01 on">回收资讯<img src="{{ asset('hom/images/z_02.png') }}" /></a>
				</h3>
				<h3>
					<a href="index-1.htm" target="_self" class="q_08">手机资讯<img src="{{ asset('hom/images/z_02.png') }}" /></a>
				</h3>
				<h3>
					<a href="index-2.htm" target="_self" class="q_07">易机资讯<img src="{{ asset('hom/images/z_02.png') }}" /></a>
				</h3>
				<h3><span>帮助中心</span></h3>
				<h3>
					<a href="1-1.html" rel="nofollow" target="_self" class="q_03 ">
						常见问题
						<img src="{{ asset('hom/images/z_02.png') }}" />
					</a>
				</h3>
				<h3>
					<a href="2-1.html" rel="nofollow" target="_self" class="q_05 ">
						服务条款
						<img src="{{ asset('hom/images/z_02.png') }}" />
					</a>
				</h3>
				<h3>
					<a href="3-1.html" target="_self" class="q_01 ">易机课堂<img src="{{ asset('hom/images/z_02.png') }}" /></a>
				</h3>
				<!--<h3>
		        <a href="/helpCenter/4.html" rel="nofollow" target="_self" class="q_06 ">
		        	担保交易
		        	<img src="/resources/v2/images/z_02.png"/>
		        </a>
	        </h3>-->
				<h3><span>关于我们</span></h3>
					<h3>
					<a href="about_yjw.html" rel="nofollow" class="q_02 " target="_self">关于易机网<img src="{{ asset('hom/images/z_02.png') }}" /></a>
				</h3>
				<h3>
					<a href="12.html" rel="nofollow" class="q_04 " target="_self">联系我们<img src="{{ asset('hom/images/z_02.png') }}" /></a>
				</h3>
					<h3>
					<a href="13.html" rel="nofollow" class="q_07 " target="_self">加入我们<img src="{{ asset('hom/images/z_02.png') }}" /></a>
				</h3>
			</div>
			<div class="centeright pt20">
				<div class="news">
					<div>
						<ul>
							@foreach($detail as $do)
							<li>
								<a class="tonewsdetail" href="/news/details/{{$do['id']}}" target="_self" data-default="/news36/3641.html" data-currNo="{{$do['id']}}" data-offset="0"><strong>{{$do['title']}}</strong><span>{{$do['created_at']}}</span></a>
							</li>
							@endforeach
							{{--<li>
								<a class="tonewsdetail" href="3639.html" target="_self" data-default="/news36/3639.html" data-currNo="1" data-offset="0"><strong>换手机号不如换手机</strong><span>2016-07-06</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3632.html" target="_self" data-default="/news36/3632.html" data-currNo="2" data-offset="0"><strong>回收旧手机的价值在哪里，流向何处</strong><span>2016-06-17</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3629.html" target="_self" data-default="/news36/3629.html" data-currNo="3" data-offset="0"><strong>你所不知道的旧手机危害</strong><span>2016-06-15</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3624.html" target="_self" data-default="/news36/3624.html" data-currNo="4" data-offset="0"><strong>旧手机换脸盆、菜刀的秘密骗局</strong><span>2016-06-08</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3622.html" target="_self" data-default="/news36/3622.html" data-currNo="5" data-offset="0"><strong>二手手机交换靠谱吗？</strong><span>2016-05-31</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3617.html" target="_self" data-default="/news36/3617.html" data-currNo="6" data-offset="0"><strong>诺基亚手机回收价格高吗？</strong><span>2016-05-30</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3616.html" target="_self" data-default="/news36/3616.html" data-currNo="7" data-offset="0"><strong>摩托罗拉手机回收多少钱？</strong><span>2016-05-30</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3611.html" target="_self" data-default="/news36/3611.html" data-currNo="8" data-offset="0"><strong>手机主板回收有什么用？</strong><span>2016-05-27</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3610.html" target="_self" data-default="/news36/3610.html" data-currNo="9" data-offset="0"><strong>oppo手机回收价格多少？</strong><span>2016-05-27</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3605.html" target="_self" data-default="/news36/3605.html" data-currNo="10" data-offset="0"><strong>上门回收手机安全吗？</strong><span>2016-05-26</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3604.html" target="_self" data-default="/news36/3604.html" data-currNo="11" data-offset="0"><strong>二手手机回收价格表</strong><span>2016-05-26</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3602.html" target="_self" data-default="/news36/3602.html" data-currNo="12" data-offset="0"><strong>广州二手手机最大的卖场在哪？</strong><span>2016-05-25</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3598.html" target="_self" data-default="/news36/3598.html" data-currNo="13" data-offset="0"><strong>上海手机回收哪里好？</strong><span>2016-05-25</span></a>
							</li>
							<li>
								<a class="tonewsdetail" href="3592.html" target="_self" data-default="/news36/3592.html" data-currNo="14" data-offset="0"><strong>回收手机芯片需要注意什么？</strong><span>2016-05-24</span></a>
							</li>--}}
						</ul>
					</div>
					<div class="page page-public page-view clearfix" id="pagerDiv">
						<div class="page-wrap page-item" id="page-ui">
							<div class="page-num clearfix">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>




@endsection












