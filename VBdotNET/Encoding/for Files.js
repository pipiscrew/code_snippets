'Reader
Dim theString As String
  Dim reader As New System.IO.StreamReader("testfile.txt", System.Text.Encoding.Default)
  Try
    theString = reader.ReadToEnd()
  Finally
    reader.Close()
  End Try

'Writer
  Dim writer As New System.IO.StreamWriter("out.txt", False, System.Text.Encoding.UTF8)
  Try
    writer.WriteLine(theString)
  Finally
    writer.Close()
  End Try