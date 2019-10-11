//references : System.Runtime.Serialization
//			   System.ServiceModel.Web


using System.Runtime.Serialization.Json;

        private void btnRead_Click(object sender, EventArgs e)
        {
            if (!File.Exists(txtFilePath.Text))
            {   
                Mes("File not exists!");
                return;
            }

            string books = File.ReadAllText(txtFilePath.Text);

            MemoryStream ms = new MemoryStream(Encoding.Unicode.GetBytes(books));
            RootObject currPlaylist;

            currPlaylist=  Deserialize<RootObject>(books);

            MessageBox.Show(currPlaylist.roots.bookmark_bar.children[59].name);

        }

        public static T Deserialize<T>(string json)
        {
            T obj = Activator.CreateInstance<T>();
            MemoryStream ms = new MemoryStream(Encoding.Unicode.GetBytes(json));
            System.Runtime.Serialization.Json.DataContractJsonSerializer serializer = new System.Runtime.Serialization.Json.DataContractJsonSerializer(obj.GetType());
            obj = (T)serializer.ReadObject(ms);
            ms.Close();
            ms.Dispose();
            return obj;
        }
        
//json class - using http://json2csharp.com
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChromeBookmarksSorter
{
    public class Child3
    {
        public string date_added { get; set; }
        public string id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string url { get; set; }
    }

    public class Child2
    {
        public string date_added { get; set; }
        public string id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string url { get; set; }
        public List<Child3> children { get; set; }
        public string date_modified { get; set; }
    }

    public class Child
    {
        public string date_added { get; set; }
        public string id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string url { get; set; }
        public List<Child2> children { get; set; }
        public string date_modified { get; set; }
    }

    public class BookmarkBar
    {
        public List<Child> children { get; set; }
        public string date_added { get; set; }
        public string date_modified { get; set; }
        public string id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
    }

    public class Other
    {
        public List<object> children { get; set; }
        public string date_added { get; set; }
        public string date_modified { get; set; }
        public string id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
    }

    public class Synced
    {
        public List<object> children { get; set; }
        public string date_added { get; set; }
        public string date_modified { get; set; }
        public string id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
    }

    public class Roots
    {
        public BookmarkBar bookmark_bar { get; set; }
        public Other other { get; set; }
        public Synced synced { get; set; }
    }

    public class RootObject
    {
        public string checksum { get; set; }
        public Roots roots { get; set; }
        public int version { get; set; }
    }
}
