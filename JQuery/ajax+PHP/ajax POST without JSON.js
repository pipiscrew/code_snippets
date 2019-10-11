					    $.ajax(
					    {
					        url : formURL,
					        type: "POST",
					        data : postData,
					        success:function(data, textStatus, jqXHR)
					        {
					            if (data=="00000")
									//refresh
									location.reload(true);
								else if  (data=="marketplan")
								{
									alert("Sorry, marketing plan exists in this period!\r\n\r\nTry again using different dates!")
									return;
								}
					            else
					                alert("ERROR");
					        },
					        error: function(jqXHR, textStatus, errorThrown)
					        {
					            alert("ERROR - connection error");
					        }
					    });
					    
//where at PHP
if (!isset($_POST['date_start']) || !isset($_POST['date_end']) || !isset($_POST['comment'])){
	echo "error010101010";
	return;
}

if ($v>0)
{
	echo "marketplan";
	exit;
}
	
	echo $stmt->errorCode();