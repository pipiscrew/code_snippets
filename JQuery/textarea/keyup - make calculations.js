				$("#nicotineBase, #targetML, #flavor, #amount").keyup(function() {
					var nicotineBase = $("#nicotineBase").val();
					var targetML = $("#targetML").val();
					var flavor = $("#flavor").val();
					var amount = $("#amount").val();

					nicotineBase = toFixed(amount / (nicotineBase / targetML), 2);
					flavor = toFixed(amount * (flavor / 100), 2);
					targetML = toFixed(amount - (nicotineBase + flavor), 2)

					if (nicotineBase) {
						$('#nicotineBaseRES').html(nicotineBase + "ml");
						$('#nicotineBaseRESdrops').html(toFixed(nicotineBase * 20, 2) + "drops");
						$('#flavorRES').html(flavor + "ml");
						$('#flavorRESdrops').html(toFixed(flavor * 20, 2) + "drops");
						$('#targetMLRES').html(targetML + "ml");
						$('#targetMLRESdrops').html(toFixed(targetML * 20, 2) + "drops");
						$('#res0, #res1, #res2').show();
					} else
						$('#res0, #res1, #res2').hide();

					//focus next
					if ($(this).val().length == 2) {
						var nextElement = $('input[tabindex="' + (this.tabIndex + 1) + '"]');

						if (nextElement.length)
							nextElement.focus();

					}

				});
				
				
		//when goal change calculate goalCredits!
		$("#oCAUSE_goal").keyup(function() {
			$('#oCAUSE_goalnow').val("0");
			
			var res = Math.round($(this).val() / companyCreditValue);

			if (res)
				$('#oCAUSE_goalCredits').val(res);
			else
				$('#oCAUSE_goalCredits').val('0');
		});