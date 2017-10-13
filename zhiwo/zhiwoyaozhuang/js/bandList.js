$(function(){
	$.ajax({
		type:"get",
		url:"json/brand.json",
		success:function(data){
			console.log(data);
			var hot = "";
			var hotleft = "";
			var occident = "";
			var occidentleft = "";
			var kkc = "";
			var kkcleft = "";
			var china = "";
			var chinaleft = "";
			for(var i = 0 ; i < data.length ; i++){
				if(data[i].category == "畅销品牌"){
					hot += '<li><a href="' + data[i].ahref + '"><img src="' + data[i].img + '"></a></li>';
				}else if(data[i].category == "欧美品牌"){
					occident += '<li><a href="' + data[i].ahref + '"><img src="' + data[i].img + '"></a></li>';
				}else if(data[i].category == "日韩品牌"){
					kkc += '<li><a href="' + data[i].ahref + '"><img src="' + data[i].img + '"></a></li>';
				}else if(data[i].category == "国内品牌"){
					china += '<li><a href="' + data[i].ahref + '"><img src="' + data[i].img + '"></a></li>';
				}else if(data[i].category == "畅销之首"){
					hotleft += '<a href="' + data[i].ahref + '" target="_blank"><img src="' + data[i].img + '"></a>';
				}else if(data[i].category == "欧美品牌之首"){
					occidentleft += '<a href="' + data[i].ahref + '" target="_blank"><img src="' + data[i].img + '"></a>';
				}else if(data[i].category == "日韩品牌之首"){
					kkcleft += '<a href="' + data[i].ahref + '" target="_blank"><img src="' + data[i].img + '"></a>';
				}else if(data[i].category == "国内品牌之首"){
					chinaleft += '<a href="' + data[i].ahref + '" target="_blank"><img src="' + data[i].img + '"></a>';
				}
			}
			
			$(".brand_b_cont").find("ul").eq(0).html(hot);
			$(".brand_b_cont").find("ul").eq(1).html(occident);
			$(".brand_b_cont").find("ul").eq(2).html(kkc);
			$(".brand_b_cont").find("ul").eq(3).html(china);
			$(".brand_b_cont").find(".bbc_hotbrand").eq(0).html(hotleft);
			$(".brand_b_cont").find(".bbc_hotbrand").eq(1).html(occidentleft);
			$(".brand_b_cont").find(".bbc_hotbrand").eq(2).html(kkcleft);
			$(".brand_b_cont").find(".bbc_hotbrand").eq(3).html(chinaleft);
		}
	});
})
