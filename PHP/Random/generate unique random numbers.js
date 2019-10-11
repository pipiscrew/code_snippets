//js
		$("#btn_generate_promo_codes").click(function(e) {
			e.preventDefault();

			$.ajax({
				url : 'gen_promo_codes.php',
				dataType : 'json',
				type : 'POST',
				data : {
					"no" : $('#winners').val()
				},
				success : function(data) {
					var random_promos = "";
					$.each(data, function(key, val) {
						random_promos += val + "\n";
					});

					if (random_promos.length > 3)
						random_promos = random_promos.substring(0, random_promos.length - 1);

					$("#txt_promo_codes").val(random_promos);
				}
			});
		});
		

//php
<?php

	if (!isset($_POST['no'])) {
		echo json_encode(null);
		return;
	}
	
	$x = $_POST['no'];
	$items = array();
	
	
	for ($i = 1; $i <= $x; $i++) {
	    $items[] = substr(md5(uniqid(mt_rand(), true)), 0, 8);
	}
	
	echo json_encode($items);

?>