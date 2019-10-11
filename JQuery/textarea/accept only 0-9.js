			//as should be!
     		$("#oCAUSE_goal, #oCAUSE_goalnow").keypress(function(e) {
				if (!(e.keyCode >= 48 && e.keyCode <= 57))
					e.preventDefault();
            });
            
            
            //http://heshamelgabarty.blogspot.gr/2013/01/jquery-input-text-box-numeric.html
            //shows the char then del
            $("#txtRequestedDays").keyup(function (e) {
                if (/\D/g.test(this.value)) {
                    // Filter non-digits from input value.
                    this.value = this.value.replace(/\D/g, '');
                }
            });