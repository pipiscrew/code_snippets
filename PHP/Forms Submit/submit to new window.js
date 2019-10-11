                        <form action="inform_admin.php" method="post" target="_blank">
                            <input name="t" type="text" class="span12" placeholder="Title" required="required">
                            <input name="m" type="email" class="span12" placeholder="Email" required="required">
                            <select name="dep" style="width: 300px;background-color: #CCC">
                            	<option>General Enquire</option>
								<option>Marketing Department</option>
								<option>Technical Enquire</option>
								<option>Sales Department</option>
								<option>B2B Enquire</option>
                            </select>
                            <textarea name="d"  rows="10" class="span12" required="required"></textarea>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        
           
//inform_admin.php
<?php



////enable global exception handler
//include ('../Debug.php');
//
////Catch
//Debug::register();
//
//echo "sdf";
//exit;
//
if(!isset($_POST["t"]) || !isset($_POST["m"]) || !isset($_POST["d"]) || !isset($_POST["dep"]))
{
	echo "ERROR 0101010";
	exit;
}
else
{
	if(sendMail($_POST["t"],$_POST["m"],$_POST["d"],$_POST["dep"])){
		echo "feedback sent";
	}
	else
	{
		echo "there was an error, please try again!";
	}



}





function sendMail($title, $m, $detail,$dep)
{

	$message .= 'User Mail : ' . $m;
	$message .= "\r\nDepartment : " . $dep;
	$message .= "\r\nTitle : " . $title;
	$message .= "\r\nDetail : " . $detail;

	$title="website_feedback-".$title;

	$updated_subject = "=?UTF-8?B?" . base64_encode($title) . "?=";

return mail("info@x.com", $updated_subject, $message);

//	if (mail("c.x@x.com", $updated_subject, $message, $headers))
//		return true ;
//		else 
//		return false;
}


?>