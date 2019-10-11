//http://stackoverflow.com/a/11441116

<script language='Javascript' runat='server'>
  function jsGetUTCTime() {
    var d = new Date();
    return d.toUTCString();
  }
</script>


<script language='VBScript' runat='server'>
Function getUTCTime()
    ' Use JScript to get the current GMT time stamp
    getUTCTime = jsGetUTCTime()
End Function
</script>

or use somewhere <%= jsGetUTCTime() %>