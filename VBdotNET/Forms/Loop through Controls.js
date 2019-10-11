        For i As Integer = Me.Controls.Count - 1 To 0 Step -1
            If TypeOf Me.Controls(i) Is Label Then
                Me.Controls.RemoveAt(i)
            End If
        Next