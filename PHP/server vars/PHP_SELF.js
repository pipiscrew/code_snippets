$doc_root = str_replace('//','/',str_replace(DIRECTORY_SEPARATOR,'/',$_SERVER["DOCUMENT_ROOT"]));
$fm_self = $doc_root.$_SERVER["PHP_SELF"];
echo $fm_self;

outputs:
/home2/thefaced/public_html/x.php