
        public static bool AddConnection(DatabaseType ConnectionType,string ConnectionName,string prop1,string prop2,string prop3,string prop4,string prop5)
        {
            try
            {
                if (ConnItems == null)
                    ConnItems = new List<ConnectionItem>();

                ConnItems.Add(new ConnectionItem( (int) ConnectionType, ConnectionName, prop1, prop2, prop3, prop4, prop5));

                return true;
            }
            catch { return false; }
        }

        public static bool SerializeList2File()
        {
            TextWriter textWriter = new StreamWriter(Application.StartupPath + "\\connections.cfg");
            XmlSerializer serializer = new XmlSerializer(typeof(List<ConnectionItem>));
            serializer.Serialize(textWriter, ConnItems);
            textWriter.Close();
            textWriter.Dispose();

            return true;
        }
        
        public static bool DeSerializeFile2List()
        {
            try
            {
            TextReader textReader = new StreamReader(Application.StartupPath + "\\connections.cfg");
            XmlSerializer deserializer = new XmlSerializer(typeof(List<ConnectionItem>));
           // return (List<ConnectionItem>)deserializer.Deserialize(textReader);
            ConnItems = (List<ConnectionItem>) deserializer.Deserialize(textReader);

            textReader.Close();
            textReader.Dispose();
            
            return true;
            }
            catch { return false; }
        }
        


// class

using System;
using System.Collections.Generic;
using System.Text;

namespace QueryAnalyzerPlus
{
    public class ConnectionItem
    {
        private int _ConnectionType;
        private string _ConnectionName;
        private string _Property1;
        private string _Property2;
        private string _Property3;
        private string _Property4;
        private string _Property5;

        public ConnectionItem()
        {
        }

        public ConnectionItem(int ConnectionType, string ConnectionName, string prop1, string prop2, string prop3, string prop4, string prop5)
        {
            _ConnectionType = ConnectionType;
            _ConnectionName = ConnectionName;
            _Property1 = prop1;
            _Property2 = prop2;
            _Property3 = prop3;
            _Property4 = prop4;
            _Property5 = prop5;
        }

        public int ConnectionType
        {
            get { return _ConnectionType; }
            set { _ConnectionType = value; }
        }

        public string ConnectionName
        {
            get { return _ConnectionName; }
            set { _ConnectionName = value; }
        }

        public string Property1
        {
            get { return _Property1; }
            set { _Property1 = value; }
        }

        public string Property2
        {
            get { return _Property2; }
            set { _Property2 = value; }
        }

        public string Property3
        {
            get { return _Property3; }
            set { _Property3 = value; }
        }

        public string Property4
        {
            get { return _Property4; }
            set { _Property4 = value; }
        }

        public string Property5
        {
            get { return _Property5; }
            set { _Property5 = value; }
        }
    }
}

