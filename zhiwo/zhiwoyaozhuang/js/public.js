$(function(){
	$(".top").find(".WeChat_shop").css("width","93px").css("background","#fff");
	$(".top").find(".my_alveole").css("width","94px").css("background","#fff");
	$(".top").find(".client_serve").css("width","93px").css("background","#fff");
	//alert($(".top .top_right").find("li").eq(0).html());
	//下拉列表
	$(".top .top_right").find(".active_list").on("mouseenter",function(){
		//$(".none_style").siblings().css("background","#fff");
		$(this).find("span").attr("class","iconfont icon-xiangxia");
		$(this).css("background","#fff");
		$(this).find("ul").slideDown();
	})
	//上拉
	$(".top .top_right").find(".active_list").on("mouseleave",function(){
		$(this).find("span").attr("class","iconfont icon-down-trangle");
		$(this).css("background","#F2F2F2");
		$(this).find("ul").slideUp();
	})
	
	$(".play").css("height","350").css("width",$(window).width());

	//下拉购物车
	$(".header .header_right").mouseenter(function(){
		$(this).find("i").attr("class","iconfont icon-xiangxia");
   		$(this).find(".header_shopgoods").slideDown();
   	 });
	$(".header .header_right").mouseleave(function(){
			$(this).find("i").attr("class","iconfont icon-down-trangle");
	   		$(this).find(".header_shopgoods").slideUp();
	 	 });
	 	 
	 	 
	 //商城下拉列表
	 	$(".nav .nav_list").on("mouseenter",function(){
		//$(".none_style").siblings().css("background","#fff");
		$(this).find("span").attr("class","iconfont icon-xiangxia");
		$(this).find(".nav_store").slideDown();
	})
	//上拉
	$(".nav .nav_list").on("mouseleave",function(){
		$(this).find("span").attr("class","iconfont icon-down-trangle");
		$(this).find(".nav_store").slideUp();
	})
	 
	 //右侧浮动栏
	$("#sidebar_wechat").mouseenter(function(){
		$(this).find(".sidebar_tooltip").css("display","block")
	}).mouseleave(function(){
		$(this).find(".sidebar_tooltip").css("display","none")
	})
	
	$("#sidebar").find("#sidebar_login,#sidebar_collect,#sidebar_foot,#sidebar_servers").on("mouseenter",function(){
		$(this).find(".sidebar_tooltip").css({"left":"-150px","display":"block"}).animate({
			left:-103,
			opacity:100
		});
	}).on("mouseleave",function(){
		$(this).find(".sidebar_tooltip").animate({
			left:-150,
			opacity:0
		});
		$(this).find(".sidebar_tooltip").css({"left":"100px","display":"none"});
	})
	

	
	
	
})