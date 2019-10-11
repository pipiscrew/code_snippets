Private Function GetURL(dURL$) As String
Dim oHttp As Object

Set oHttp = CreateObject("Microsoft.XMLHTTP")

oHttp.open "GET", dURL, False

oHttp.send

GetURL = oHttp.responseText

Set oHttp = Nothing
End Function

h sta references Microsoft XML v6 is the last version


POST METHOD

    Dim oHttp As Object
    
    Set oHttp = CreateObject("Microsoft.XMLHTTP")
    
    oHttp.Open "POST", "http://www.divshare.com/upload", False
    oHttp.setRequestHeader "Content-Type", "application/x-www-form-urlencoded"
    oHttp.send "upload_method=progress&email_to=julie@gmail.com%2C+patrick@aol.com&gallery_id=0&terms=on&data_form_sid=" & Mid(tmp, InStrRev(tmp, "=") + 1)
    debug.print oHttp.responseText