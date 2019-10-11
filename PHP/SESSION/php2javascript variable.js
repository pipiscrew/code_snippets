				var x = "<?= $_SESSION['u']?>";
			
				$("#logout").html("Έξοδος (" + x + ")");				


//when int
					var d = <?= intval((strtotime(date("Y-m-d H:i")." UTC")-69) * 2) ?>;