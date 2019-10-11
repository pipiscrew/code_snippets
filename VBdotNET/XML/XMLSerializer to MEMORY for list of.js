
    Public Function SerializeObject(ByVal pObject As [Object]) As [String]
        Try
            Dim XmlizedString As [String] = Nothing
            Dim memoryStream As New MemoryStream()
            Dim xs As New XmlSerializer(GetType(List(Of PatchOperation)))
            Dim xmlTextWriter As New XmlTextWriter(memoryStream, System.Text.Encoding.UTF8)

            xs.Serialize(xmlTextWriter, pObject)
            memoryStream = DirectCast(xmlTextWriter.BaseStream, MemoryStream)
            XmlizedString = UTF8ByteArrayToString(memoryStream.ToArray())

            Return XmlizedString
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Information, apTitle)
            Return Nothing
        End Try
    End Function

    Private Function UTF8ByteArrayToString(ByVal characters As [Byte]()) As [String]
        Dim encoding As New System.Text.UTF8Encoding()
        Dim constructedString As [String] = encoding.GetString(characters)

        Return (constructedString)
    End Function
