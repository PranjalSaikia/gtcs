<?php 
	
	$data = file_get_contents("php://input");
	include('class/connect.php');
	include('header.php');
	include('class.php');
	
	$msg = "";
	$name = addslashes(strip_tags(trim($_POST['name'])));
	$email = addslashes(strip_tags(trim($_POST['email'])));
	$phone = addslashes(strip_tags(trim($_POST['phone'])));
	$place = addslashes(strip_tags(trim($_POST['place'])));
	$budget = addslashes(strip_tags(trim($_POST['budget'])));
	$location = addslashes(strip_tags(trim($_POST['location'])));


	$core = Core::getInstance();
	$q = "SELECT * FROM affordable WHERE name=:name AND email=:email AND phone=:phone";
	$stmt=$core->dbh->prepare($q);
	$stmt->bindParam(':name',$name,PDO::PARAM_STR);
	$stmt->bindParam(':email',$email,PDO::PARAM_STR);
	$stmt->bindParam(':phone',$phone,PDO::PARAM_STR);
	$stmt->execute();
	if($stmt->rowCount() == 0){
		$n = new Master;
		$a1="";
		if(file_exists($_FILES['fileupload']['tmp_name']) || is_uploaded_file($_FILES['fileupload']['tmp_name'])){
			$a1 = $n->file_upload('uploads/', 'fileupload',1);
		}
		

		$q1 = "INSERT INTO affordable(name,email,phone,place,budget,location,file_path,is_done,is_del) VALUES(:name,:email,:phone,:place,:budget,:location,:file_path,'0','0')";
		$stmt1=$core->dbh->prepare($q1);
		$stmt1->bindParam(':name',$name,PDO::PARAM_STR);
		$stmt1->bindParam(':email',$email,PDO::PARAM_STR);
		$stmt1->bindParam(':phone',$phone,PDO::PARAM_STR);
		$stmt1->bindParam(':place',$place,PDO::PARAM_STR);
		$stmt1->bindParam(':budget',$budget,PDO::PARAM_STR);
		$stmt1->bindParam(':location',$location,PDO::PARAM_STR);
		$stmt1->bindParam(':file_path',$a1,PDO::PARAM_STR);
		$stmt1->execute();

		$msg = "Your data has been successfully submitted. We will get back to you soon.";

	}else{
		$msg = "You have already submitted the data. Thank you.";
	}


	$obj->message = $msg;
	echo json_encode($obj);


?>