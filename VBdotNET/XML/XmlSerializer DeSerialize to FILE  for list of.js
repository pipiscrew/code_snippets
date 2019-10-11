'source
'http://msdn.microsoft.com/en-us/library/system.xml.serialization.xmlserializer.deserialize%28VS.71%29.aspx

        Dim serializer As New XmlSerializer(GetType(List(Of PatchOperation)))

        ' A FileStream is needed to read the XML document.
        Dim fs As New FileStream("c:\test2.xml", FileMode.Open)
        Dim reader As New XmlTextReader(fs)

        ' Declare an object variable of the type to be deserialized.
        Dim i As List(Of PatchOperation)

        ' Use the Deserialize method to restore the object's state.
        i = CType(serializer.Deserialize(reader), List(Of PatchOperation))


        fs.Close()
        fs.Dispose()
        reader.Close()