//http://stackoverflow.com/questions/12902387/ziparchives-stores-absolute-paths
//http://www.php.net/manual/en/ziparchive.addfile.php#93090

<?php
class Zipper extends ZipArchive {
    public function addDir($path, $parent_dir = '') {
        if($parent_dir != ''){
            $this->addEmptyDir($parent_dir);
            $parent_dir .= '/';
            print '<br>adding dir ' . $parent_dir . '<br>';
        }
        $nodes = glob($path . '/*');
        foreach ($nodes as $node) {
            if (is_dir($node)) {
                $this->addDir($node, $parent_dir.basename($node));
            }
            else if (is_file($node))  {
                $this->addFile($node, $parent_dir.basename($node));
                print 'adding file '.$parent_dir.basename($node) . '<br>';
            }
        }
    }
} // class Zipper


$zip = new Zipper;
$zip->open('theZipName.zip',Zipper::CREATE);
$zip->addDir('loyaltyADMIN','loyaltyADMIN'); 
$zip->close();


if (!file_exists('theZipName.zip'))
{echo "file doesnt exist";
exit;}

//use this for current path!
//$zip->addDir(getcwd(),'loyaltyADMIN'); 
?>