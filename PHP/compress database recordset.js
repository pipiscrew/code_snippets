///////////////////////////wrap
$mysql = new dbase();
$mysql->connect_mysql();
 
$rows_USERS = $mysql->getSet("select * from scenter limit 5000", null);
 
//encode recordset array to json string     http://php.net/manual/en/function.json-encode.php
$s = json_encode($rows_USERS);
 
//compress string with ratio 9              http://php.net/manual/en/function.gzcompress.php
$out = bzcompress($s, 9);
 
//encode data with MIME base64              http://php.net/manual/en/function.base64-encode.php
$out2 = base64_encode($out);
 
//write to file
file_put_contents('the_recs.dat', $out2);
 
 
 
 
///////////////////////////unwrap
//read file content                         http://php.net/manual/en/function.file-get-contents.php
$out = file_get_contents('the_recs.dat');
 
//decode data encoded with MIME base64      http://php.net/manual/en/function.base64-decode.php
$out2 = base64_decode($out);
 
//decompress                                http://php.net/manual/en/function.bzdecompress.php
$out3 = bzdecompress($out2);
 
//decode json string                        http://php.net/manual/en/function.json-decode.php
$out4 = json_decode($out3, true);           //When TRUE, returned objects will be converted into associative arrays. Otherwise will be stdClass
 
var_dump($out4);



/*
pure        = 856kb
gzcompress  = 119kb                             http://php.net/manual/en/function.gzcompress.php
bzcompress  = 71.7kb                            http://php.net/manual/en/function.bzcompress.php
 
Encoding the compressed data into json string 
https://stackoverflow.com/a/32819917
*/

//serverA post the wrapped file 
<?php
	$target_url = 'http://server2/upload.php';

        //This needs to be the full path to the file you want to send.
	$file_name_with_full_path = realpath('./my_obfuscated_dataGCOMPRESS9json.txt');
        /* extra_info will appear at $_POST (Note that you can include other arguments in the post along with the file. This allows you to authenticate the upload)
		 * my_file will appear at $_FILES
         */
	$post = array('extra_info' => '123456', 'my_file'=> new CurlFile($file_name_with_full_path, 'application/octet-stream', 'filename.foo'));

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,$target_url);
	curl_setopt($ch, CURLOPT_POST,1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
	$result=curl_exec ($ch);
	curl_close ($ch);
	echo $result;
?>



//serverB receive the wrapped file
<?php
//var_dump($_FILES);exit;
$uploaddir = realpath('./') . '/';
$uploadfile = $uploaddir . basename($_FILES['my_file']['name']);

echo '<pre>';
	if (move_uploaded_file($_FILES['my_file']['tmp_name'], $uploadfile)) {
	    echo "File is valid, and was successfully uploaded.\n";
	} else {
	    echo "Possible file upload attack!\n";
	}
	echo 'Here is some more debugging info:';
	print_r($_FILES);
	echo "\n<hr />\n";
	print_r($_POST);
	
print "</pre>\n";
?>