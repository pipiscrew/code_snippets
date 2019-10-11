			fixNull(e[it]["media_unit"], "Κανένα")

			dump += e[it]["comp_title"] + "\r\n" + 
			fixNullLeftRight(e[it]["comp_name"],"","\r\n\r\n",true) +
			fixNullLeftRight(e[it]["comp_address"],"","\r\n");
						
			function fixNull(val,defaultVal) {
				if (val)
					return val;
				else
					return defaultVal;
			}
			
			function fixNullLeftRight(val,defaultValBefore,defaultValAfter,usedefaultValAfterWhenNULL) {
				if (val)
					return defaultValBefore + val + defaultValAfter;
				else
					return "" + (usedefaultValAfterWhenNULL ? defaultValAfter : '')
			}
			
			function fixNullSpace(val) {
				if (val)
					return val;
				else
					return "";
			}
			
//doc
//http://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in
	if( value ) {
	}
	will evaluate to true if value is not:
	
	null
	undefined
	NaN
	empty string ("")
	0
	false