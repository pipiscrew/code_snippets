when php running on windows machine, can execute .exe


//http://stackoverflow.com/a/12251656/1320686
$answer = exec("abc.exe");
echo $answer."</br>"; 


*2*
//Run commands using Windows WScript object
//https://www.phpclasses.org/package/10248-PHP-Run-commands-using-Windows-WScript-object.html