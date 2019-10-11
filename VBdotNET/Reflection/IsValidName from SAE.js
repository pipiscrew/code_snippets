Private Function IsValidName(ByVal name As String) As Boolean
    If (name <> "<Module>") Then
        If Not Regex.IsMatch(name, "^[a-zA-Z_]{1}[0-9a-zA-Z_$.]*$") Then
            Return False
        End If
        If Me.chkRandomName.Checked Then
            Dim str As String
            For Each str In name.Split(New Char() { "."c })
                Dim flag As Boolean = Regex.IsMatch(str, "[0-9]")
                Dim flag2 As Boolean = Regex.IsMatch(str, "[a-zA-Z]")
                Dim flag3 As Boolean = ((str.Length = 1) OrElse (str.Length > 15))
                If ((flag AndAlso flag2) AndAlso flag3) Then
                    Return False
                End If
            Next
        End If
        If ((Me.chkRegex.Checked AndAlso Not String.IsNullOrEmpty(Me.txtRegex.Text)) AndAlso Regex.IsMatch(name, Me.txtRegex.Text)) Then
            Return False
        End If
    End If
    Return True
End Function

 
