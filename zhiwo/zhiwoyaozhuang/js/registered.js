$(function(){
	$(".sign_txt").focus(function(){
		$(this).addClass("focus_sel");
	});
	$(".sign_txt").blur(function(){
		$(this).removeClass("focus_sel");
	});
//	判断手机号格式是否有误
	$("#signup-mobile").focus(function(){
		$(".mobile").find(".error").html("");
	})
	$("#signup-mobile").blur(function(){
		var mobile = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
		if(!(mobile.test($(this).val()))){
			$(".mobile").find(".error").html("手机号格式有误");
		}
	});
//判断密码是否符合格式
	$("#signup-password").focus(function(){
			$(".password").find(".error").html("");
		})
		$("#signup-password").blur(function(){
			var psd = /^(\w){6,16}$/;
			if(!(psd.test($(this).val()))){
				$(".password").find(".error").html("密码长度需6-16位字符");
			}
	});
	//验证两次密码是否正确
	$("#signup-password-confirm").focus(function(){
			$(".password_confirm").find(".error").html("");
	});
	$("#signup-password-confirm").blur(function(){
		if(!($("#signup-password").val() == $(this).val())){
			$(".password_confirm").find(".error").html("两次输入的密码不匹配");
		}
	});
	
	$("#signup-submit").click(function(){
		var id = $("#signup-mobile").val();
		var pwd = $("#signup-password").val();
		var first = $.cookie("user") == null ? true : false;
		if(first){
			$.cookie("user", '[{id:' + id + ',password:' + pwd + '}]', {
				expires: 7
			});
		}else{
			var str = $.cookie("user");
			var arr = eval(str);
			var same = false; //代表是否有相同用户名
			
			//遍历所有的对象，判断是否id相同
			for(var i in arr){
				if(arr[i].id == id){
					alert("您已注册，请登录；");
					same = true;
					break;
				}
				
				

			}
			//没有相同的
			if(!same){
				var obj = {id: id, password:pwd};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie("user", cookieStr, {
						expires: 7
					});
			}
		}
		console.log($.cookie("user"));
			
	});
})