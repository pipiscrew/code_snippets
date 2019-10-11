//http://www.webdesignerforum.co.uk/topic/28819-cs-cart-how-to-add-additional-scripts-to-head-section/#entry361770
//http://www.pipiscrew.com/2015/12/cscart-use-smarty-block-allows-us-to-add-custom-javascript-snippet-into-tpls/

tested on CSCART v4.3

go to Design > Layouts
go to a group and add block
on modal appear choose the type HTML/Smarty

on content use the smarty tag {literal}. 
Using this tag the CSCART doesnt put CDATA in front < script.... example :

//test
{literal}
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
 
<script type="text/javascript">
  $(function() {
     function test(){
          alert("this is a test which allows javascript on a block!");
     }
  })
</script>
{/literal}
 
<div>
     pipiscrew – cscart v4.3 – test
</div>