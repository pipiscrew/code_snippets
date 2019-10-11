#1
            XmlDocument document = new XmlDocument();
            try
            {
                document.LoadXml(new WebClient().DownloadString("http://catalog.zune.net/v3.2/en-US/apps?q=a&clientType=WinMobile%207.0&store=zest&orderby=downloadRank"));
            }
            catch
            {
                return;
            }
            XmlNamespaceManager nsmgr = new XmlNamespaceManager(document.NameTable);
            nsmgr.AddNamespace("a", "http://www.w3.org/2005/Atom");
            XmlNodeList list = document.SelectNodes("/a:feed/a:entry", nsmgr);
            if (list.Count > 0)
            {
                foreach (XmlNode node in list)
                {
                    Console.WriteLine(node["a:id"].InnerText + "\r\n" + node["sortTitle"].InnerText);
                }
            }
            
#2
            XmlDocument document = new XmlDocument();
            try
            {
                document.LoadXml(new WebClient().DownloadString("http://catalog.zune.net/v3.2/en-US/apps/7f7e3f68-ba3a-e011-854c-00237de2db9e?clientType=WinMobile%207.0"));
            }
            catch
            {
                return;
            }

            string FullDescription;
            string Url;
            XmlNamespaceManager nsmgr = new XmlNamespaceManager(document.NameTable);
            nsmgr.AddNamespace("a", "http://www.w3.org/2005/Atom");
            XmlNode node = document.SelectSingleNode("/a:feed", nsmgr);
            FullDescription = node["a:content"].InnerText;
            //if (node["screenshots"].HasChildNodes)
            //{
            //    foreach (XmlNode node2 in node["screenshots"].ChildNodes)
            //    {
            //        this.Images.Add(this.(node2["id"].InnerText));
            //    }
            //}
            node = document.SelectSingleNode("/a:feed/a:entry", nsmgr);
            //this.Size = node["packageSize"].InnerText;
            //this.InstalledSize = node["installSize"].InnerText;
            Url = node["url"].InnerText;
            Console.WriteLine(Url);