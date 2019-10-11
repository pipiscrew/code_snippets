'2textboxes (name + sn)
'2buttons   (validate + generator)

Imports System.Text
Imports System.Security.Cryptography

Public Class Form1

    Private Sub Validate_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Validate.Click
        If Not (GetMD5((TextBox2.Text & "SGS3-DSWD-W8Y8-U3SD-A7AE")) = TextBox3.Text.Replace("-", "").ToUpper) Then
            MsgBox("No valid", MsgBoxStyle.Information)
            Exit Sub
        End If

        MsgBox("Valid!", MsgBoxStyle.Information)


        'MsgBox(GetMD5("veteran@AHCU.netSGS3-DSWD-W8Y8-U3SD-A7AE"))
        '---------------------------
        '        WindowsApplication1()
        '---------------------------
        '3F1367E400731017C8BB28B981459EFF
        '52C0285275D8CF8A03F6DB67610EB3E7
        '---------------------------
        '        OK()
        '---------------------------

        'veteran@veteran.net
    End Sub

    Public Shared Function GetMD5(ByVal input As String) As String
        Dim md As MD5 = MD5.Create
        Dim bytes As Byte() = Encoding.UTF8.GetBytes(input)
        Dim buffer2 As Byte() = md.ComputeHash(bytes)
        Dim str As String = ""
        Dim num As Byte
        For Each num In buffer2
            str = (str & String.Format("{0:X2}", num))
        Next
        Return str
    End Function

    Private Sub GenerateKey4thisname_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles GenerateKey4thisname.Click
        MsgBox(GetMD5(TextBox2.Text & "SGS3-DSWD-W8Y8-U3SD-A7AE"))
    End Sub
End Class