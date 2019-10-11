'source
'http://msdn.microsoft.com/en-us/library/system.xml.serialization.xmlserializer%28VS.71%29.aspx

        Dim serializer As New XmlSerializer(GetType(List(Of PatchOperation)))
        Dim writer As New StreamWriter("c:\test.xml")
        
        serializer.Serialize(writer, AddFilePatch)
        writer.Close()

' ^Public AddFilePatch As New List(Of PatchOperation)^


prepei ola na einai kai oxi  'Public Shared Property'

    Public Property Filename() As String
        Get
            Return _Filename
        End Get

        Set(ByVal val As String)
            _Filename = val
        End Set

    End Property



ama bgazei error h class 8elei na exei NEW! ::

    Public Sub New()

    End Sub