
//warning dont name the inputfield plain 'password' no work!!

    var validatorMEMBERS = $("#member_registration").validate({
        rules : {
             first_name : { required : true },
             password1 : { required : true },
             password2 : { equalTo: "[name=password1]"},
        },
        messages : {
            first_name : 'Required Field',
            password1 : 'Required Field',
            password2 : 'Password fields not match',
        }
    });
    

	<div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
		<div class='form-group'>
			<label>Password :</label>
			<input name='password1' type="password" class='form-control' placeholder='password'>
		</div>
	</div>
	
	<div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
		<div class='form-group'>
			<label>Retype Password :</label>
			<input name='password2' type="password" class='form-control' placeholder='password'>
		</div>
	</div>