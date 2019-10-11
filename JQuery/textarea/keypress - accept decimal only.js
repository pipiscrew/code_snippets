//http://stackoverflow.com/a/2824914/1320686
			<div class="row">
				<div class="col-xs-6 col-md-6"><input id="noA" class="form-control" onkeypress="return isNumberKey(event,this)"></div>
				<div class="col-xs-6 col-md-6"><input id="noB" class="form-control" onkeypress="return isNumberKey(event,this)"></div>
			</div>
			
			<div class="row">
				<div class="col-xs-6 col-md-6"><input id="noC" class="form-control" onkeypress="return isNumberKey(event)">	</div>
				<div class="col-xs-6 col-md-6"><input id="noD" class="form-control" onkeypress="return isNumberKey(event)">	</div>
			</div>
			
			<a class="btn btn-lg btn-success btn-block" id="calculate" onclick="make_calc()">Calculate</a>
			
		<script>
			
			function make_calc(){

				if (document.getElementById('noD').value.length==0)
					document.getElementById('noD').value = (document.getElementById('noC').value / document.getElementById('noA').value) * document.getElementById('noB').value;
				else if (document.getElementById('noC').value.length==0) {
					document.getElementById('noC').value = (document.getElementById('noD').value / document.getElementById('noB').value) * document.getElementById('noA').value;
				} else {
					document.getElementById('calculate').innerHTML= "Left bottom or Right bottom must be empty";	
				}

			}

	       function isNumberKey(evt)
	       {
	          var charCode = (evt.which) ? evt.which : evt.keyCode;
	          if (charCode != 46 && charCode > 31 
	            && (charCode < 48 || charCode > 57))
	             return false;

	          return true;
	       }

		</script>
		
		
//ex2
//http://stackoverflow.com/a/30865530/1320686
one more solution which allows for decimal numbers and also limits the digits after decimal to 2 decimal places.

function isNumberKey(evt, element) {
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode == 46 || charcode == 8))
    return false;
  else {
    var len = $(element).val().length;
    var index = $(element).val().indexOf('.');
    if (index > 0 && charCode == 46) {
      return false;
    }
    if (index > 0) {
      var CharAfterdot = (len + 1) - index;
      if (CharAfterdot > 3) {
        return false;
      }
    }

  }
  return true;
}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<input type="number" id="rate" placeholder="Billing Rate" required onkeypress="return isNumberKey(event,this)">