<script type='text/javascript'>
function validateForm(){
        if(document.getElementById("productTitle").value == 0) {
                alert('Please fill Product Name');
                document.getElementById("productTitle").focus()
                return false;
        }
        if(document.getElementById("productBBcode").value == 0) {
                alert('Please fill BBcode');
                document.getElementById("productBBcode").focus()
                return false;
        }
        
        alert('true');
        return true;        
}
</script>



kai to fwnazoyme :
<input type="submit" name="cmdSave" id="cmdUpdate" value="Update" onclick="return validateForm();" />