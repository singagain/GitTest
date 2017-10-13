<?php
	header('Content-type: text/json');
	$fruits = array (
	    "护肤" => array("面膜面贴","乳液面霜","洁面卸妆","精华/眼膜","眼贴","眼精/华眼霜","化妆水爽肤水","防晒隔离"),
	    "药妆" => array("乳液面霜","洁面卸妆","面部精华","眼精华/眼霜","防晒隔离","喷雾","化妆水爽肤水","面膜面贴")
	);
	echo json_encode($fruits);
  ?>