$(function(){//页面加载完成时
	var uname=null; //创建全局变量，保存用户名和密码
	var upwd=null;
	$("#bt-login").click(function(){//提交信息按钮绑定单击事件
		var u=$("#uname").val();console.log(u);
		var p=$("#upwd").val();console.log(p);
		$.ajax({//发送ajax请求
			type:'GET',
			url:'data/login_do.php',
			data:{uname:u,upwd:p},
			success:function(data){//不执行************************************************
				var rs=parseInt(data.code);
				if(rs<0){
					console.log(data.msg);
					$("p.alert").html("用户名或密码有误");
				}else{
					$(".modal").hide();	
				}
			},
			error:function(){
				alert("相应消息有误！请检查网络");
				$(".modal").hide();
			}
		});
	});


//模块二：产品列表
	$.ajax({
		url:'data/product_list.php',
		success:function(data){
			var html="";
			for(var i=0;i<data.length;i++){
				var obj=data[i];
				html=`
				<li>
					<a href=""><img src="${obj.pic}" alt=""/></a>
					<p>￥${obj.price}</p>
					<h1><a href="">${obj.pname}</a></h1>
					<div>
						<a href="#" class="contrast"><i></i>对比</a>
						<a href="#" class="p-operate"><i></i>关注</a>
						<a href="${obj.pid}" class="addcart"><i></i>加入购物车</a>
					</div>
				</li>		
				`;
			}
			$("#plist ul").html(html);
		},
		error:function(){	
			alert("请求商品列表出错，请检查网络");
		}
	});

});