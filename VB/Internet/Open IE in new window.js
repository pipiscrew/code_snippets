Private Sub RedirectTo(URL$)
On Error Resume Next

Dim IEN As Object
Set IEN = CreateObject("InternetExplorer.Application")

IEN.Visible = True
IEN.Navigate URL

Set IEN = Nothing
End Sub
