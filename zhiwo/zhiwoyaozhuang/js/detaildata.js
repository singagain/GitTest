$(function(){
	//商品详情#######################
	$.ajax({
		type:"get",
		url:"json/detail.json",
		success:function(data){
			var nows = '<p class="pos_link"><a href="#">商城首页</a></p><i class="iconfont icon-right-trangle"></i><p class="pos_link"><a href="#">' + data[0].brand + '</a></p><i class="iconfont icon-right-trangle"></i><p class="pos_link"><a href="#">' + data[0].list + '</a></p><i class="iconfont icon-right-trangle"></i><p class="pos_close"><span>' + data[0].title + '</span></p>';
			var effect = '';
			var effect_arr = data[0].effect.split(" ");
			
			for(var i = 0 ; i < effect_arr.length ; i++){
				effect += '<li><i></i><span>' + effect_arr[i] + '</span></li>'
			}
			
			var singlename = '<p><span>今日特卖</span>' + data[0].introduce +'</p>'
			var brandimg = '<a href="#" target="_blank"><img src="' + data[0].brandimg + '"></a>';
			var goods = '<div class="groupdetail_single_img"><img src="' + data[0].img + '"></div><div class="groupdetail_single_intro"><div class="groupdetail_timer sale_tip_time" id="timer" diff="207464" end-date="2018-1-1"></div><div class="groupdetail_gobuy "><p class="groupdetail_nowprice"><i>￥</i><span>' + data[0].price + '</span></p><p class="groupdetail_gobuybtn"><a id="btn_buy" href="#" class="put-cart" target="_blank">立即抢购</a></p></div><div class="groupdetail_single_introcont"><div class="groupdetail_price"></div><div class="groupdetail_totleamount clearfix"><div class="ui-entrance" style="float:left;margin-left:20px;"></div><p class="grounpdetail_buypeaple"><i>' + data[0].sales + '</i><span>人已购买</span></p><p class="grounpdetail_nobuypeaple"><i>' + data[0].wellsales +'</i><span>人即将购买</span></p></div><div class="dsingle_introbuy_effect"><span class="dsingle_introbuy_effecttip">功效</span><ul class="clearfix">' + effect + '</ul></div></div></div>';
			var buyinfo = '<p class="detail_buyinfo_price"><i>￥</i><span>' + data[0].price + '</span></p><p class="detail_buyinfo_btn"><a id="btn_buy" href="#" class="put-cart" target="_blank">加入购物车</a></p>';
			var parameteis_arr = data[0].parameteis.split("/");
			var parameteis = '<table><tbody><tr><td class="dpp_list_title">原 产 地:</td><td class="dpp_list_cont">' + parameteis_arr[0] +'</td></tr><td class="dpp_list_title">规  格:</td><td class="dpp_list_cont">' + parameteis_arr[1] + '</td></tr><td class="dpp_list_title">香  味:</td><td class="dpp_list_cont">' + parameteis_arr[2] + '</td></tr><td class="dpp_list_title">质  地:</td><td class="dpp_list_cont">' + parameteis_arr[3] + '</td></tr><td class="dpp_list_title">生产日期:</td><td class="dpp_list_cont">' + parameteis_arr[4] + '</td></tr><td class="dpp_list_title">保 质 期:</td><td class="dpp_list_cont">' + parameteis_arr[5] + '</td></tr><td class="dpp_list_title">适合人群:</td><td class="dpp_list_cont">' + parameteis_arr[7] + '</td></tr><tr><td class="dpp_list_title">特别说明:</td><td class="dpp_list_cont">' + parameteis_arr[8] + '</td></tr> <tr><td class="dpp_list_title">温馨提示:</td><td class="dpp_list_cont">' + parameteis_arr[9] + '</td></tr></tbody></table><div class="dpp_list_img"><img src="' + data[0].parameteisimg + '"></div>';
			var couponimg_arr = data[0].couponimg.split(" ");
			var couponimg = '';
			for(var i = 0 ; i < couponimg_arr.length ; i++){
				couponimg += '<img src="' + couponimg_arr[i] + '" alt="">';
			}
			var coupon = data[0].coupon;
			var photos = '';
			var photos_arr = data[0].photos.split(" ");
			for(var i = 0 ; i < photos_arr.length ; i++){
				photos += '<img src="' + couponimg_arr[i] + '" alt="">';
			}
			var use = data[0].use;
			$(".now_pos_show").html(nows);
			$(".groupdetail_singlename").html(singlename);
			$(".groupdetail_singlead").html(brandimg);
			$(".groupdetail_singleinfo").html(goods);
			$(".detail_buyinfo").html(buyinfo);
			$(".dpp_list").html(parameteis);
			$(".dpc_cont").find("p").eq(0).html(couponimg);
			$(".dpc_cont").find("p").eq(1).html(coupon);
			$(".dpc_cont").find("p").eq(3).html(photos);
			$(".detail_pro_realshot").find(".dpc_cont").html(use);
			$(".sale_tip_time").oaoTime();
		}
	});
	
	//用户口碑##############################33
	$.ajax({
		type:"get",
		url:"json/reputation.json",
		success:function(data){

			var reputation = '';
			for(var i = 0 ; i < data.length; i++){
				var scoring = data[i].scoring * 20 + "%"
				reputation += '<li><div class="dpuser_cont_photo"><p class="dpuser_cphoto_img"><img src="' + data[i].img + '"></p><p class="dpuser_cphoto_txt ell">' + data[i].username + '</p></div><div class="dpuser_cont_info"><div class="dpuser_coninfo_timer"><div class="dpuser_ctimer_score"><p>评分：</p><p class="dpuser_ctimer_scorebg"><span class="dpuser_ctimer_scoregoods" style="width:' + scoring +'"></span></p></div><p class="dpuser_ctimer_timer">' + data[i].date + '</p></div><div class="dpuser_coninfo_cont"><p>' + data[i].commentaries + '</p></div><div class="dpuser_coninfo_zan"><input type="hidden" class="comment_id" name="comment_id" value="584614"><p class="yizan 584614"><span>赞</span><i>（' + data[i].zan + '）</i></p></div></div></li>';
			}
			
			$(".dpuser_cont").find("ul").eq(0).html(reputation);
		}
	});
	//热卖推荐##############################33
	$.ajax({
		type:"get",
		url:"json/shoplist.json",
		success:function(data){
			var recommended = '';
			for(var i = 0; i < 4; i++){
				recommended += '<li><div class="goods_img"><a href="#" target="_blank"><img src="' + data[i].img + '"></a></div><div class="goods_price"><p class="pro_name"><a href="#" target="_blank">' + data[i].title + '</a></p><p class="now_price"><i>￥</i><span class="price_day">' + data[i].price + '</span></p><p class="buy_btn"><a class="put-cart" pic="#" href="#" target="_blank">加入购物车</a></p></div></li>';
			}
			$(".pb_list_goods").find("ul").html(recommended);
		}
	});
	//同分类排行###############3
	$.ajax({
		type:"get",
		url:"json/shoplist.json",
		success:function(data){
			var ranking = '';
			for(var i = 0; i < 3; i++){
				ranking += '	<li><div class="prolist_img"><a href="#" target="_blank"><img src="' + data[i].img + '"></a></div><div class="prolist_info"><p class="prolist_info_name"><a href="#" target="_blank">' + data[i].title + '</a></p><p class="prolist_info_price">￥' + data[i].price + '</p></div></li>';
			}
			$(".pro_list").find("ul").html(ranking);
		}
	});
})
