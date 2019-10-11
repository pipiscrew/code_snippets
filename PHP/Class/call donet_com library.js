//http://www.pipiscrew.com/2016/01/php-call-dotnet-method/

The DOTNET/COM library in PHP is a part of the Windows Only Extensions – 
http://is.php.net/manual/en/refs.utilspec.windows.php

-non working on linux-

The DOTNET class allows you to instantiate a class from a .Net assembly and call its methods and access its properties.

Once you have created a DOTNET object, PHP treats it identically to any other COM object; all the same rules apply.

//http://php.net/manual/en/class.dotnet.php
//test_dotnet.php
<?php
 $stack = new DOTNET("mscorlib", "System.Collections.Stack");
 $stack->Push(".Net");
 $stack->Push("Hello ");
 echo $stack->Pop() . $stack->Pop();
?>
 
 
//http://php.net/manual/en/class.com.php
//test_com.php
<?php
 
$conn = new COM("ADODB.Connection") or die("Cannot start ADO");
$conn->Open("Provider=SQLOLEDB; Data Source=localhost;
Initial Catalog=database; User ID=user; Password=password");
 
$rs = $conn->Execute("SELECT * FROM sometable");    // Recordset
 
$num_columns = $rs->Fields->Count();
echo $num_columns . "\n";
 
for ($i=0; $i < $num_columns; $i++) {
    $fld[$i] = $rs->Fields($i);
}
 
$rowcount = 0;
while (!$rs->EOF) {
    for ($i=0; $i < $num_columns; $i++) {
        echo $fld[$i]->value . "\t";
    }
    echo "\n";
    $rowcount++;            // increments rowcount
    $rs->MoveNext();
}
 
$rs->Close();
$conn->Close();
 
$rs = null;
$conn = null;
 
?>
 
-Enable it in php.ini if dll exists – extension=php_com_dotnet.dll
-Once done RESTART the server.

