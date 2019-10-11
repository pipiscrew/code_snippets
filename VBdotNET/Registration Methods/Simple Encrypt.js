    Private Function veteran1(ByVal p0 As String) As String
        Dim str As String = Nothing
        Dim str2 As String = Nothing
        str = Convert.ToBase64String(Encoding.ASCII.GetBytes(p0))
        str2 = "d2ViY2hhbGxlbmdlQGhvdG1ha"
        str = str.Replace("=", "")
        If (str.Length > &H19) Then
            str = str.Substring(0, &H19)
        Else
            str = (str & str2).Substring(0, &H19)
        End If
        Return str.ToUpper.Insert(5, "-").Insert(11, "-").Insert(&H11, "-").Insert(&H17, "-")
    End Function