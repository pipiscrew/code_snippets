    Public Function DeserializeObject(ByVal pXmlizedString As [String]) As [Object]
        Dim xs As New XmlSerializer(GetType(List(Of PatchOperation)))
        Dim memoryStream As New MemoryStream(StringToUTF8ByteArray(pXmlizedString))
        Dim xmlTextWriter As New XmlTextWriter(memoryStream, System.Text.Encoding.UTF8)

        Return xs.Deserialize(memoryStream)
    End Function



    
    Private Function StringToUTF8ByteArray(ByVal pXmlString As [String]) As [Byte]()
        Dim encoding As New System.Text.UTF8Encoding()
        Dim byteArray As [Byte]() = encoding.GetBytes(pXmlString)

        Return byteArray
    End Function