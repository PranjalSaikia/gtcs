<?php 
	class Master
	{
		
		function random_string($length) {
		    $key = '';
		    $keys = array_merge(range(0, 9), range('a', 'z'));

		    for ($i = 0; $i < $length; $i++) {
		        $key .= $keys[array_rand($keys)];
		    }

		    return $key;
		}


		function file_upload($dir, $fileName, $id){
			
			

			$temp = explode(".", $_FILES[$fileName]["name"]);
			$temp=str_replace("..",".",$temp);
            $newfilename = 'housing-'.$this->random_string(20).'.'.end($temp);

			$target_dir = $dir;
			$target_file = $target_dir . basename($_FILES[$fileName]["name"]);
			$uploadOk = 1;
			$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

			// Check if file already exists
			if (file_exists($target_file)) {
			    $uploadOk = 0;
			}



			// Check file size
			if ($_FILES[$fileName]["size"] > 500000000) {
			    $uploadOk = 0;
			}

			// Check if $uploadOk is set to 0 by an error
			if ($uploadOk == 0) {
			    echo "sorry";
			} else {
			    if (move_uploaded_file($_FILES[$fileName]["tmp_name"], $target_dir . $newfilename)) {

			        return $target_dir.$newfilename;

			    } else {

			        return null;
			    }
			}



		}
	}



?>