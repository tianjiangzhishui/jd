<?php
	header("Content-Type:application/json;charset=utf-8");
	@$uname=$_REQUEST['uname'] or die('{"code":-1,"msg":"请输入用户名"}');
	@$upwd=$_REQUEST['upwd'] or die('{"code":-2,"msg":"请输入密码"}');
	require("init.php");
	$sql="SELECT * FROM t_user WHERE uname='$uname' AND upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);//抓取
	if($row===null){
		echo '{"code":-3,"msg":"用户名或密码不存在"}';
	}
	echo '{"code":1,"msg":"登陆成功"}';
?>