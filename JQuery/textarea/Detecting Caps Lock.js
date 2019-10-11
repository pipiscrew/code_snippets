//http://jasongaylord.com/blog/detecting-caps-lock-with-javascript

<html>
<head>
  <title>Test Caps Lock</title>
</head>
<body>
  <div id="capsLockWarning" style="font-weight: bold; color: maroon; margin: 0 0 10px 0; display: none;">Caps Lock is on.</div>
  Username: <input type="text" id="username" /><br/>
  Password: <input type="password" id="password" />
</body>
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script language="javascript">
  function isCapsLockOn(e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    var shiftKey = e.shiftKey ? e.shiftKey : ((keyCode == 16) ? true : false);
    return (((keyCode >= 65 && keyCode <= 90) && !shiftKey) || ((keyCode >= 97 && keyCode <= 122) && shiftKey))
  }
 
  $(document).ready(function() {
    $(":password").keypress(function(e) {
      if (isCapsLockOn(e))
        $("#capsLockWarning").show();
      else
        $("#capsLockWarning").hide();
    });                           
  });
</script>
</html>