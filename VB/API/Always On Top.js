'**************************************
' Name: Always On Top
' Description:Keeps Your Form On Top
This Is Really Kewl Because You Can Just Use A False attribuite To Set it as Not on top instead of using 2 functions
' By: Adam Jacob Muller
'
'This code is copyrighted and has' limited warranties.Please see http://w
'     ww.Planet-Source-Code.com/xq/ASP/txtCode
'     Id.2651/lngWId.1/qx/vb/scripts/ShowCode.
'     htm'for details.'**************************************



Private Declare Function SetWindowPos Lib "user32" (ByVal hwnd As Long, ByVal hWndInsertAfter As Long, ByVal x As Long, ByVal y As Long, ByVal cx As Long, ByVal cy As Long, ByVal wFlags As Long) As Long
Private Const SWP_NOMOVE = &H2

Private Const SWP_NOSIZE = &H1

Private Const HWND_TOPMOST = -1

Private Const HWND_NOTOPMOST = -2


Public Sub AlwaysOnTop(myfrm As Form, SetOnTop As Boolean)

    If SetOnTop Then
        lFlag = HWND_TOPMOST
    Else
        lFlag = HWND_NOTOPMOST
    End If
    SetWindowPos myfrm.hwnd, lFlag, 0, 0, 0, 0, SWP_NOMOVE Or SWP_NOSIZE
End Sub

ex. AlwaysOnTop form1,true

h apla... gia always on top

SetWindowPos Me.hwnd, -1, 0, 0, 0, 0, &H2 Or &H1

me to api declaration fysika