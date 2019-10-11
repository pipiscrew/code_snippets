//http://stackoverflow.com/questions/1173177/c-xmlelement-selectsinglenode-returns-null-for-empty-string
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(Result);

            foreach (XmlElement elem in doc.SelectNodes("notes/note"))
            {
               Console.WriteLine( elem.SelectSingleNode("text/text()").Value);
               Console.WriteLine(elem.SelectSingleNode("id/text()").Value);
            }