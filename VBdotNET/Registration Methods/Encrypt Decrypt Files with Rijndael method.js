Imports System.IO
Imports System.Security.Cryptography
Imports System.Security

Public Class Form1

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim key As Byte() = New Byte() {&H16, 6, &H77, &HFC, &H86, &HE1, &H95, &HEC, &H35, &H74, &H72, 170, &HA5, &H3B, &HB6, 180, &H6C, &H20, 4, 220, &H5E, &H7E, 10, &H3E, &HC0, &HAE, 15, &HC0, &HBD, &H59, &HDF, &H7E}
        Dim iv As Byte() = New Byte() {&H18, &H51, &HF2, &H8A, &HED, &H20, &HED, 9, &HD0, &H95, 2, &HCB, &HAD, &H27, &H39, &H12}

        'EncryptTextToFile("takis maksi soylatakis maksi soylatakis maksi soylatakis maksi soylatakis maksi soyla", "c:\test.txt", key, iv)
        MsgBox(DecryptTextFromFile("c:\test.txt", key, iv))
    End Sub

    Private Shared Sub EncryptTextToFile(ByVal Data As String, ByVal FileName As String, ByVal Key As Byte(), ByVal IV As Byte())
        Try
            Dim stream As FileStream = File.Open(FileName, FileMode.OpenOrCreate)
            Dim rijndael As Cryptography.Rijndael = rijndael.Create
            Dim stream2 As New CryptoStream(stream, rijndael.CreateEncryptor(Key, IV), CryptoStreamMode.Write)
            Dim writer As New StreamWriter(stream2)
            Try
                writer.WriteLine(Data)
            Catch exception As Exception
                'Log.LogError(exception.ToString)
            Finally
                writer.Close()
                stream2.Close()
                stream.Close()
            End Try
        Catch exception2 As CryptographicException
            'Log.LogError(exception2.ToString)
        Catch exception3 As UnauthorizedAccessException
            'Log.LogError(exception3.ToString)
        End Try
    End Sub

    Private Shared Function DecryptTextFromFile(ByVal FileName As String, ByVal Key As Byte(), ByVal IV As Byte()) As String
        Try
            Dim stream As FileStream = File.Open(FileName, FileMode.OpenOrCreate)
            Dim rijndael As Rijndael = Rijndael.Create
            Dim stream2 As New CryptoStream(stream, rijndael.CreateDecryptor(Key, IV), CryptoStreamMode.Read)
            Dim reader As New StreamReader(stream2)
            Dim str As String = Nothing
            Try
                str = reader.ReadLine
            Catch exception As Exception
                '  Log.LogError(exception.ToString)
            Finally
                reader.Close()
                stream2.Close()
                stream.Close()
            End Try
            Return str
        Catch exception2 As CryptographicException
            '    Log.LogError(exception2.ToString)
            Return Nothing
        Catch exception3 As UnauthorizedAccessException
            '     Log.LogError(exception3.ToString)
            Return Nothing
        End Try
    End Function


    Private Shared Sub LogMsg(ByVal msg As String)
        Dim writer As New StreamWriter("c:\err.txt", True)
        writer.WriteLine((DateTime.Now.ToString & " - " & msg))
        writer.Close()
    End Sub





End Class
