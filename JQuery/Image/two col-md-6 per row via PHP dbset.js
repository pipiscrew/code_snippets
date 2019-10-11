//two col-md-6 per row

	<div class="container">
		
<?php
$db_set = getSet($db, "select affiliated_id, affiliated_title, affiliated_url, affiliated__order_by from affiliated order by affiliated__order_by",null);
$i=2;
foreach($db_set as $row) {


if ($i%2==0)
{ 
	if ($i>2)
		echo "</div>";
	
	echo "<div class='row'>";
}
echo "<div class='col-xs-6 col-sm-6 col-lg-6 col-md-6' style='margin-bottom:15px'>";
?>
			<a href="<?=$row["affiliated_url"];?>" target="_blank"><img src="affiliated_img/<?=$row["affiliated_id"];?>.jpg?<?=date('YmdGi');?>" class="img-responsive"></a>
			
<?php 
echo "</div>";
$i+=1;	
} ?> 
	</div>