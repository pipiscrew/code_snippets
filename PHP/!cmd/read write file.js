function read_template(string $file){
	
	if(file_exists($file)){
		return file_get_contents($file);
	}
	else{
		die($file." doesnt exist. \r\n\r\nOperation aborted.");
	}
}


$temp = read_template("template_entity.txt");

$compiledTemp = str_replace('{{variables}}', "test", $temp);

file_put_contents("asdf", $compiledTemp, 0);