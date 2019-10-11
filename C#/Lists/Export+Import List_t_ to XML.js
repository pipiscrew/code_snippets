//http://stackoverflow.com/questions/8334527/c-sharp-save-listt-to-xml-file

        private void button4_Click(object sender, EventArgs e)
        {
            File.WriteAllText(@"d:\1.xml",ToXML(items));
        }

        public string ToXML<T>(T obj)
        {
            using (StringWriter stringWriter = new StringWriter(new StringBuilder()))
            {
                XmlSerializer xmlSerializer = new XmlSerializer(typeof(T));
                xmlSerializer.Serialize(stringWriter, obj);
                return stringWriter.ToString();
            }
        }

        public static T FromXML<T>(string xml)
        {
            using (StringReader stringReader = new StringReader(xml))
            {
                XmlSerializer serializer = new XmlSerializer(typeof(T));
                return (T)serializer.Deserialize(stringReader);
            }
        }

        private void button5_Click(object sender, EventArgs e)
        {
            items = FromXML<List<element>>(File.ReadAllText(@"d:\1.xml"));

 //           items = items.Where(x => x.properties.Count==null).ToList();

            tr.Roots = items;
            tr.RebuildAll(true);
            tr.Refresh();
        }