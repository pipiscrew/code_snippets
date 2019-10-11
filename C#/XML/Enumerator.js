            try
            {

                XmlDocument doc = new XmlDocument();
                doc.LoadXml(Result);

                foreach (XmlElement elem in doc.SelectNodes("notes/note"))
                {
                    ListViewItem Itm = new ListViewItem();
                    Itm.Text = HttpUtility.HtmlDecode(elem.SelectSingleNode("text/text()").Value) + Environment.NewLine + "takis";
                    Itm.Tag = elem.SelectSingleNode("id/text()").Value;
                    Itm.ImageIndex = 0;
                    lstv.Items.Add(Itm);
                }
            }
            catch (Exception e)
            {
            }
            finally
            {
                ShowIndicator(false);
            }
            
#or
                string HtmlResult = Result;
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(HtmlResult);
                System.Xml.XmlElement root = doc.DocumentElement;
                System.Xml.XmlNodeList lst = root.GetElementsByTagName("id");

                string newID = null;
                foreach (System.Xml.XmlNode n in lst)
                {
                    newID = n.InnerText;
                    break;
                }

                if (newID.Length > 0)
                {
                    ListViewItem Itm = new ListViewItem();
                    Itm.Text = textBox3.Text;
                    Itm.Tag = newID;

                    Itm.ImageIndex = 0;
                    lstv.Items.Insert(0, Itm);
                }
                else
                {
                    MessageBox.Show("Error!");
                }