//subscribe.php
<?php
    if (!isset($_POST["fname"]) || !isset($_POST["email"]) || !isset($_POST["dob"]) || !isset($_POST["country"]))
    {
        die("error 1x082347");
    }
 
    $line = $_POST["fname"].",".$_POST["email"].",".$_POST["dob"].",".$_POST["country"]."\n";
 
    $log_file = "dbase.txt";
 
    if (file_exists($log_file))
    {
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
?>


//test.html
<script>
    function revalidate(){
        var fname = $("[name=fname]").val();
        var email = $("[name=email]").val();
        var dob = $("[name=dob]").val();
 
        if (fname.indexOf(",")>-1 || email.indexOf(",")>-1 || dob.indexOf(",")>-1){
            alert("Commas not allowed");
            return false;
        }
        else
         return true;
    }
</script>
 
<form method="post" action="subscribe.php" onsubmit="return revalidate();">
 
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