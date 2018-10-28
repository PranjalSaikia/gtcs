<?php 
	include('../class/connect.php');	
	include('../class/class.php');
	include('../class/header.php');

	$obj = new \stdClass();
	$m = new Authentication;
	if($m->is_auth() == true){
		$n = new Backup;
		$sqldump = $n->backup_tables('localhost','root','','trading','*');	
		$obj->status="200";
		$obj->message="Authenticated";
		$obj->data=$sqldump;
	}else{
		$obj->status="403";
		$obj->message="Not Authenticated";
		$obj->data="";
	}
	

	echo json_encode($obj);



?>