<?php
	header("Content-Type:application/json");
	require("init.php");
	//@$pageNum=$_REQUEST['pageNum'] or die("-1");
	//$offset=($pageNum-1)*8;
	$sql="select * from jd_product";
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($rows);
?>