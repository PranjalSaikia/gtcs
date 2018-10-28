<?php 
	$data1 = file_get_contents("php://input");
	include('../class/connect.php');
	include('../class/header.php');
	include('jwt_validation.php');
	$data = json_decode($data1,true);

	$core = Core::getInstance();


	$username = addslashes(strip_tags(trim($data['username'])));
	$password = md5(addslashes(strip_tags(trim($data['password']))));

	
	$obj = new \stdClass();
	$q = "SELECT * FROM usermst WHERE username=:username AND password=:password AND active='1'";
	$stmt=$core->dbh->prepare($q);
	$stmt->bindParam(':username',$username,PDO::PARAM_STR);
	$stmt->bindParam(':password',$password,PDO::PARAM_STR);
	$stmt->execute();
	if($stmt->rowCount() == 1){
		$r = $stmt->fetchObject();
		$token = array(
		   "user" => $r->username,
		   "name" => $r->name,
		   "isadmin" => "1",
		   "iat" => 1356999524,
		   "nbf" => 1357000000
		);
		$jwt = jwt_create_token($token);

		$obj->token = $jwt;
		$obj->user = $r->username;
		echo json_encode($obj);
	}else{
		$obj->message = "Invalid username/password";
		echo json_encode($obj);
	}

	

	

?>