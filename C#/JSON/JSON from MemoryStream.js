            string JSON=@"{""response"":{""statusCode"":200,""data"":{""genrelist"":{""genre"":[{""id"":1,""haschildren"":true,""name"":""Alternative"",""parentid"":0},{""id"":24,""haschildren"":true,""name"":""Blues"",""parentid"":0},{""id"":32,""haschildren"":true,""name"":""Classical"",""parentid"":0},{""id"":44,""haschildren"":true,""name"":""Country"",""parentid"":0},{""id"":212,""haschildren"":true,""name"":""Decades"",""parentid"":0},{""id"":54,""haschildren"":true,""name"":""Easy Listening"",""parentid"":0},{""id"":61,""haschildren"":true,""name"":""Electronic"",""parentid"":0},{""id"":82,""haschildren"":true,""name"":""Folk"",""parentid"":0},{""id"":122,""haschildren"":true,""name"":""Inspirational"",""parentid"":0},{""id"":134,""haschildren"":true,""name"":""International"",""parentid"":0},{""id"":163,""haschildren"":true,""name"":""Jazz"",""parentid"":0},{""id"":177,""haschildren"":true,""name"":""Latin"",""parentid"":0},{""id"":195,""haschildren"":true,""name"":""Metal"",""parentid"":0},{""id"":295,""haschildren"":false,""name"":""Misc"",""parentid"":0},{""id"":206,""haschildren"":true,""name"":""New Age"",""parentid"":0},{""id"":220,""haschildren"":true,""name"":""Pop"",""parentid"":0},{""id"":297,""haschildren"":true,""name"":""Public Radio"",""parentid"":0},{""id"":232,""haschildren"":true,""name"":""R&B/Urban"",""parentid"":0},{""id"":110,""haschildren"":true,""name"":""Rap"",""parentid"":0},{""id"":242,""haschildren"":true,""name"":""Reggae"",""parentid"":0},{""id"":250,""haschildren"":true,""name"":""Rock"",""parentid"":0},{""id"":265,""haschildren"":true,""name"":""Seasonal/Holiday"",""parentid"":0},{""id"":276,""haschildren"":true,""name"":""Soundtracks"",""parentid"":0},{""id"":282,""haschildren"":true,""name"":""Talk"",""parentid"":0},{""id"":89,""haschildren"":true,""name"":""Themes"",""parentid"":0}]}},""statusText"":""Ok""}}";

            MemoryStream ms = new MemoryStream(Encoding.Unicode.GetBytes(JSON));
            DetailsList currPlaylist;
            //always return 23items (albums)
            DataContractJsonSerializer jsonSerializer = new DataContractJsonSerializer(typeof(DetailsList));
            currPlaylist = null;
            currPlaylist = (DetailsList)jsonSerializer.ReadObject(ms);
            MessageBox.Show(currPlaylist.response.data.genrelist.genre[0].name);
            

    public class DetailsList
    {
        public DetailsList1 response;
    }

    public class DetailsList1
    {
        public string statusCode;
        public DetailsList2 data;
    }

    public class DetailsList2
    {
        public DetailsList3 genrelist;

    }

    public class DetailsList3
    {
        public DetailsList4[] genre;
    }

    public class DetailsList4
    {
        public int id;
        public bool haschildren;
        public string name;
        public int Parentid;
    }