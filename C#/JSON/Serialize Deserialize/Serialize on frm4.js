[DataContract] //must have this tag!!
public class Occupant
{

add reference to System.Runtime.Serialization

//code
            item test;
            test = new item("cos2tas", "12312");

            DataContractJsonSerializer Serializer = new DataContractJsonSerializer(test.GetType());
            MemoryStream ms = new MemoryStream();
            Serializer.WriteObject(ms, test);
            string json = Encoding.Default.GetString(ms.ToArray());
            

//class
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.Serialization;

namespace FirebaseWriter
{
    [System.Runtime.Serialization.DataContract]
   public class item
    {
       [DataMember(EmitDefaultValue = false)]
        public string name { get; set; }
       [DataMember(EmitDefaultValue = false)]
        public string tel { get; set; }

        public item(string name, string tel)
        {
            this.name = name;
            this.tel = tel;
        }
    }
}
