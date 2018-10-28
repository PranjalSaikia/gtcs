<?php
	include('jwt_validation.php');
	$header = getallheaders();
	$need = explode(" ", $header['Authorization']);
	$jwt_token_from_request = $need[1];
	$ddc = jwt_decode_token($jwt_token_from_request);
?>