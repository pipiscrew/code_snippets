//http://stackoverflow.com/a/1978021

				//callback onerror (if image doesnt exist)
				$("#img_user").error(function() {
				  this.src = 'img_users/doesntexist.png'; // replace with other image
				});
				
				//change image - if doesnt exist fallback to .error
				$("#img_user").attr("src", "img_users/" + $('#cmb_user').val() + ".png");
		
				
//example
				$("<img/>")
				    .load(function() { console.log("image loaded correctly"); })
				    .error(function() { console.log("error loading image"); })
				    .attr("src", $(originalImage).attr("src"))
				;