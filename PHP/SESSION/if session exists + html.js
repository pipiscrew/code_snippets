<?php if(!$_SESSION["companyid"]) {?>
			<li class="active">
				<a href="#companiesTAB" data-toggle='tab'>Εταιρίες</a>
			</li>
			<li>
				<a href="#categoriesTAB" data-toggle='tab'>Κατηγορίες</a>
			</li>
			
			<li>
<?php } else { ?>
			<li class="active"> 
<?php } ?>	