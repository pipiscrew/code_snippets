//http://stackoverflow.com/questions/773639/how-can-i-simulate-an-anchor-click-via-jquery

<script type="text/javascript">
$(function(){
	$('#thickboxButton').click(function(){
		$('#thickboxId').click();
	});
});
</script>

<input id="thickboxButton" type="button" value="Click me">
<a id="thickboxId" href="myScript.php" class="thickbox" title="">Link</a>


//aka
$('#twitter_share').click();