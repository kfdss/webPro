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
        <news></news>
	</div>




@endsection












