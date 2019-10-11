<?php
	//source - http://www.stevedawson.com/scripts/text-counter.php
	//http://www.totallyphp.co.uk/text-file-hit-counter
	
	if (!isset($_POST["fname"]) || !isset($_POST["email"]) || !isset($_POST["dob"]) || !isset($_POST["country"]))
	{
		die("error 1x082347");
	}
	
	//send mail
	$headers = "From: contests4cause@gmail.com\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=utf-8\r\n";
		
	$subject = "**utf8 the subject**";
	$updated_subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";
	$message = "<b>Fullname :</b> {$_POST['fname']}<br>";
	$message .= "<b>Email :</b> {$_POST['email']}<br>";
	$message .= "<b>Date Of Birth :</b> {$_POST['dob']}<br>";
	$message .= "<b>Country :</b> {$_POST['country']}<br>";
	$message .= "<b>Registration Datetime :</b> ".date('d-m-Y H:i:s')."<br>";
	
	$mail_res=0;
    if (mail("c.x@x.com", $updated_subject, $message, $headers)) {
      $mail_res=1;
    }
     
    if ($mail_res==0)   
	{
			echo $mail_res;
			exit;
	}
	//send mail
	
	$line = $_POST["fname"].",".$_POST["email"].",".$_POST["dob"].",".$_POST["country"]."\n";
	
	$log_file = "count_file.txt";
	
	if (file_exists($log_file)) 
	{
		//read
//		$fil = fopen($log_file, 'r');
//		$dat = fread($fil, filesize($log_file)); 
//		echo $dat+1;
//		fclose($fil);
		
		//append
		$fil = fopen($log_file, 'a');
		fwrite($fil, $line);
		fclose($fil);
	}

	else
	{
		$fil = fopen($log_file, 'w');
		fwrite($fil, $line);
		fclose($fil);
		
		//only admin can read&write
		chmod($log_file, 0600); 
	}
	
	echo $mail_res;
?>

		
		<script type="text/javascript">
			//indicator 
			var loading = $('<div class="modal-backdrop"></div><div class="progress progress-striped active loading"><div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">');
			
			$(function() {
				
				
				$('#f0r0m').on('submit', function(e) {
				    e.preventDefault(); //Prevents default submit
				    
				    //validation
					var fname = $("[name=fname]").val();
					var email = $("[name=email]").val();
					var dob = $("[name=dob]").val();
					
					if (fname.indexOf(",")>-1 || email.indexOf(",")>-1 || dob.indexOf(",")>-1){
						alert("Commas not allowed");
						return false;
					}
					//validation
					
				    loading.appendTo(document.body);	
				    
				    var form = $(this); 
				    var post_url = form.attr('action'); 
				    var post_data = form.serialize(); //Serialized the form data for process.php
				    
				    $.ajax({
				        type: 'POST',
				        url: 'subscribe.php', // Your form script
				        data: post_data,
				        success: function(msg) {
				        	loading.remove();
				        	
				        	if(msg==1) {
					            $(form).fadeOut(500, function(){
					                $("#status").html('Your registration submitted. Thank you!').fadeIn();
					            });
					        }
					        else {
					        	alert("An error occured, please try again!!");
					        }
				        },
				        error: function(jqXHR, textStatus, errorThrown)
				        {
				            alert("An error occured, please try again!");
				        }
				    });
				});

			});

		</script>
		
		<div class="container" style="margin-bottom: 10px;">
			<div class="row">
				<div class="col-md-3">
				</div>
				<div class="col-md-6">
					<div class="alert alert-success" style="display:none;" id="status"></div>
					
					<form id="f0r0m" method="post" action="subscribe.php" onsubmit="return revalidate();">
					
						<div class="form-group">
							<label>Fullname :</label>
							<input name="fname" class="form-control" placeholder="Fullname" required>
						</div>

						<div class="form-group">
							<label>Email :</label>
							<input name="email" type="email" class="form-control" placeholder="Email" required>
						</div>

						<div class="form-group">
							<label>Date of Birth :</label>
							<input name="dob" type="text" class="form-control" placeholder="DOB" required>
						</div>

						<div class="form-group">
							<label>Country :</label>
							<select name="country" class="form-control"  required><option value=""></option><option value="Bulgaria">Bulgaria</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Egypt">Egypt</option><option value="Greece">Greece</option><option value="3">Italy</option><option value="Jordan">Jordan</option><option value="Lithuania">Lithuania</option><option value="Mauritius">Mauritius</option><option value="Mexico">Mexico</option><option value="Monaco">Monaco</option><option value="Netherland">Netherland</option><option value="Poland">Poland</option><option value="Romania">Romania</option><option value="Serbia">Serbia</option><option value="Taiwan">Taiwan</option><option value="Turkey">Turkey</option><option value="United Kingdom">United Kingdom</option></select>
						</div>
						
						
						<button class="btn btn-primary" style="float:right" type="submit">save</button>
						
					</form>
				</div>
				<div class="col-md-3">
				</div>
			</div>
		</div>