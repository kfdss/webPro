<!DOCTYPE html>
<!--[if lt IE 7]> <html class="lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--><html lang="en"><!--<![endif]-->
<head>
<meta charset="utf-8">

<!-- Viewport Metatag -->
<meta name="viewport" content="width=device-width,initial-scale=1.0">

<!-- Plugin Stylesheets first to ease overrides -->
<link rel="stylesheet" type="text/css" href="/adm/plugins/colorpicker/colorpicker.css" media="screen">
<link rel="stylesheet" type="text/css" href="/adm/custom-plugins/wizard/wizard.css" media="screen">

<!-- Required Stylesheets -->
<link rel="stylesheet" type="text/css" href="/adm/bootstrap/css/bootstrap.min.css" media="screen">
<link rel="stylesheet" type="text/css" href="/adm/css/fonts/ptsans/stylesheet.css" media="screen">
<link rel="stylesheet" type="text/css" href="/adm/css/fonts/icomoon/style.css" media="screen">

<link rel="stylesheet" type="text/css" href="/adm/css/mws-style.css" media="screen">
<link rel="stylesheet" type="text/css" href="/adm/css/icons/icol16.css" media="screen">
<link rel="stylesheet" type="text/css" href="/adm/css/icons/icol32.css" media="screen">

<!-- Demo Stylesheet -->
<link rel="stylesheet" type="text/css" href="/adm/css/demo.css" media="screen">

<!-- jQuery-UI Stylesheet -->
<link rel="stylesheet" type="text/css" href="/adm/jui/css/jquery.ui.all.css" media="screen">
<link rel="stylesheet" type="text/css" href="/adm/jui/jquery-ui.custom.css" media="screen">

<!-- Theme Stylesheet -->
<link rel="stylesheet" type="text/css" href="/adm/css/mws-theme.css" media="screen">
<link rel="stylesheet" type="text/css" href="/adm/css/themer.css" media="screen">
<link rel="stylesheet" type="text/css" href="/adm/css/my.css"/>

<title>@yield('title')</title>

</head>

<body>

	<!-- Themer (Remove if not needed) -->  
	<!--<div id="mws-themer">
        <div id="mws-themer-content">
        	<div id="mws-themer-ribbon"></div>
            <div id="mws-themer-toggle">
                <i class="icon-bended-arrow-left"></i> 
                <i class="icon-bended-arrow-right"></i>
            </div>
        	<div id="mws-theme-presets-container" class="mws-themer-section">
	        	<label for="mws-theme-presets">Color Presets</label>
            </div>
            <div class="mws-themer-separator"></div>
        	<div id="mws-theme-pattern-container" class="mws-themer-section">
	        	<label for="mws-theme-patterns">Background</label>
            </div>
            <div class="mws-themer-separator"></div>
            <div class="mws-themer-section">
                <ul>
                    <li class="clearfix"><span>Base Color</span> <div id="mws-base-cp" class="mws-cp-trigger"></div></li>
                    <li class="clearfix"><span>Highlight Color</span> <div id="mws-highlight-cp" class="mws-cp-trigger"></div></li>
                    <li class="clearfix"><span>Text Color</span> <div id="mws-text-cp" class="mws-cp-trigger"></div></li>
                    <li class="clearfix"><span>Text Glow Color</span> <div id="mws-textglow-cp" class="mws-cp-trigger"></div></li>
                    <li class="clearfix"><span>Text Glow Opacity</span> <div id="mws-textglow-op"></div></li>
                </ul>
            </div>
            <div class="mws-themer-separator"></div>
            <div class="mws-themer-section">
	            <button class="btn btn-danger small" id="mws-themer-getcss">Get CSS</button>
            </div>
        </div>
        <div id="mws-themer-css-dialog">
        	<form class="mws-form">
            	<div class="mws-form-row">
		        	<div class="mws-form-item">
                    	<textarea cols="auto" rows="auto" readonly="readonly"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </div>-->
    <!-- Themer End -->

	<!-- Header -->
	<div id="mws-header" class="clearfix">
    
    	<!-- Logo Container -->
    	<div id="mws-logo-container">
        
        	<!-- Logo Wrapper, images put within this wrapper will always be vertically centered -->
        	<div id="mws-logo-wrap">
            	<img src="/adm/images/mws-logo.png" alt="mws admin">
			</div>
        </div>
        
        <!-- User Tools (notifications, logout, profile, change password) -->
        <div id="mws-user-tools" class="clearfix">
        
        	<!-- Notifications -->
        	<div id="mws-user-notif" class="mws-dropdown-menu">
            	<a href="#" data-toggle="dropdown" class="mws-dropdown-trigger"><i class="icon-exclamation-sign"></i></a>
                
                <!-- Unread notification count -->
                <span class="mws-dropdown-notif">35</span>
                
                <!-- Notifications dropdown -->
                <div class="mws-dropdown-box">
                	<div class="mws-dropdown-content">
                        <ul class="mws-notifications">
                        	<li class="read">
                            	<a href="#">
                                    <span class="message">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                                    </span>
                                    <span class="time">
                                        January 21, 2012
                                    </span>
                                </a>
                            </li>
                        	<li class="read">
                            	<a href="#">
                                    <span class="message">
                                        Lorem ipsum dolor sit amet
                                    </span>
                                    <span class="time">
                                        January 21, 2012
                                    </span>
                                </a>
                            </li>
                        	<li class="unread">
                            	<a href="#">
                                    <span class="message">
                                        Lorem ipsum dolor sit amet
                                    </span>
                                    <span class="time">
                                        January 21, 2012
                                    </span>
                                </a>
                            </li>
                        	<li class="unread">
                            	<a href="#">
                                    <span class="message">
                                        Lorem ipsum dolor sit amet
                                    </span>
                                    <span class="time">
                                        January 21, 2012
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div class="mws-dropdown-viewall">
	                        <a href="#">View All Notifications</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Messages -->
            <div id="mws-user-message" class="mws-dropdown-menu">
            	<a href="#" data-toggle="dropdown" class="mws-dropdown-trigger"><i class="icon-envelope"></i></a>
                
                <!-- Unred messages count -->
                <span class="mws-dropdown-notif">35</span>
                
                <!-- Messages dropdown -->
                <div class="mws-dropdown-box">
                	<div class="mws-dropdown-content">
                        <ul class="mws-messages">
                        	<li class="read">
                            	<a href="#">
                                    <span class="sender">John Doe</span>
                                    <span class="message">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                                    </span>
                                    <span class="time">
                                        January 21, 2012
                                    </span>
                                </a>
                            </li>
                        	<li class="read">
                            	<a href="#">
                                    <span class="sender">John Doe</span>
                                    <span class="message">
                                        Lorem ipsum dolor sit amet
                                    </span>
                                    <span class="time">
                                        January 21, 2012
                                    </span>
                                </a>
                            </li>
                        	<li class="unread">
                            	<a href="#">
                                    <span class="sender">John Doe</span>
                                    <span class="message">
                                        Lorem ipsum dolor sit amet
                                    </span>
                                    <span class="time">
                                        January 21, 2012
                                    </span>
                                </a>
                            </li>
                        	<li class="unread">
                            	<a href="#">
                                    <span class="sender">John Doe</span>
                                    <span class="message">
                                        Lorem ipsum dolor sit amet
                                    </span>
                                    <span class="time">
                                        January 21, 2012
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div class="mws-dropdown-viewall">
	                        <a href="#">View All Messages</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- User Information and functions section -->
            <div id="mws-user-info" class="mws-inset">
            
            	<!-- User Photo -->
            	<div id="mws-user-photo">
                	<img src="/adm/example/profile.jpg" alt="User Photo">
                </div>
                
                <!-- Username and Functions -->
                <div id="mws-user-functions">
                    <div id="mws-username">
                        Hello, John Doe
                    </div>
                    <ul>
                    	<li><a href="#">Profile</a></li>
                        <li><a href="#">Change Password</a></li>
                        <li><a href="index.html">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Start Main Wrapper -->
    <div id="mws-wrapper">
    
    	<!-- Necessary markup, do not remove -->
		<div id="mws-sidebar-stitch"></div>
		<div id="mws-sidebar-bg"></div>
        
        <!-- Sidebar Wrapper -->
        <div id="mws-sidebar">
        
            <!-- Hidden Nav Collapse Button -->
            <div id="mws-nav-collapse">
                <span></span>
                <span></span>
                <span></span>
            </div>
            
        	<!-- Searchbox -->
        	<div id="mws-searchbox" class="mws-inset">
            	<form action="typography.html">
                	<input type="text" class="mws-search-input" placeholder="Search...">
                    <button type="submit" class="mws-search-submit"><i class="icon-search"></i></button>
                </form>
            </div>
            
            <!-- Main Navigation -->
            <div id="mws-navigation">
                <ul>
                    <li class="@yield('active1')"><a href="/admin/index"><i class="icon-home"></i> 仪表盘</a></li>
                    <li class="@yield('active2')">
                    	<a href="##"><i class="icon-graph"></i> 用户模块</a>
                    	<ul>
                            <li><a href="/admin/users">浏览用户</a></li>
                            <li><a href="/admin/users/create">添加用户</a></li>
                            <li><a href="##">回收站</a></li>
                        </ul>
                    </li>
                    <li class="@yield('active3')">
                    	<a href="##"><i class="icon-calendar"></i> 分类模块</a>
                    	<ul>
                            <li><a href="/admin/cates">浏览分类</a></li>
                            <li><a href="/admin/cates/create">添加分类</a></li>
                            <li><a href="##">回收站</a></li>
                        </ul>
                    </li>
                    <li class="@yield('active4')">
                    	<a href="##"><i class="icon-folder-closed"></i> 文章模块</a>
                    	<ul>
                            <li><a href="/admin/articles">浏览文章</a></li>
                            <li><a href="/admin/articles/create">添加文章</a></li>
                            <li><a href="##">回收站</a></li>
                        </ul>
                    </li>
                    <li class="@yield('active5')">
                    	<a href="##"><i class="icon-table"></i> 商品管理</a>
                    	<ul>
                            <li><a href="/admin/goods">浏览商品</a></li>
                            <li><a href="/admin/goods/create">添加商品</a></li>
                            <li><a href="##">回收站</a></li>
                        </ul>
                    </li>
                    <li class="@yield('active6')">
                        <a href="#"><i class="icon-list"></i> 品牌管理</a>
                        <!--<ul>
                            <li><a href="##">Layouts</a></li>
                            <li><a href="##">Elements</a></li>
                            <li><a href="##">Wizard</a></li>
                        </ul>-->
                    </li>
                    <li class="@yield('active7')"><a href="widgets.html"><i class="icon-cogs"></i> 物流管理</a></li>
                    <li class="@yield('active8')"><a href="typography.html"><i class="icon-font"></i> 仓库管理</a></li>
                    <li class="@yield('active9')"><a href="grids.html"><i class="icon-th"></i> 友情链接</a></li>
                    <li class="@yield('active10')"><a href="gallery.html"><i class="icon-pictures"></i> 网站配置</a></li>
                    <li class="@yield('active11')"><a href="error.html"><i class="icon-warning-sign"></i> 退出系统</a></li>
                    <li>
                        <a href="icons.html">
                            <i class="icon-pacman"></i> 
                            Icons <span class="mws-nav-tooltip">2000+</span>
                        </a>
                    </li>
                </ul>
            </div>         
        </div>
        <!-- Main Container Start -->
        <div id="mws-container" class="clearfix">
        <!--如果添加成功-->
    	@if (session('success'))
    	<div class="mws-form-message success">
        	{{session('success')}}
        </div>
        @endif
        <!--如果添加失败-->
    	@if (session('error'))
    	<div class="mws-form-message error">
        	{{session('error')}}
        </div>
        @endif
        @section('mws-container')
		@show
        </div>
        <!-- Main Container End -->
        
    </div>

    <!-- JavaScript Plugins -->
    <script src="/adm/js/libs/jquery-1.8.3.min.js"></script>
    <script src="/adm/js/libs/jquery.mousewheel.min.js"></script>
    <script src="/adm/js/libs/jquery.placeholder.min.js"></script>
    <script src="/adm/custom-plugins/fileinput.js"></script>
    
    <!-- jQuery-UI Dependent Scripts -->
    <script src="/adm/jui/js/jquery-ui-1.9.2.min.js"></script>
    <script src="/adm/jui/jquery-ui.custom.min.js"></script>
    <script src="/adm/jui/js/jquery.ui.touch-punch.js"></script>

    <!-- Plugin Scripts -->
    <script src="/adm/plugins/datatables/jquery.dataTables.min.js"></script>
    <!--[if lt IE 9]>
    <script src="js/libs/excanvas.min.js"></script>
    <![endif]-->
    <script src="/adm/plugins/flot/jquery.flot.min.js"></script>
    <script src="/adm/plugins/flot/plugins/jquery.flot.tooltip.min.js"></script>
    <script src="/adm/plugins/flot/plugins/jquery.flot.pie.min.js"></script>
    <script src="/adm/plugins/flot/plugins/jquery.flot.stack.min.js"></script>
    <script src="/adm/plugins/flot/plugins/jquery.flot.resize.min.js"></script>
    <script src="/adm/plugins/colorpicker/colorpicker-min.js"></script>
    <script src="/adm/plugins/validate/jquery.validate-min.js"></script>
    <script src="/adm/custom-plugins/wizard/wizard.min.js"></script>

    <!-- Core Script -->
    <script src="/adm/bootstrap/js/bootstrap.min.js"></script>
    <script src="/adm/js/core/mws.js"></script>

    <!-- Themer Script (Remove if not needed) -->
    <script src="/adm/js/core/themer.js"></script>

    <!-- Demo Scripts (remove if not needed) -->
    <script src="/adm/js/demo/demo.dashboard.js"></script>

</body>
</html>