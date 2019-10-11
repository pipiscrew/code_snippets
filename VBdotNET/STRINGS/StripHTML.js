Public Function StripHTML(ByVal str As String) As String
        Try
            Dim start As Integer = 0
            Dim [end] As Integer = 0
            Dim count As Integer = 0

            While ((str.IndexOf("<") > -1) AndAlso (str.IndexOf(">") > -1) AndAlso (str.IndexOf("<") < str.IndexOf(">")))
                start = str.IndexOf("<")
                [end] = str.IndexOf(">")
                count = [end] - start + 1

                str = str.Remove(start, count)
            End While

            str = str.Replace(" ", " ")
            str = str.Replace(">", "")
            str = str.Replace(vbCr & vbLf, "")

            Return str.Trim()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function