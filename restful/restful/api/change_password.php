<?php 
	$data = json_decode(file_get_contents("php://input"), true);
	include('../class/connect.php');	
	include('../class/class.php');
	include('../class/header.php');

	$obj = new \stdClass();
	$m = new Authentication;
	if($m->is_auth() == true){

		$username = $m->get_user();
		$oldpassword = md5(addslashes(strip_tags(trim($data['oldpassword']))));
		$newpassword = md5(addslashes(strip_tags(trim($data['newpassword']))));

		$n = new User;
		$result = $n->change_password($oldpassword,$newpassword,$username);	
		if($result == true){
			$message = "Successfully Done";
		}else{
			$message = "Something Went Wrong";
		}
		$obj->status="200";
		$obj->message="Authenticated";
		$obj->data=$message;
	}else{
		$obj->status="403";
		$obj->message="Not Authenticated";
		$obj->data="";
	}
	

	echo json_encode($obj);



?>