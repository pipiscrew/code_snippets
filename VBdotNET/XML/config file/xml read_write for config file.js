readXMLValue(Application.StartupPath & "\config.xml", "lastdir")

writeXMLValue(Application.StartupPath & "\config.xml", "lastdir", txtDir.Text)


    Public Function readXMLValue(ByVal filePath As String, ByVal key As String) As String
        Try
            Dim xd As New Xml.XmlDocument()

            'load the xml file
            xd.Load(filePath)

            'query for a value
            Dim Node As Xml.XmlNode = xd.DocumentElement.SelectSingleNode("/Details/mySettings/" & key)

            'return the value or nothing if it doesn't exist
            If Not Node Is Nothing Then
                Return Node.Attributes.GetNamedItem("value").Value
            Else
                Return ""
            End If
        Catch ex As Exception
            Return ""
        End Try
    End Function

    Public Function writeXMLValue(ByVal filePath As String, ByVal key As String, ByVal NewValue As String) As Boolean
        Try
            Dim xd As New Xml.XmlDocument()

            If IO.File.Exists(filePath) = False Then
                Dim writer As New Xml.XmlTextWriter(filePath, Nothing)
                writer.Formatting = Xml.Formatting.Indented
                writer.Indentation = 3

                writer.WriteStartDocument()

                writer.WriteComment("Created by veteran " & Now())

                'Write the root element 
                writer.WriteStartElement("Details")
                writer.WriteStartElement("mySettings")

                'Write sub-elements

                writer.WriteStartElement("lastdir")
                writer.WriteStartAttribute("value")
                writer.WriteValue("")
                writer.WriteEndAttribute()
                writer.WriteEndElement()

                writer.WriteStartElement("recursive")
                writer.WriteStartAttribute("value")
                writer.WriteValue("")
                writer.WriteEndAttribute()
                writer.WriteEndElement()

                writer.WriteStartElement("txtTAB1search")
                writer.WriteStartAttribute("value")
                writer.WriteValue("")
                writer.WriteEndAttribute()
                writer.WriteEndElement()

                writer.WriteStartElement("txtTAB1replace")
                writer.WriteStartAttribute("value")
                writer.WriteValue("")
                writer.WriteEndAttribute()
                writer.WriteEndElement()

                'writer.WriteEndElement()
                writer.WriteEndDocument()

                'close
                writer.Flush()
                writer.Close()
            Else
                'load the xml file

                xd.Load(filePath)

                'save value
                Dim Node As Xml.XmlElement = CType(xd.DocumentElement.SelectSingleNode("/Details/mySettings/" & key), Xml.XmlElement)
                If Not Node Is Nothing Then
                    'key found, set the value

                    Node.Attributes.GetNamedItem("value").Value = NewValue

                    xd.Save(filePath)
                    Return True
                Else
                    Return False
                End If
            End If

        Catch ex As Exception
            Return False
        End Try
    End Function