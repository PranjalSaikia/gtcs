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
	$collectionpoint = addslashes(strip_tags(trim($data['collectionpoint'])));
	$lab = 1;

	$q = "SELECT * FROM lab WHERE name=:name AND phn=:phn AND email=:email AND lab=:lab";
	$stmt=$core->dbh->prepare($q);
	$stmt->bindParam(':name',$name,PDO::PARAM_STR);
	$stmt->bindParam(':phn',$phn,PDO::PARAM_STR);
	$stmt->bindParam(':email',$email,PDO::PARAM_STR);
	$stmt->bindParam(':lab',$lab,PDO::PARAM_STR);
	$stmt->execute();
	if($stmt->rowCount()==0){
		$q1 = "INSERT INTO lab(lab,name,email,phn,collectionpoint,is_del) VALUES(:lab,:name,:email,:phn,:collectionpoint,'0')";
		$stmt1=$core->dbh->prepare($q1);
		$stmt1->bindParam(':name',$name,PDO::PARAM_STR);
		$stmt1->bindParam(':email',$email,PDO::PARAM_STR);
		$stmt1->bindParam(':phn',$phn,PDO::PARAM_STR);
		$stmt1->bindParam(':collectionpoint',$collectionpoint,PDO::PARAM_STR);
		$stmt1->bindParam(':lab',$lab,PDO::PARAM_STR);
		$stmt1->execute();
		$msg = "Your data has been successfully submitted. We will get back to you soon.";
	}else{
		$msg = "You have already submitted the data. Thank you.";
	}


	$obj->message = $msg;
	echo json_encode($obj);
?>