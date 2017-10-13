$(function(){
	$.ajax({
		type:"get",
		url:"json/shoplist.json",
		success: function(res){

			var html = "";
				for(var i = 0; i < res.length; i++){
					var saleout = "";
					var arr = res[i].effect.split(" ")
					var effecthtml = "";
					var joinCar = "";
					for(var j in arr){
						
						effecthtml += '<a href="#" target="_blank"><span>' + arr[j] +'</span></a>';
					};
					if(res[i].count == 0){
						saleout = '<div class="sk_sale_out"></div><div class="skso_tip"><p class="sktip_txt">已抢光</p></div>';
						joinCar = '';
						
					}else{
						joinCar = '<p class="pinfo_buy" id = "' + res[i].id + '"><a class="put-cart embox" href="#">加入购物车</a></p>';
						saleout = '';
					}
					html += '<li><div class="goods_img "><a class="goods_img_show" href="details.html" target="_blank"><img class="lazy" src="' + res[i].img +'" style="display: block;"></a><div class="goods_img_efficacy">' + effecthtml + '</div>' + saleout +'</div><div class="goods_info"><div class="pro_name"><a href="details.html" target="_blank"><span></span>'+ res[i].title +'</a></div><div class="price_info clearfix"><p class="pinfo_num"><i>￥</i><span>' + res[i].price + '</span></p>' + joinCar + '</div><div class="sale_tip clearfix"><p class="sale_tip_time" end-date="2018-1-1"></p><p class="sale_tip_count"><span>' + res[i].sales +'</span>人已购买</p></div></div></li>';
	
				}
				$("#groupGoods").html(html);
				$(".sale_tip_time").oaoTime();
		}
	});
})
