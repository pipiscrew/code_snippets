//http://www.basic4ppc.com/forum/basic4android-updates-questions/18179-pass-street-address-navigation.html

Sub cAddress_LongClick

Dim Intent1 As Intent
Dim URI As String

If EmpLoc.Text = "Getting Location..." Then
ToastMessageShow("Please Wait for GPS Location",True)
Return
End If


URI = "google.navigation:q=" & cAddress.Text & "+" & City.Text & "+" & State.Text & "+" & Zip.Text

Intent1.Initialize(Intent1.ACTION_VIEW,URI)

Intent1.SetComponent("google.navigation")

StartActivity(Intent1)

End Sub
