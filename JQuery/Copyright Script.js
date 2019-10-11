//ex PHP
For example, your HTML code could look something like this:
&copy; Copyright Example.com 1998 - <?php echo date('Y') ?>

Which would show on the page as:
© Copyright Example.com 1998 - 2015

//ex JS
<!-- Auto Updating Copyright Script created with Rapid Purple 
Webmaster Tools (https://rapidpurple.com/webmaster-tools/automatic-copyright-generator/) -->

<script language="JavaScript">

function y2k(number) { return (number < 1000) ? number + 1900 : number; }
var today = new Date();
var year = y2k(today.getYear());
document.write('© '+year+' Rapid Purple - All Rights Reserved');

</script>


//ex JS2
<script>document.write(new Date().getFullYear())</script>
