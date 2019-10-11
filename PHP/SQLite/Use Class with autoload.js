//http://php.dzone.com/tips/stop-including-class-files-and
//http://php.net/manual/en/function.autoload.php
//http://www.shokhirev.com/nikolai/abc/IT/php_db/php_db.php
**when using __autoload you dont have to include the files!

//main file
<?php
function __autoload($className)
{
  require_once "./phpclasses/{$className}.php";
}

// Instantiate class A without including it and __autoload() will do so on your behalf
$ClassGeneral = new General();
$ClassGeneral->displayVar();

?>


//a class file into phpclasses directory
<?php
class General
{
    // property declaration
    public $var = 'a default value';

    // method declaration
    public function displayVar() {
        echo $this->var;
    }
}