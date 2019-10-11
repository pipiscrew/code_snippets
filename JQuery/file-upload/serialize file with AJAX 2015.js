//jQuery doesnt support POST file input, today we will use #jQuery Form Plugin#
//using
http://jquery.malsup.com/form/#file-upload

<script type='text/javascript' src="assets/jquery.form.min.js"></script>
 
<script>
$(function() {
    $('#formAFFILIATED').ajaxForm({ 
        beforeSend: function() {
          loading.appendTo($('#formAFFILIATED'));
        },
         complete: function(xhr) {
            loading.remove();
             
            data = xhr.responseText;
             
            console.log(data);
            loading.remove();
 
            if (data=="00000")
            {   //refresh
                $('#affiliated_tbl').bootstrapTable('refresh');
 
                //close modal
                $('#modalAFFILIATED').modal('toggle');
            }
 
        }
    }); 
}); 
</script>
 
<form id="formAFFILIATED" role="form" method="post" action="tab_affiliated_save.php">
             
    <div class='form-group'>
        <label>affiliated_title :</label>
        <input name='affiliated_title' class='form-control' placeholder='affiliated_title'>
    </div>
 
    <input type="file" name="affiliated_fileToUpload" id="affiliated_fileToUpload">
 
    <input name="affiliatedFORM_updateID" id="affiliatedFORM_updateID" class="form-control" style="display:none;">
 
    <div class="modal-footer">
        <button id="bntCancel_AFFILIATED" type="button" class="btn btn-default" data-dismiss="modal">
            cancel
        </button>
        <button id="bntSave_AFFILIATED" class="btn btn-primary" type="submit" name="submit">
            save
        </button>
    </div>
</form>


//php
//image
//validate is true image
if (getimagesize($_FILES["affiliated_fileToUpload"]["tmp_name"])==0){
    echo "Sorry, there was an error uploading your file.";
    return;
}
 
if (sizeof($_FILES)==0){
    echo "Please, choose a file";
    return;
}
 
//when isnot required field
if (sizeof($_FILES)) {
    $target_dir = "../affiliated_img/"; // a dir back
    $target_file = $target_dir . basename($_FILES["affiliated_fileToUpload"]["name"]);
 
    if (move_uploaded_file($_FILES["affiliated_fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
//image
.
.
.
//sql transaction
echo $stmt->errorCode();


//advenced use php
$stmt->execute();
 
$res = $stmt->errorCode();


if ($res=="00000")
{
	if ($trans==1)
		$filename = $db->lastInsertId();
	else 
		$filename = $_POST['affiliatedFORM_updateID'];
}
else 
	echo $res;
 
//image
if (sizeof($_FILES)) {
	$target_dir = "../affiliated_img/";
	$target_file = $target_dir . $filename.".jpg";

	if (move_uploaded_file($_FILES["affiliated_fileToUpload"]["tmp_name"], $target_file)) {
	   // echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
	} else {
	   // echo "Sorry, there was an error uploading your file.";
	}
}
//image

echo $res;