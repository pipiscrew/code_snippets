'**************************************
' Name: Force textbox numeric only with 
'     API
' Description:Forces a textbox to numeri
'     c only
Had a need For this recently and none of the examples on PSC worked, so found this instead (just an FYI, it's Not my code)
' By: The Wicker Man
'
' Assumes:Found at: http://www.devx.com/
'     vb2themax/Tip/18946
'
'This code is copyrighted and has
' limited warranties.Please see http://w
'     ww.Planet-Source-Code.com/vb/scripts/Sho
'     wCode.asp?txtCodeId=61882&lngWId=1
'for details.
'**************************************

' Force a TextBox control to accept only
'     numeric digits
' Cancel the effect by passing Force = F
'     alse
'
' Note that it only accepts positive int
'     eger values


Private Declare Function GetWindowLong Lib "user32" Alias "GetWindowLongA" _ 
    (ByVal hWnd As Long, ByVal nIndex As Long) As Long


Private Declare Function SetWindowLong Lib "user32" Alias "SetWindowLongA" _
    (ByVal hWnd As Long, ByVal nIndex As Long, ByVal dwNewLong As Long) As Long


Sub ForceTextBoxNumeric(TextBox As TextBox, Optional Force As Boolean = True)
    Dim style As Long
    Const GWL_STYLE = (-16)
    Const ES_NUMBER = &H2000
    ' get current style
    style = GetWindowLong(TextBox.hWnd, GWL_STYLE)


    If Force Then
        style = style Or ES_NUMBER
    Else
        style = style And Not ES_NUMBER
    End If
    ' enforce new style
    SetWindowLong TextBox.hWnd, GWL_STYLE, style
End Sub
