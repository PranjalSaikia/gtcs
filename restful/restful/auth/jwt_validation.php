<?php

	require_once 'src/BeforeValidException.php';
	require_once 'src/ExpiredException.php';
	require_once 'src/SignatureInvalidException.php';
	require_once 'src/JWT.php';

	use \Firebase\JWT\JWT;

	function jwt_create_token($token){
		$key = "Lovemelikeyoudo";
		
		$jwt = JWT::encode($token, $key);
		//$decoded = JWT::decode($jwt, $key, array('HS256'));

		return $jwt;
	}


	function jwt_decode_token($jwt){
		$key = "Lovemelikeyoudo";
		
		$decoded = JWT::decode($jwt, $key, array('HS256'));

		return $decoded;
	}


?>