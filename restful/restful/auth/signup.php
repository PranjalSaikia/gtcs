<?php 
	$data = file_get_contents("php://input");
	include('../class/connect.php');
	include('../class/header.php');
	include('jwt_validation.php');

	$core = Core::getInstance();
	$name = addslashes(strip_tags(trim($_POST['name'])));
	$username = addslashes(strip_tags(trim($_POST['username'])));
	$password = md5(addslashes(strip_tags(trim($_POST['password']))));

	
	$obj = new \stdClass();
	$q = "SELECT * FROM usermst WHERE username=:username AND active='1'";
	$stmt=$core->dbh->prepare($q);
	$stmt->bindParam(':username',$username,PDO::PARAM_STR);
	$stmt->execute();
	if($stmt->rowCount() == 0){
		$token = array(
		   "user" => $username,
		   "name" => $name,
		   "isadmin" => "1",
		   "iat" => 1356999524,
		   "nbf" => 1357000000
		);
		$jwt = jwt_create_token($token);

		$q1 = "INSERT INTO usermst(name,username,password,token,active) VALUES(:name,:username,:password,:token,'1')";
		$stmt1=$core->dbh->prepare($q1);
		$stmt1->bindParam(':name',$name,PDO::PARAM_STR);
		$stmt1->bindParam(':username',$username,PDO::PARAM_STR);
		$stmt1->bindParam(':password',$password,PDO::PARAM_STR);
		$stmt1->bindParam(':token',$jwt,PDO::PARAM_STR);
		$stmt1->execute();

		$obj->token = $jwt;
		$obj->user = $username;
		echo json_encode($obj);
	}else{
		$obj->message = "Invalid username/password";
		echo json_encode($obj);
	}

	

?>