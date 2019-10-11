        str3 = "391.4C5.4AF.457.160.4E6.457.4DB.507.483.4E6.457.44C.160.462.483.4A4.457.4F1.160.42B.4E6.457.160.4AF.483.4F1.4F1.483.4BA.46D.160.4C5.4E6.160.4BA.4C5.4FC.160.51D.478.457.4E6.457.160.4FC.478.457.533.160.4F1.478.4C5.507.4A4.44C.160.436.457.16B"
        Interaction.MsgBox(Dec((str3)), MsgBoxStyle.OkOnly, Nothing)


    Public Shared Function Decrypt(ByRef strdata As String) As String
        Dim array As String() = Nothing
        array = Strings.Split(strdata, ".", -1, CompareMethod.Binary)
        Dim str2 As String = Nothing
        Dim num2 As Integer = Information.UBound(array, 1)
        Dim i As Integer = Information.LBound(array, 1)
        Do While (i <= num2)
            ' str2 = str2 & Chr(array(i))
            'str2 = (str2 & (Strings.Chr(CInt(Math.Round(CDbl((CDbl(CInt(("&h" & array(i)))) / 11)))))))
            str2 = (str2 & Chr(("&h" & array(i)) / 11))
            i += 1
        Loop
        Return str2
    End Function


    Private Function Encrypt(ByRef strdata As String) As String
        Dim str2 As String = Nothing
        Dim num2 As Integer = Strings.Len(CStr(strdata))
        Dim num3 As Integer = num2
        Dim i As Integer = 1
        Do While (i <= num3)
            str2 = str2 & Hex((Asc(Mid(strdata, i, 1)) * 11)) & "."
            i += 1
        Loop
        Return str2 'here must remove the last .
    End Function