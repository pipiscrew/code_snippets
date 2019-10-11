        Dim reg As Regex

        reg = New Regex("^[0-9.,]*$")
        If reg.Match(txtrating.Text).Success Then
            MsgBox("only digit")
        Else
            MsgBox("bad")
        End If
        
        
        check if txtrating contain 0-9 + . + ,