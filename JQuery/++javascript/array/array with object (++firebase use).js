var retOBJ = {};

			for (var i = 0; i < promosARR.length; i++) {
				if (promosARR[i]) {
					promosARR[i] = promosARR[i].trim();

					if (promosARR.length > 2) {
						var retOBJitem = {};
						retOBJitem['is_used'] = "0";
						retOBJ[promosARR[i]] = retOBJitem;

						valid_counter+=1;
					}
				}

			}
			
return retOBJ