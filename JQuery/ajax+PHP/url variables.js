//use data property
    url: "getdata.php",
    data:{
       timestamp: timestamp,
       uid: id,
       uname: name
    },

//then in PHP
<?php
if ($_POST['page']) {



//2nd    

//http://stackoverflow.com/questions/13651656/passing-multiple-parameters-with-ajax-url

url:"getdata.php?timestamp="+timestamp+"&uid="+id+"&uname="+name

//if needs encoding 
http://www.w3schools.com/jsref/jsref_encodeuri.asp