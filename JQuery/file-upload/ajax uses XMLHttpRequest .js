//http://www.w3schools.com/ajax/ajax_xmlhttprequest_create.asp
The keystone of AJAX is the XMLHttpRequest object.

var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }