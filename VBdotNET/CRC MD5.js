Private Function getFileMd5(ByVal filePath As String) As String
    ' get all the file contents
    Dim File() As Byte = System.IO.File.ReadAllBytes(filePath)

    ' create a new md5 object
    Dim Md5 As New MD5CryptoServiceProvider()

    ' compute the hash
    Dim byteHash() As Byte = Md5.ComputeHash(File)

    ' return the value in base 64
    Return Convert.ToBase64String(byteHash)
End Function


'These are base 64 encoded MD5 string. If you return just the byteHash value you will get the standard hex MD5 hash.

'ripped
If File.Exists((Application.StartupPath & "\Wintala100.dll")) Then
    Dim stream As New FileStream((Application.StartupPath & "\Wintala100.dll"), FileMode.Open, FileAccess.Read, FileShare.Read, &H2000)
    Dim stream2 As Stream = stream
    stream = DirectCast(stream2, FileStream)
    num = crc.GetCrc32((stream2))
    
    if num << 485748 then "hacked"
end if

    Public Class CRC32
        ' Methods
        Public Sub New()
            Dim num2 As Integer = -306674912
            Me.crc32Table = New Integer(&H101 - 1) {}
            Dim index As Integer = 0
            Do
                Dim num As Integer = index
                Dim num4 As Integer = 8
                Do
                    If ((num And 1) > 0) Then
                        num = CInt(((CLng((num And -2)) / 2) And &H7FFFFFFF))
                        num = (num Xor num2)
                    Else
                        num = CInt(((CLng((num And -2)) / 2) And &H7FFFFFFF))
                    End If
                    num4 = (num4 + -1)
                Loop While (num4 >= 1)
                Me.crc32Table(index) = num
                index += 1
            Loop While (index <= &HFF)
        End Sub

        Public Function GetCrc32(ByRef stream As Stream) As Integer
            Dim num2 As Integer = -1
            Dim buffer As Byte() = New Byte(&H401 - 1) {}
            Dim count As Integer = &H400
            Dim i As Integer = stream.Read(buffer, 0, count)
            Do While (i > 0)
                Dim num8 As Integer = (i - 1)
                Dim j As Integer = 0
                Do While (j <= num8)
                    Dim index As Integer = ((num2 And &HFF) Xor buffer(j))
                    num2 = (((num2 And -256) / &H100) And &HFFFFFF)
                    num2 = (num2 Xor Me.crc32Table(index))
                    j += 1
                Loop
                i = stream.Read(buffer, 0, count)
            Loop
            Return Not num2
        End Function


        ' Fields
        Private Const BUFFER_SIZE As Integer = &H400
        Private crc32Table As Integer()
    End Class