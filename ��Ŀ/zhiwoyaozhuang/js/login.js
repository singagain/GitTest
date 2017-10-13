$(function(){
	$(".sign_txt").focus(function(){
		$(this).addClass("focus_sel");
	})
	$(".sign_txt").blur(function(){
		$(this).removeClass("focus_sel");
	})
	$(".u_info_btn").find("input").click(function(){
		var phone = $("#login-username").val();
		var pwd = $("#login-password").val();
		var sc_str = $.cookie("user");
		var sc_arr = eval(sc_str);
		//遍历cookie中的对象
		for(var i in sc_arr){
			console.log(sc_arr[i].id);
			//找出相同用户
			if(phone == sc_arr[i].id){
				//验证密码
				if(pwd == sc_arr[i].password){
					alert("验证成功，正在跳转。。。");
					continue;
				}else{
					alert("密码错误！");
					continue;
				}
			}
		}
	})
})