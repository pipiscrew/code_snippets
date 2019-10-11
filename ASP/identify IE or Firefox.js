If InStr(request.servervariables("HTTP_USER_AGENT"), "MSIE") > 0 Then
                LeaveBreak ="<br>" ' Fix for IE to leave a break after the title so that the author doesn't collide.
Else
                LeaveBreak =""
End If
