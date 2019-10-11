'source
'http://msdn.microsoft.com/en-us/library/t4zch4d2%28VS.90%29.aspx

To access the Code Editor window for application events

   1. With a project selected in Solution Explorer, click Properties on the Project menu.
   2. Click the Application tab.
   3. Click the View Application Events button to open the Code Editor


'prwta paei edw kai meta
'to programma synexizei sthn ektelesh toy orismenoy StartUp Object
'this is good to check prevInstance




Private Sub MyApplication_Startup( _
    ByVal sender As Object, _
    ByVal e As Microsoft.VisualBasic.ApplicationServices.StartupEventArgs _
) Handles Me.Startup
    ' Get the splash screen.
    Dim splash As SplashScreen1 = CType(My.Application.SplashScreen, SplashScreen1)
    ' Display current status information.
    splash.Status = "Current user: " & My.User.Name
End Sub


modded:
Private Sub MyApplication_Startup( _
    ByVal sender As Object, _
    ByVal e As Microsoft.VisualBasic.ApplicationServices.StartupEventArgs _
) Handles Me.Startup
    ' Get the splash screen.
    Dim splash As new Form2

	splash.show
End Sub





''''me ayto pernoyme to startup patch 
Dim tmp$ = Windows.Forms.Application.StartupPath & "\veteran.lic"

'terminate the prog
e.cancel