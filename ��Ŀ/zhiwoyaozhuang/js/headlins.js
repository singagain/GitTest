$(function(){
	

	$.ajax({
		type:"get",
		url:"json/headlins.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < data.length ; i++){
				html += '<li><div class="m_list_img"><a href="#"><img src="' + data[i].img +'"></a></div><div class="m_list_cont"><div class="m_list_ctime" end-date="2018-1-1"></div><div class="m_list_cname"><a href="#">' + data[i].introduce +'</a></div><div class="m_list_cbuy"><p class="mlcb_price"><i>￥</i><span>' + data[i].price + '</span></p><p class="mlcb_btn"><a class="put-cart">加入购物车</a></p></div></div></li>';
			}
				$(".mainpush_box").find("ul").html(html);
				$(".m_list_ctime").oaoTime();
		}
	})
})