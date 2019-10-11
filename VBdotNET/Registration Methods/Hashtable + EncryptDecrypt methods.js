'easygen app
Imports System.Text
Imports System.Security.Cryptography
Imports System.IO
Imports System.Runtime.Serialization.Formatters.Binary

Public Class Form1
    Dim Registration As Hashtable

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        'Fill
        Registration = New Hashtable
        Registration.Add("Name", Encrypt("LICENSE FAILURE"))
        Registration.Add("Company", Encrypt("Please re-register this copy of easyGen"))
        Registration.Add("Serial", Encrypt("xxxx-xxxx-xxxx-xxxx"))
        Registration.Add("Install", Encrypt("LICENSE FAILURE"))

        Registration = Registration
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        'Save
        Dim serializationStream As Stream = File.Open("C:\takis.txt", FileMode.Create)
        Dim kk As New BinaryFormatter
        kk.Serialize(serializationStream, Me.Registration)
        serializationStream.Close()
    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click
        'Load
        Dim serializationStream As Stream = Nothing

        serializationStream = File.Open("C:\takis.txt", FileMode.Open)
        Dim formatter As New BinaryFormatter
        Registration = DirectCast(formatter.Deserialize(serializationStream), Hashtable)
        'If (Decrypt(Me.Registration.Item("Install").ToString) <> Me.GetInstallCode) Then
        '    flag = True
        'Else
        '    flag = Me.CheckRegistration
        'End If

        serializationStream.Close()
        Registration = Registration

        Dim name As String = Decrypt(Me.Registration.Item("Name").ToString)
        Dim company As String = Decrypt(Me.Registration.Item("Company").ToString)
        Dim serial As String = Decrypt(Me.Registration.Item("Serial").ToString)

        MsgBox(serial, MsgBoxStyle.Information)
    End Sub

    Public Shared Function Decrypt(ByVal pToDecrypt As String) As String
        Return Decrypt(pToDecrypt, "4Jkw9N3f")
    End Function

    Public Shared Function Decrypt(ByVal pToDecrypt As String, ByVal sKey As String) As String
        Dim provider As New DESCryptoServiceProvider
        Dim buffer As Byte() = New Byte((pToDecrypt.Length / 2) - 1) {}
        Dim i As Integer
        For i = 0 To (pToDecrypt.Length / 2) - 1
            Dim num2 As Integer = Convert.ToInt32(pToDecrypt.Substring((i * 2), 2), &H10)
            buffer(i) = CByte(num2)
        Next i
        provider.Key = Encoding.ASCII.GetBytes(sKey)
        provider.IV = Encoding.ASCII.GetBytes(sKey)
        Dim stream As New MemoryStream
        Dim stream2 As New CryptoStream(stream, provider.CreateDecryptor, CryptoStreamMode.Write)
        stream2.Write(buffer, 0, buffer.Length)
        stream2.FlushFinalBlock()
        Dim builder As New StringBuilder
        Dim num3 As Byte
        For Each num3 In stream.ToArray
            builder.Append(DirectCast(ChrW(num3), Char))
        Next
        Return builder.ToString
    End Function

    Public Shared Function Encrypt(ByVal pToEncrypt As String) As String
        Return Encrypt(pToEncrypt, "4Jkw9N3f")
    End Function

    Public Shared Function Encrypt(ByVal pToEncrypt As String, ByVal sKey As String) As String
        Dim provider As New DESCryptoServiceProvider
        Dim bytes As Byte() = Encoding.UTF8.GetBytes(pToEncrypt)
        provider.Key = Encoding.ASCII.GetBytes(sKey)
        provider.IV = Encoding.ASCII.GetBytes(sKey)
        Dim stream As New MemoryStream
        Dim stream2 As New CryptoStream(stream, provider.CreateEncryptor, CryptoStreamMode.Write)
        stream2.Write(bytes, 0, bytes.Length)
        stream2.FlushFinalBlock()
        Dim builder As New StringBuilder
        Dim num As Byte
        For Each num In stream.ToArray
            builder.AppendFormat("{0:X2}", num)
        Next
        Return builder.ToString
    End Function