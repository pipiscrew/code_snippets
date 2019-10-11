			function convert_to_valid_decimal(price){
				if (!price)
					return 0.00;
				else 
					{
						var x = price.replace('.',''); //remove thousand inserted by PHP
						x  = x.replace(',','.'); //replace , to . (is for decimal) (js flavor)
						
						return parseFloat(x);
					}
			}