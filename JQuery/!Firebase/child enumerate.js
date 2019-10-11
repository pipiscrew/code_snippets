		readPromoCodes(snapshot.child('promos'))
		//snapshot.val().promos - no working!

		function readPromoCodes(promocodes)
		{
			var txt = "";
			promocodes.forEach(function(promo) {
				txt += promo.name() + "\n";
			});
			
			console.log("txt", txt);
			$("#txt_promo_codes").val(txt);
		}