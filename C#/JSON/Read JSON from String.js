WARNING only on frm3.5
To actually perform the deserialization, you simply go:

//load into memory stream
using (var ms = new MemoryStream(Encoding.Unicode.GetBytes(jsonString)))
{
    //parse into jsonser
    var ser = new DataContractJsonSerializer(typeof(MyPersonClass[]));
    MyPersonClass[] obj = (MyPersonClass[])ser.ReadObject(ms);
}


--
kanoyme ref:
System.Runtime.Serialization
System.ServiceModel.Web or System.Web.Extensions.dll



            MemoryStream ms = new MemoryStream(Encoding.Unicode.GetBytes(result));
            Response currPlaylist;

            DataContractJsonSerializer jsonSerializer = new DataContractJsonSerializer(typeof(Response));
            currPlaylist = null;
            currPlaylist = (Response)jsonSerializer.ReadObject(ms);
            MessageBox.Show(currPlaylist.count);
            
    public class Response
    {
        public  string count;
        public List<Note> notes; 
    }

    public class Note
    {
        public string created_at;
        public string modified_at;
        public string text;
    }