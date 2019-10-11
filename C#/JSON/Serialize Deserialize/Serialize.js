//http://blogs.microsoft.co.il/blogs/pini_dayan/archive/2009/03/12/convert-objects-to-json-in-c-using-javascriptserializer.aspx

//reference System.Web.Extensions

            System.Web.Script.Serialization.JavaScriptSerializer oSerializer = new System.Web.Script.Serialization.JavaScriptSerializer();
            string sJSON = oSerializer.Serialize(currPlaylist);

            File.WriteAllText("D:\\1.dat",sJSON);
            
//OR
//http://pietschsoft.com/post/2008/02/NET-35-JSON-Serialization-using-the-DataContractJsonSerializer.aspx
			/// Serialize to JSON
			System.Runtime.Serialization.Json.DataContractJsonSerializer serializer = new System.Runtime.Serialization.Json.DataContractJsonSerializer(myPerson.GetType());
			MemoryStream ms = new MemoryStream();
			serializer.WriteObject(ms, myPerson);
			string json = Encoding.Default.GetString(ms.ToArray());