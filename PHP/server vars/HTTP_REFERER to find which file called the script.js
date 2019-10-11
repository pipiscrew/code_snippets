//get source filename (the file called this script)
//HTTP_REFERER returns the full URL, using the internal function basename
//to slice the filename
$source_file = basename($_SERVER["HTTP_REFERER"]);

//if the url contains parameters we have to slice it as well
$source_file_qmark = strpos($source_file,"?");

if ($source_file_qmark>0)
   $source_file = substr($source_file, 0, $source_file_qmark);