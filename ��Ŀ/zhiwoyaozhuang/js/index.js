$(function(){
	$(".top").find(".WeChat_shop").css("width","93px").css("background","#fff");
	$(".top").find(".my_alveole").css("width","94px").css("background","#fff");
	$(".top").find(".client_serve").css("width","93px").css("background","#fff");
	$(".play").css("height","350").css("width",$(window).width());
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
	 
	 //右侧导航栏
	/*  $(".nav .nav_right").find("li").css("left",34 * $(this).index());
		 $(".nav .nav_right").find("li").mouseenter(function(){
			alert($(this).index());
		})*/
/*	 $(".nav .nav_right").find("li").mouseenter(function(){
	 	$(this).stop().animate({
	 		width:100,
	 		marginLeft:-100,
	 	},200)
		$(this).css("overflow","hidden");
	 }).mouseleave(function(){
	 	$(this).stop().animate({
	 		width:0,
	 		marginLeft:0
	 	})
	
	 })*/

			//banner图切换
       		var aBtns = $("#play").find("ol").find("li");
			var oUl = $("#play").find("ul");
			var aLi = oUl.find("li");

			var iNow = 0; //代表当前显示的图片的下标
			var timer = null;
			aLi.css("width",$(window).width());
			aBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			function tab(){
				//当点击的时候将所有的按钮的class取消掉
				aBtns.attr("class", "");
				aBtns.eq(iNow).attr("class", "active");
			
				aLi.eq(iNow).stop().animate({
					height:350,
					left:0,
					opacity:1
				},1000,function(){
					$(this).siblings().css({"opacity":"0","height":"400px"});
					if(iNow == aLi.size()){
						iNow = 0;
					}
				})
			}

			function timerInner(){
				tab();
				iNow++;

			}

			timer = setInterval(timerInner, 3000);

	


//选项卡
	$(function(){
			 $(".brand_b_nav").find("li").mouseenter(function(){
			 	$(".brand_b_nav").find("li").attr("class","")
			 	$(".brand_bc_page").css("display","none");
			 	$(this).attr("class","bbn_current");
			 	$(".brand_bc_page").eq($(this).index()).css("display","block");
			 })
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
	
	$(window).scroll(function(){
		var sideStrolltop = $(".side_nav").offset().top;
		if(sideStrolltop > 1000){
			$(".side_nav").show("fade",500);
			
		}else{
			$(".side_nav").hide("fade",500);
		}
	})
	
	
})