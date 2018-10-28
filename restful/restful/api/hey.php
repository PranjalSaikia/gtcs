<?php 
	$data = json_decode(file_get_contents("php://input"));
	include('../class/connect.php');	
	include('../class/class.php');	

	$n = new Authentication();
	$obj = new \stdClass();
	if($n->is_auth() == true){
		$obj->status = "200";
		$obj->message = "Authenticated";
		$obj->results = "";
	}else{
		$obj->status = "403";
		$obj->message = "Not Authenticated";
		$obj->results = "";
	}
	include('../class/header.php');
	echo json_encode($obj);

?>