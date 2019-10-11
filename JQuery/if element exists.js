//http://aaronrussell.co.uk/legacy/check-if-an-element-exists-using-jquery/

//Now our code works because when jQuery returns an empty object, the length property will return zero 
				if($("#cmb_key_topic").length > 0) {
			 		alert("visible");
			 	} else {
					alert("hidden");
				}
				
				
//The obvious thing would simply be to wrap a selector in an if statement, right?
	if ($("#mydiv")){
	  // do something here
	}
//Well, wrong - that won’t work! When you use a selector, jQuery will always return an object.