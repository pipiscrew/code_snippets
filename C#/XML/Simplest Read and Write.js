#write
			try
            {
                string sStartupPath = Application.StartupPath;
                XmlTextWriter objXmlTextWriter =
                     new XmlTextWriter("c:\\selected.xml", null);
                objXmlTextWriter.Formatting = Formatting.Indented;
                objXmlTextWriter.WriteStartDocument();
                objXmlTextWriter.WriteStartElement("MySelectedValues");
                objXmlTextWriter.WriteStartElement("BookName");
                objXmlTextWriter.WriteString("test1");
                objXmlTextWriter.WriteEndElement();
                objXmlTextWriter.WriteStartElement("ReleaseYear");
                objXmlTextWriter.WriteString("test2");

                objXmlTextWriter.WriteEndElement();
                objXmlTextWriter.WriteStartElement("Publication");
                objXmlTextWriter.WriteString("test3");
                objXmlTextWriter.WriteEndElement();
                objXmlTextWriter.WriteEndElement();
                objXmlTextWriter.WriteEndDocument();
                objXmlTextWriter.Flush();
                objXmlTextWriter.Close();
                MessageBox.Show("The following file has been successfully created\r\n"
                    + sStartupPath
                    + @"\selected.xml", "XML", MessageBoxButtons.OK,
                    MessageBoxIcon.Information);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
#read
            try
            {
                XmlTextReader objXmlTextReader = new XmlTextReader("c:\\selected.xml");
                string sName = "";

                while (objXmlTextReader.Read())
                {
                    switch (objXmlTextReader.NodeType)
                    {
                        case XmlNodeType.Element:
                            sName = objXmlTextReader.Name;
                            break;
                        case XmlNodeType.Text:
                            switch (sName)
                            {
                                case "BookName":
                                    Console.WriteLine(objXmlTextReader.Value);
                                    break;
                                case "ReleaseYear":
                                    Console.WriteLine(objXmlTextReader.Value);
                                    break;
                                case "Publication":
                                    Console.WriteLine(objXmlTextReader.Value);
                                    break;
                            }
                            break;
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }