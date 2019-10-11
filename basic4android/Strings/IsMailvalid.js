//http://www.basic4ppc.com/forum/basic4android-updates-questions/17953-check-if-string-mail-adress.html

Dim Valid As Boolean

Valid = Regex.IsMatch("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "user.name@server.com")
                
If Valid Then
                
   Msgbox("Valid Email Address", "")
                            
Else
                
   Msgbox("Invalid Email Address", "")
                            
End If