
Dim path As System.IO.Stream = (Reflection.Assembly. _
    GetExecutingAssembly().GetManifestResourceStream(""TestdriveNET.vbnewsgrouptesting.notes.txt"))
Dim bytes(path.Length) As Byte
path.Position = 0
path.Read(bytes, 0, path.Length)
Dim data As String = Encoding.ASCII.GetString(bytes)
Debug.WriteLine(data)