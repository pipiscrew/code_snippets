Dim headerTemplate As String = "Content-Disposition: form-data; name=""{0}""; filename=""{1}"""

For i As Integer = 0 To Files.Count - 1
    formitem = formitem & String.Format(headerTemplate, Files(i).FileVariable, IO.Path.GetFileName(Files(i).FilePath))
Next i