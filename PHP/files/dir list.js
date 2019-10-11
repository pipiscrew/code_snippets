//http://www.sitepoint.com/list-files-and-directories-with-php/

//To search in the directory for all files and directories that end with .txt, you would write:

<?php
$filelist = glob("*.txt");
If you display $filelist, the output will be:

array (
  0 => 'article.txt',
  1 => 'text.txt'
)

//If you want a list of files and directories that begin with “te”, the code to write is:

<?php
$filelist = glob("te*");
The output is:

array (
  0 => 'test.dat',
  1 => 'text.txt'
)