
$(function(){
	oDt = $(".nav_store dl");
	$.ajax({
		url:"json/navlist.json",
		success:function(data){

			for(var i = 0; i < data.length; i++){
				for(var j = 0 ; j < oDt.length ; j++){
					var html = oDt.eq(j).html();
						if(data[i].title == oDt.eq(j).find("dt").html()){
							var arr = data[i].list.split(" ");
							for(var value in arr){	
							html += '<dd><a href="#">' + arr[value] + '</a></dd>';
						}
					}
					oDt.eq(j).html(html)
				}
			}

		}
	})
})

