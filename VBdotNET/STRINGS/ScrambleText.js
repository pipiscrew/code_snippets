    'Encrypt
    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        TextBox2.Text = ScrambleCode(TextBox1.Text)
        TextBox1.Text = ""
    End Sub

    'Decrypt
    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        TextBox1.Text = DescrambleCode(TextBox2.Text)
    End Sub

    Public Shared Function ScrambleCode(ByVal stringValue As String) As String
        If (stringValue = "") Then
            Return stringValue
        End If
        Dim str2 As String = ""
        Do While (stringValue.Length > 0)
            str2 = (str2 & stringValue.Substring((stringValue.Length - 1), 1))
            stringValue = stringValue.Substring(0, (stringValue.Length - 1))
            If (stringValue.Length > 0) Then
                str2 = (str2 & stringValue.Substring(0, 1))
                stringValue = stringValue.Substring(1, (stringValue.Length - 1))
            End If
        Loop
        Return str2
    End Function

    Public Shared Function DescrambleCode(ByVal stringValue As String) As String
        If (stringValue = "") Then
            Return stringValue
        End If
        Dim str2 As String = ""
        Dim str3 As String = ""
        Do While (stringValue.Length > 0)
            str3 = (stringValue.Substring(0, 1) & str3)
            stringValue = stringValue.Substring(1, (stringValue.Length - 1))
            If (stringValue.Length > 0) Then
                str2 = (str2 & stringValue.Substring(0, 1))
                stringValue = stringValue.Substring(1, (stringValue.Length - 1))
            End If
        Loop
        Return (str2 & str3)
    End Function