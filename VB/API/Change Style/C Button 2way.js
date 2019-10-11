Public Sub cButtons(Identifier As String) 


    For Each Control In Me 'browse trough all the control in the form


        If LCase(Left(Control.Name, Len(Identifier))) = LCase(Identifier) Then 'if the control name begin by the identifier
            SendMessage Control.hWnd, &HF4&, &H0&, 0& ' send the message
        End If
    Next Control 'do the Loop
End Sub
