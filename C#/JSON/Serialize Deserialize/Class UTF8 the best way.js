//references : System.Runtime.Serialization
//			   System.ServiceModel.Web
//             System.Web.Extensions

//form
  
	//we read always with UTF8
  	string books = File.ReadAllText(txtFilePath.Text, Encoding.UTF8);
	RootObject currPlaylist;
	
	currPlaylist =JsonSerializer.Deserialize<RootObject>(books);
	
	
	//we write always UTF8
	string sJSON = JsonSerializer.Serialize(currPlaylist);
	File.WriteAllText(txtFilePath.Text, sJSON,Encoding.UTF8);



//class
using System.Text;
using System.Runtime.Serialization.Json;
using System.IO;

namespace ChromeBookmarksSorter
{
    public static class JsonSerializer
    {
        public static string Serialize<T>(this T data)
        {
            try
            {
                DataContractJsonSerializer serializer = new DataContractJsonSerializer(typeof(T));
                var stream = new MemoryStream();
                serializer.WriteObject(stream, data);
                string jsonData = Encoding.UTF8.GetString(stream.ToArray(), 0, (int)stream.Length);
                stream.Close();
                return jsonData;
            }
            catch
            {
                return "";
            }
        }
        public static T Deserialize<T>(this string jsonData)
        {
            try
            {
                DataContractJsonSerializer slzr = new DataContractJsonSerializer(typeof(T));
                var stream = new MemoryStream(Encoding.UTF8.GetBytes(jsonData));
                T data = (T)slzr.ReadObject(stream);
                stream.Close();
                return data;
            }
            catch
            {
                return default(T);
            }
        }
    }
}
