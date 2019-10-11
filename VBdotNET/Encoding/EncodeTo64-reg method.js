prepei na kanoyme import to System.Management

Imports System.Management.ManagementObjectCollection
Imports System.Management
Imports System.Text
Imports System.Convert
Imports System.Text.Encoding
Imports System.Security.Cryptography
Imports System
Imports System.IO
Imports System.Xml


Public Class Form1

    Private Function GetID() As String
        Dim toEncode As String = Nothing
        Dim str As String = Nothing
        Dim enumerator As ManagementObjectEnumerator = Nothing
        Dim str3 As String = Nothing
        Dim obj2 As ManagementObject = Nothing
        Dim str4 As String = Nothing
        Dim current As ManagementObject = Nothing
        Dim class2 As ManagementClass = Nothing
        str3 = String.Empty
        class2 = New ManagementClass("win32_processor")
        enumerator = class2.GetInstances.GetEnumerator
        Try
Label_003A:
            If enumerator.MoveNext Then
                current = DirectCast(enumerator.Current, ManagementObject)
                If Not (str3 = "") Then
                    GoTo Label_003A
                End If
                str3 = current.Properties.Item("processorID").Value.ToString
            End If
        Finally
            Dim disposable As IDisposable = enumerator
            If (Not disposable Is Nothing) Then
                disposable.Dispose()
            End If
        End Try
        obj2 = New ManagementObject(("win32_logicaldisk.deviceid=""" & "C" & ":"""))
        obj2.Get()
        str4 = obj2.Item("VolumeSerialNumber").ToString
        str = String.Format("{0}:{1}", str3, str4)
        str = Me.ToMD5Hex(str)
        toEncode = String.Format("{0}::{1}", Environment.MachineName, str)
        Return EncodeTo64(toEncode)
    End Function


    Private Function EncodeTo64(ByVal toEncode As String) As String
        Dim encoding__1 As ASCIIEncoding = Nothing
        encoding__1 = New ASCIIEncoding()
        Return System.Convert.ToBase64String(Encoding.ASCII.GetBytes(toEncode))
    End Function


    Private Function ToMD5(ByVal str As String) As String
        Dim bytes As Byte() = Nothing
        Dim encoding As ASCIIEncoding = Nothing
        bytes = MD5.Create.ComputeHash(System.Text.Encoding.Default.GetBytes(str))
        encoding = New ASCIIEncoding
        Return System.Text.Encoding.ASCII.GetString(bytes)

    End Function

    Private Function ToMD5Hex(ByVal str As String) As String
        Dim builder As StringBuilder = Nothing
        Dim buffer As Byte() = Nothing
        buffer = MD5.Create.ComputeHash(Encoding.Default.GetBytes(str))
        builder = New StringBuilder
        Dim i As Integer
        For i = 0 To buffer.Length - 1
            builder.Append(buffer(i).ToString("x2"))
        Next i
        Return builder.ToString
    End Function


    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        TextBox1.Text = GetID()
    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        TextBox2.Text = EncodeTo64(Me.TextBox1.Text)

    End Sub
End Class
