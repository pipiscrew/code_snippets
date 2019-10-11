        If tmp <> "" Then
            TextBox2.Text = tmp

            Dim flArr() As String
            flArr = GetFiles(TextBox2.Text, "*.AVI;*.mpg")

            For i As Integer = 0 To UBound(flArr)
                TextBox1.Text = TextBox1.Text & flArr(i) & vbCrLf
            Next
        End If
    End Sub

    Public Shared Function GetFiles(ByVal path As String, ByVal searchPattern As String) As String()
        Dim m_arExt As String() = searchPattern.Split(";")

        Dim strFiles As New List(Of String)()
        For Each filter As String In m_arExt
            strFiles.AddRange(System.IO.Directory.GetFiles(path, filter))
        Next
        Return strFiles.ToArray()
    End Function