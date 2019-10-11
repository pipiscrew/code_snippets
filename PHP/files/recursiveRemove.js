//http://stackoverflow.com/questions/11613840/remove-all-files-folders-and-their-subfolders-with-php

function recursiveRemove($dir) {
    $structure = glob(rtrim($dir, "/").'/*');
    if (is_array($structure)) {
        foreach($structure as $file) {
            if (is_dir($file)) recursiveRemove($file);
            elseif (is_file($file)) unlink($file);
        }
    }
    rmdir($dir);
}

Usage:
recursiveRemove("test/dir/");