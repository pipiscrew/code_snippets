Public Function GenerateRandomString(ByVal Length As Integer) As String
    Dim chArray As Char() = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".ToCharArray
    Dim builder As New StringBuilder(Length)
    Dim random As New Random(DateAndTime.Now.Millisecond)
    Dim num2 As Integer = Length
    Dim i As Integer = 1
    Do While (i <= num2)
        builder.Append(chArray(random.Next(0, (chArray.Length - 1))))
        i += 1
    Loop
    Return builder.ToString
End Function

 
'or simple
Private Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim str As String = ""
    Dim random As New Random
    Dim num2 As Integer = (Me.ComboBox1.SelectedIndex + 3)
    Dim num4 As Integer = num2
    Dim i As Integer = 1
    Do While (i <= num4)
        Dim num3 As Integer
        If Me.CheckBox1.Checked Then 'with include a numeric
            If (random.Next(2) = 1) Then
                num3 = random.Next(&H19)
                str = (str & StringType.FromChar(Strings.Chr((num3 + &H61))))
            Else
                num3 = random.Next(9)
                str = (str & StringType.FromInteger(num3))
            End If
        Else
            num3 = random.Next(&H19)
            str = (str & StringType.FromChar(Strings.Chr((num3 + &H61))))
        End If
        i += 1
    Loop
    Me.TextBox1.Text = str
End Sub

 

 
