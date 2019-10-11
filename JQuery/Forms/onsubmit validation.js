<script>
function checkRegistration(){
    var form_valid = (document.getElementById('some_input').value == 'google');
    if(!form_valid){
        alert('Given data is incorrect');
        return false;
    }
    return true;
}
</script>
<form onsubmit="return checkRegistration()" method="get" action="http://google.com">
    Write google to go to google..<br/>
    <input type="text" id="some_input" value=""/>
    <input type="submit" value="google it"/>
</form>