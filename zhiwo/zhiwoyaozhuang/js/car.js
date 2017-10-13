$(function(){
	/*判断cookie是否有数据***/
	var first = $.cookie("goods") == null ? true : false;
	if(first){
		/*加载购物车为空的页面******************/
		html = '<div class="shopcar_empty clearfix"><div class="shopcar_empty_img"><img src="img/index/empty.png"></div><div class="shopcar_empty_tip"><p class="shopcar_empty_tip1">您的购物车中没有商品，请先去挑选心爱的商品吧！</p><p class="shopcar_empty_tip2"><span>您可以</span><a href="index.html">返回首页</a><span>挑选喜欢的商品！</span></p></div></div>';
		$(".table_item").html(html);
		$("#cart_raise_buy").css("display","none");
	}else{
		//加载数据
		sc_msg();
		$("#cart_raise_buy").css("display","block");
	}
	
		//已经存储在cookie数据进行加载
	function sc_msg(){
		$.ajax({
			url: "json/shoplist.json",
			type: "get",
			success: function(res){
			
				var sc_arr = eval($.cookie("goods"));
				var html = '';
				var price = 0;
				for(var i in sc_arr){
				var	subtotal =  Number(res[sc_arr[i].id].price)*sc_arr[i].num;
				var integral = subtotal * 2;
					html += '<tr id="' + sc_arr[i].id +'"><td class="table_item_name mycart_listpro_show"><div class="mycart_selpro clearfix"><p class="selpro_img"><a target="_blank" href="'+res[sc_arr[i].id].Ahref+'"><img src="'+res[sc_arr[i].id].img+'"></a></p><div class="selpro_info"><p class="selpro_name"><a target="_blank" href="/group/1123590.html">雅诗兰黛花漾唇彩230  4.6ml</a></p></div></div></td><td class="table_item_price"><p>￥<span id="item-buy-price-group_1123590">' + res[sc_arr[i].id].price + '</span></p></td><td class="table_item_amount"><div class="table_item_amoutbox"><p class="header_ginfo_amount"><span class="decrease_num h_amout_down" data="' + sc_arr[i].id +'"></span><input class="item-buy-quantity-input" value="' + sc_arr[i].num +'" item_key="group_1123590" min_buy="1" max_buy="0" stock="281"><span class="increase_num h_amout_up" data="' + sc_arr[i].id +'"></span><p class="table_amount_tip"></p></div></td><td class="table_item_allpay"><p id="item-buy-total-group_1123590">￥' + subtotal + '</p></td><td class="table_item_integral"><p id="integral-group_1111926">' + integral + '</p></td><td class="table_item_operate"><p><a class="item-buy-delete" data="' + sc_arr[i].id +'">删除</a></p></td></tr>';
				
				price += Number(res[sc_arr[i].id].price)*sc_arr[i].num;
				}
				$("#cart_products").find("tbody").html(html);
				var html_num = '<div class="ui-entrance" style="margin-left:15px;margin-top:10px;"></div><div class="myallinfo_show_one"><p class="myallinfo_delbtn"><a href="#">全部清空</a></p><p class="myallinfo_gobuybtn"><a href="index.html">继续购物</a></p></div><div class="myallinfo_show_two"><p class="myallinfo_allamount">共<i>0</i>件商品</p><p class="myallinfo_allpay"><span>应付金额（不含运费）：</span><i>￥</i><em id="item-buy-total-t">' + price +'</em></p><p class="myallinfo_gopaybtn"><a href="#" id="go_to_order">去结算</a></p></div>';
				$(".mycart_allinfo_show").html(html_num);
			sc_car();
			}
		})
	}
	//计算共有多少件商品
	function sc_car(){
			var sc_str = $.cookie("goods");
			if(sc_str){ //判断字符串是否存在
				var sc_arr = eval(sc_str);
				var sc_num = 0;
				for(var i in sc_arr){
					sc_num = Number(sc_arr[i].num) + sc_num;
				}
				$(".myallinfo_allamount").find('i').html(sc_num);
			}
		}
	//购物车删除操作
		$(".table_item").on("click",".item-buy-delete",function(){
			var str = $.cookie("goods");
			var arr = eval(str);
			var sure = confirm("确定要删除这件商品吗？");	
			if(sure == true){
			//遍历所有的对象，判断是否id相同，删除
			for(var i in arr){
				if(arr[i].id == $(this).attr('data')){
					arr.splice(i,1);
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr,  {
						expires: 7
					});

				}
			}
			sc_msg();
			}
		})
		//购物车商品增加+
		$(".table_item").on("click",".h_amout_up", function(){
			var str = $.cookie("goods");
				var arr = eval(str);
				//遍历所有的对象，判断是否id相同，num++
				for(var i in arr){
					if(arr[i].id == $(this).attr('data')){
						arr[i].num = arr[i].num + 1;
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr,  {
							expires: 7
						});
					}
				}
			sc_msg();
		})
		//购物车商品减少-
		$(".table_item").on("click",".h_amout_down", function(){
			var str = $.cookie("goods");
				var arr = eval(str);

				//遍历所有的对象，判断是否id相同，num--
				for(var i in arr){
					if(arr[i].id == $(this).attr('data')){
						arr[i].num = arr[i].num - 1;
						if(arr[i].num < 1){
							arr[i].num =1
						}
						var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr,  {
								expires: 7
							});
					}
				}
			sc_msg();
			console.log($.cookie("goods"));
		})
		/*清空商品*******************************************************/
		$(".mycart_allinfo_show").on("click",".myallinfo_delbtn", function(){
			var sure = confirm("确定要清空吗？");	
			if(sure == true){
				$.cookie("goods",null);
			}
			location.reload();

		})
		
})
