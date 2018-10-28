<?php

	$data1 = file_get_contents("php://input");
	include('class/connect.php');
	include('header.php');
	include('class.php');
	$data = json_decode($data1,true);
		
	$msg = "";
	$core = Core::getInstance();
	
	$name = addslashes(strip_tags(trim($data['name'])));
	$email = addslashes(strip_tags(trim($data['email'])));
	$phn = addslashes(strip_tags(trim($data['phone'])));
	$reqs = addslashes(strip_tags(trim($data['reqs'])));
	$address = addslashes(strip_tags(trim($data['address'])));
	$location = addslashes(strip_tags(trim($data['location'])));


	$q = "SELECT * FROM housekeeping WHERE name=:name AND phn=:phn AND email=:email AND reqs=:reqs";
	$stmt=$core->dbh->prepare($q);
	$stmt->bindParam(':name',$name,PDO::PARAM_STR);
	$stmt->bindParam(':phn',$phn,PDO::PARAM_STR);
	$stmt->bindParam(':email',$email,PDO::PARAM_STR);
	$stmt->bindParam(':reqs',$reqs,PDO::PARAM_STR);
	$stmt->execute();
	if($stmt->rowCount()==0){
		$q1 = "INSERT INTO housekeeping(name,email,phn,reqs,address,location,is_del) VALUES(:name,:email,:phn,:reqs,:address,:location,'0')";
		$stmt1=$core->dbh->prepare($q1);
		$stmt1->bindParam(':name',$name,PDO::PARAM_STR);
		$stmt1->bindParam(':email',$email,PDO::PARAM_STR);
		$stmt1->bindParam(':phn',$phn,PDO::PARAM_STR);
		$stmt1->bindParam(':reqs',$reqs,PDO::PARAM_STR);
		$stmt1->bindParam(':address',$address,PDO::PARAM_STR);
		$stmt1->bindParam(':location',$location,PDO::PARAM_STR);
		$stmt1->execute();


		$msg = "Your data has been successfully submitted. We will get back to you soon.";
	}else{
		$msg = "You have already submitted the data. Thank you.";
	}


	$obj->message = $msg;
	echo json_encode($obj);
?>