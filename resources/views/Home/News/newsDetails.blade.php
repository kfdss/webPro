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
                <a href="index.htm" target="_self" class="q_01 on">回收资讯<img src="{{ asset('hom/images/z_02.png') }}" /></a>
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
		        	<div class="newstitle">
					<h1>二手手机交换靠谱吗？</h1>
					<p>
						<span>浏览次数：2339</span>
						<span>发布日期：2016-05-31</span>
						<span>所属分类：<span style="cursor: pointer;" onclick="javascript:history.go(-1)"> 回收资讯</span> </span>
					</p>
				</div>
				<div class="newscenter">
					<div>
						<p>
							<span style="font-size:14px;">&nbsp; &nbsp; &nbsp; 现在手机更新换代如此之快，导致越来越多的二手手机闲置起来。然而就有很多
							<a href="javascript:if(confirm(%27http://www.58yiji.com/  \n\nThis file was not retrieved by Teleport Pro, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.58yiji.com/%27" tppabs="http://www.58yiji.com/" target="_blank">
								<span style="color:#337FE5;">二手手机交易</span>
							</a>平台就涌现了，</span><span style="font-size:14px;"><strong>二手手机交换</strong>是一个比较有吸引力的处理二手手机的方式，但是</span><span style="font-size:14px;">靠谱吗？</span>
						</p>
						<p>
							<span style="font-size:14px;">
							<br />
							</span>
						</p>
						<p style="text-align:center;">
							<img src="e62d5ce2-448e-4e2f-9b77-90f9a5821bf8.png" tppabs="http://imgspace.yjshou.com/resources/userUpLoadImages/e62d5ce2-448e-4e2f-9b77-90f9a5821bf8.png" width="565" height="339" title="二手手机交换靠谱吗？" alt="二手手机交换靠谱吗？" />
						</p>
						<p style="text-align:center;">
							<br />
						</p>
						<p>
							<span style="font-size:14px;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-size:14px;">二手手机交换的网站有很多，比如全球二手网、58同城、赶集网等等。</span>
						</p>
						<p>
							<br />
						</p>
						<p>
							<span style="font-size:14px;">&nbsp; &nbsp; &nbsp; 很多人在这些交换平台与别人联系的时候都会觉得不靠谱，因为根本就不知道对方的是真还是假。有一位想换手机的用户是有这样的疑问的“</span><span style="line-height:1.5;font-size:14px;">我在赶集网上交换手机，对方是htc touch pro1
							我的是学习机(1300买的，8新)+华为t550(8新)。他说没空，我们只有快递。我说一起发，他要我先发，他收到了再发我。因为他说他发了就没手机用了，必须要有一个。他还说有人要用正品ipod
							touch4跟他换。我想换，又不想上当，发，还是不发？</span><span style="font-size:14px;">”</span>
						</p>
						<p>
							<br />
						</p>
						<p>
							<span style="font-size:14px;">&nbsp; &nbsp; &nbsp; 当你遇到这种情况你会发吗？我相信大部分会选择不会发，因为不靠谱，对于这些交易网站人群都是鱼龙混杂的。没有什么保障，平台只提供信息，并不会给你什么保障，如果你交易被坑了只有自己承受了。</span>
						</p>
						<p>
							<br />
						</p>
						<p>
							<span style="font-size:14px;">&nbsp; &nbsp; &nbsp; </span><span style="font-size:14px;">二手手机交换可能会遇到很多不靠谱的，比如1、对方手机寄过来的是坏的，如果不是坏的也有可能是翻新机或者山寨机。2、对方手机的价格不如自己的，这样收到以后可能会失落。3、对方收到自己的手机之后查找自己的一些隐私等等。这些都是大家需要注意的，所以如果选择交换不如进行手机回收会比较安全可靠。</span>
						</p>
					</div>
				</div>
				<div class="newspage">
					<a  class="tonewsdetail" href="3624.html" tppabs="http://www.58yiji.com/news36/3624.html" target="_self" data-default = "/news36/3624.html" data-currNo="-1"   class="prevdate">
						<span>上一篇：</span>旧手机换脸盆、菜刀的秘密骗局
					</a>
					<a class="tonewsdetail" href="3617.html" tppabs="http://www.58yiji.com/news36/3617.html" target="_self" data-default = "/news36/3617.html" data-currNo="1"    class="prevdate">
						<span>下一篇：</span>诺基亚手机回收价格高吗？
					</a>
				</div>
			</div>
		</div>
	</div>
</div>



@endsection












