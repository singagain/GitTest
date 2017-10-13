$(function(){
	$("#login").click(function(){
		singleton();
	})



var singleton = (function(){
				var oDiv = null;
				var createDiv = function(){
					if(!oDiv){
						var html = "";
						html = '<div class="sign_box login_box"><span class="close_index">×</span><div class="userlogin_title"><p><span>登录</span><a href="registered.html">免费注册</a></p></div><div class="userlogin_info"><form id="login-user-form" method="post" action="/account/login"><input type="hidden" name="redirect" value="http://www.zhiwo.com/"><div class="u_info_account"><p class="u_info_name"><label for="login-username">账号</label></p><p class="u_info_txt"><input class="sign_txt" type="text" id="login-username" value="" placeholder="请输入用户名/邮箱/手机号" name="username"></p></div><div class="u_info_password"><p class="u_info_name"><label for="login-password">密码</label></p> <p class="u_info_txt"><input class="sign_txt" type="password" id="login-password" value="" placeholder="请输入密码" name="password"></p></div><div class="u_info_code u_info_h verifycode"><p class="u_info_name"><label for="login-verify-code">验证码</label></p><p class="u_info_txt"><input class="sign_txt" type="text" id="login-verify-code" name="verify_code" placeholder="请输入验证码"><img id="verify_code" src="img/login/verifycode.png" alt="验证码"><span id="change_code">换一张</span></p></div><div class="u_info_operate"><br><br><p class="auto_login"><label class="u_check u_checked" for="auto_login">自动登录</label></p><p class="forget_password"><a href="#">忘记密码？</a></p></div><div class="u_info_btn"><p><input type="button" value="登录"></p></div></form></div><div class="userlogin_other"><p>合作网站账号登录</p><ul class="ext_connect clearfix"><li class="qq"><a href="#">QQ</a></li><li class="alipay"><a href="#">支付宝</a></li><li class="sina"><a href="#">新浪微博</a></li><li class="t360"><a href="#">360</a></li><li class="baidu"><a href="#">百度</a></li><li class="renren"><a href="#">人人</a></li><li class="xunlei"><a href="#">迅雷</a></li></ul></div><div class="userlogin_tip"><p class="u_tip_lang"></p></div>';
					$("#login_index").html(html);
					}
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
				$(".close_index").click(function(){
					$(".login_box").remove();
				})
				}
				return createDiv;
			})();

		})