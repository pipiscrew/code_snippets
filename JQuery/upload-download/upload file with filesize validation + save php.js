//http://www.pipiscrew.com/2015/03/phpjs-submit-a-file-w-form/
//http://www.w3schools.com/php/php_file_upload.asp
//browser compatibility problem – http://portfolio.planetjon.ca/2014/01/26/submit-file-input-via-ajax-jquery-easy-way/
//http://www.w3.org/TR/html-markup/input.file.html

//index.html
<script type="text/javascript">
 
    //custom filesize validation
    function checkSize(max_size) {
        var input = document.getElementById("cvfile");
 
        if(input.files && input.files.length == 1)  {
            if (input.files[0].size > max_size) {
                alert("The file must be less than " + (max_size/1024/1024) + "MB");
                return false;
            }
        }
 
        return true;
    }
</script>
 
<form name="cv" action="upload.php" method="post" enctype="multipart/form-data" onsubmit="return checkSize(2097152)">
 
    <input id='dob' name='dob' type="date" min='1979-01-01' max='1996-01-01' class='form-control' placeholder='dob' required autofocus></div>
    <input id='city' name='city' type="text" class='form-control' placeholder='city' required>
    <input id='telephone' name='telephone' type='tel' class='form-control' placeholder='tel' required>
    <input id='portofolio' name='portofolio' type='url' class='form-control' placeholder='portofolio url'>
    <input class='form-control' type="file" name="cvfile" id="cvfile" size="40" accept="application/pdf,application/msword, application/vnd.ms-excel,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.openxmlformats-officedocument.presentationml.presentation,,application/vnd.openxmlformats-officedocument.wordprocessingml.document , text/plain, application/pdf, image/*" required>
 
    <button id="btn" class="btn btn-primary btn-large" type="submit" name="submit">
        Submit
    </button>
 
</form>



//upload.php
<?php
 
if (!isset($_POST["dob"]) || !isset($_POST["city"]) || !isset($_POST["telephone"]) || !isset($_FILES["cvfile"]) || !isset($_POST["portofolio"]))
{
    die("error invalid input");
}
 
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["cvfile"]["name"]);
 
if (move_uploaded_file($_FILES["cvfile"]["tmp_name"], $target_file)) {
    echo "The file ". basename( $_FILES["cvfile"]["name"]). " has been uploaded.";
} else {
    echo "Sorry, there was an error uploading your file.";
}
?>



//ex2
//**********************************************************************************************************

//when tried to serialize the form with jQuery, weird things happened, solution submit natural the form.

//index.html
<script type="text/javascript">
 
    function submitform()
    {//when user press Check anchor
        //your custom code here, submit, without jQ help! Plain via form name!
        document.cv.submit();
    }
 
    //custom filesize validation
    function checkSize(max_size) {
        var input = document.getElementById("cvfile");
 
        if(input.files && input.files.length == 1)  {
            if (input.files[0].size > max_size) {
                alert("The file must be less than " + (max_size/1024/1024) + "MB");
                return false;
            }
        }
 
        return true;
    }
</script>
 
<form name="cv" action="upload.php" method="post" enctype="multipart/form-data" onsubmit="return checkSize(2097152)">
 
    <input id='dob' name='dob' type="date" min='1979-01-01' max='1996-01-01' class='form-control' placeholder='dob' required autofocus></div>
    <input id='city' name='city' type="text" class='form-control' placeholder='city' required>
    <input id='telephone' name='telephone' type='tel' class='form-control' placeholder='tel' required>
    <input id='portofolio' name='portofolio' type='url' class='form-control' placeholder='portofolio url'>
    <input class='form-control' type="file" name="cvfile" id="cvfile" size="40" accept="application/pdf,application/msword, application/vnd.ms-excel,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.openxmlformats-officedocument.presentationml.presentation,,application/vnd.openxmlformats-officedocument.wordprocessingml.document , text/plain, application/pdf, image/*" required>
 
<a href="javascript: submitform()" class="btn btn-primary btn-lg">Check</a>
 
<!-- WARNING SHOULD NOT BE TYPE SUBMIT (OTHERWISE CONFLICT WITH THE JS CALL)
        <button id="btn" class="btn btn-primary btn-large" type="submit" name="submit">
            Submit
        </button>-->
 
</form>