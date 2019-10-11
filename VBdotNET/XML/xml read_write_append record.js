===SAVE NEW XML===
        Dim SaveFileDialog1 As New SaveFileDialog

        '--
        SaveFileDialog1.OverwritePrompt = True
        SaveFileDialog1.FileName = ".xml"
        SaveFileDialog1.DefaultExt = "xml"
        SaveFileDialog1.Filter = "XML File (*.xml)|*.xml"
        SaveFileDialog1.InitialDirectory = System.Environment.GetFolderPath(System.Environment.SpecialFolder.DesktopDirectory)

        Dim result As DialogResult = SaveFileDialog1.ShowDialog()

        If (result = DialogResult.OK) Then
            Dim writer As New XmlTextWriter(SaveFileDialog1.FileName, Nothing)

            writer.Formatting = Formatting.Indented
            writer.Indentation = 3

            writer.WriteStartDocument()

            writer.WriteComment("Created in TMS " & Now())

            'Write the root element 
            writer.WriteStartElement("config")
            writer.WriteStartElement("sql")
            'Write sub-elements
            '1
            writer.WriteStartAttribute("sqlquery")
            writer.WriteValue(Replace(VQuery_Main.txtQUERY.Text, """dbo"".", ""))
            writer.WriteEndAttribute()
            '2
            writer.WriteStartAttribute("dataset")
            writer.WriteValue(CheckBox1.Checked)
            writer.WriteEndAttribute()
            '3
            writer.WriteStartAttribute("landscape")
            writer.WriteValue(CheckBox2.Checked)
            writer.WriteEndAttribute()
            '4
            writer.WriteStartAttribute("pgLEFTmargin")
            writer.WriteValue(MaskedTextBox1.Text)
            writer.WriteEndAttribute()
            '5
            writer.WriteStartAttribute("pgTOPmargin")
            writer.WriteValue(MaskedTextBox2.Text)
            writer.WriteEndAttribute()
            '6
            writer.WriteStartAttribute("dataFONT")
            writer.WriteValue(TextBox2.Font.ToString)
            writer.WriteEndAttribute()
            '7
            writer.WriteStartAttribute("dataBGcolor")
            writer.WriteValue(TextBox3.BackColor.ToArgb)
            writer.WriteEndAttribute()
            '8
            writer.WriteStartAttribute("dataFOREcolor")
            writer.WriteValue(TextBox4.ForeColor.ToArgb)
            writer.WriteEndAttribute()

            ' end the root element 
            writer.WriteEndElement()
            writer.WriteEndDocument()

            'close
            writer.Flush()
            writer.Close()
        End If



===APPEND TO XML===
        Dim xmlDoc As New XmlDocument
        Dim subNode As XmlNode
        Dim atTR As XmlNode

        xmlDoc.Load(TextBox1.Text)

        'CreateElement
        subNode = xmlDoc.CreateElement("sql")

        '1
        atTR = xmlDoc.CreateNode(XmlNodeType.Attribute, "sqlquery", "")
        atTR.Value = (Replace(VQuery_Main.txtQUERY.Text, """dbo"".", ""))
        subNode.Attributes.SetNamedItem(atTR)
        '2
        atTR = xmlDoc.CreateNode(XmlNodeType.Attribute, "dataset", "")
        atTR.Value = CheckBox1.Checked
        subNode.Attributes.SetNamedItem(atTR)
        '3
        atTR = xmlDoc.CreateNode(XmlNodeType.Attribute, "landscape", "")
        atTR.Value = CheckBox2.Checked
        subNode.Attributes.SetNamedItem(atTR)
        '4
        atTR = xmlDoc.CreateNode(XmlNodeType.Attribute, "pgLEFTmargin", "")
        atTR.Value = MaskedTextBox1.Text
        subNode.Attributes.SetNamedItem(atTR)
        '5
        atTR = xmlDoc.CreateNode(XmlNodeType.Attribute, "pgTOPmargin", "")
        atTR.Value = MaskedTextBox2.Text
        subNode.Attributes.SetNamedItem(atTR)
        '6
        atTR = xmlDoc.CreateNode(XmlNodeType.Attribute, "dataFONT", "")
        atTR.Value = TextBox2.Font.ToString
        subNode.Attributes.SetNamedItem(atTR)
        '7
        atTR = xmlDoc.CreateNode(XmlNodeType.Attribute, "dataBGcolor", "")
        atTR.Value = TextBox3.BackColor.ToArgb
        subNode.Attributes.SetNamedItem(atTR)
        '8
        atTR = xmlDoc.CreateNode(XmlNodeType.Attribute, "dataFOREcolor", "")
        atTR.Value = TextBox4.ForeColor.ToArgb
        subNode.Attributes.SetNamedItem(atTR)

        'Append
        xmlDoc.DocumentElement.AppendChild(subNode)

        'Save
        xmlDoc.Save(TextBox1.Text)


===READ XML with DATASET===
        Dim dataS As New DataSet

        dataS.ReadXml(Application.StartupPath & "\Reports\" & ComboBox1.Text & ".xml")

        Dim i%
        For i = 0 To dataS.Tables(0).Rows.Count - 1
            ReportSchema.SQLstr = dataS.Tables(0).Rows(i).Item(0).ToString
            ReportSchema.LandScapeOption = Boolean.Parse(dataS.Tables(0).Rows(i).Item(2))
            ReportSchema.pgLEFT = Single.Parse(dataS.Tables(0).Rows(i).Item(3))
            ReportSchema.pgTOP = Single.Parse(dataS.Tables(0).Rows(i).Item(4))

            '**Font Convert**
            Dim tc As System.ComponentModel.TypeConverter = System.ComponentModel.TypeDescriptor.GetConverter(GetType(Font))
            Dim newFont As Font = DirectCast(tc.ConvertFromString(dataS.Tables(0).Rows(i).Item(5)), Font)
            ReportSchema.dataTEXTFONT = newFont

            '**Backcolor Convert**
            Dim tc2 As System.ComponentModel.TypeConverter = System.ComponentModel.TypeDescriptor.GetConverter(GetType(Color))
            Dim newColor As Color
            newColor = DirectCast(tc2.ConvertFromString(dataS.Tables(0).Rows(i).Item(6)), Color)
            ReportSchema.dataTEXTbackColor = newColor

            '**Forecolor Convert**
            newColor = DirectCast(tc2.ConvertFromString(dataS.Tables(0).Rows(i).Item(7)), Color)
            ReportSchema.dataTEXTforeColor = newColor

        Next

'h me xmlREAD