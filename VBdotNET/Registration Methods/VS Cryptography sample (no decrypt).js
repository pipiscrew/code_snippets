Imports System.Security.Cryptography
Imports System.IO
Imports System.Text
Imports Microsoft.Win32

Public Class Form1


    Private Sub Button1_Click_1(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        If Me.regist_code.Text.ToString() = Me.Encrypt("1") Then
            If Me.RegCDRomSn(Me.regist_code.Text.ToString()) Then
                MessageBox.Show("Good Boy")
            Else
                MessageBox.Show("Bad Boy Registry potected")
            End If
        Else
            MsgBox(Encrypt(regist_code.Text))
            'MessageBox.Show("Wrong serial")
        End If
    End Sub

    Protected Function Encrypt(ByVal pToEncrypt As String) As String
        Dim str As String
        Dim buffer As Byte() = New Byte() {&H19, &H17, &H18, &H19, &H17, &H11, _
         &H15, &H18}
        Dim buffer2 As Byte() = New Byte() {&H17, &H19, &H18, &H16, &H17, &H11, _
         &H15, &H18}

        Dim provider As New DESCryptoServiceProvider()
        Try
            Dim bytes As Byte() = Encoding.Unicode.GetBytes(pToEncrypt)
            provider.Key = buffer
            provider.IV = buffer2
            Dim stream As New MemoryStream()
            Dim stream2 As New CryptoStream(stream, provider.CreateEncryptor(), CryptoStreamMode.Write)
            stream2.Write(bytes, 0, bytes.Length)
            stream2.FlushFinalBlock()
            Dim builder As New StringBuilder()
            For Each num As Byte In stream.ToArray()
                builder.AppendFormat("{0:X2}", num)
            Next
            builder.ToString()
            str = builder.ToString()
        Catch
            str = pToEncrypt
        Finally
            provider = Nothing
        End Try
        Return str
    End Function


    Public Function RegCDRomSn(ByVal sn As String) As Boolean
        Try
            Registry.LocalMachine.OpenSubKey("Software", True).CreateSubKey("jokemaster").SetValue("jokemaster", sn)
            Return True
        Catch
            Return False
        End Try
    End Function


End Class
