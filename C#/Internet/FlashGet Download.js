        private void button1_Click(object sender, EventArgs e)
        {
            DownloadByFlashGet("http://google.com/api.zip");
        }

        public static void DownloadByFlashGet(string url)
        {
            Type FlashGet;
            object objFlashGet;
            object[] parameter = new object[3];
            if (url != null && url.Length > 0)
            {
                FlashGet = Type.GetTypeFromProgID("JetCar.Netscape");
                objFlashGet = Activator.CreateInstance(FlashGet);
                parameter[0] = url;
                parameter[1] = "www.devgg.com";
                parameter[2] = url;

                FlashGet.InvokeMember("AddUrl", BindingFlags.InvokeMethod, null, objFlashGet, parameter);
            }
        }
        
        
#for the new FG
//http://www.devgg.com/archives/254
public static void DownloadByFlashGet(string url)
{
Type FlashGet;
object objFlashGet;
object[] parameter = new object[5];
if (url != null && url.Length > 0)
{
FlashGet = Type.GetTypeFromProgID(“BHO.IFlashGetNetscapeEx”);
objFlashGet = Activator.CreateInstance(FlashGet);
parameter[0] = url;
parameter[1] = “www.devgg.com”;
parameter[2] = url;
parameter[3] = “FlashGet”;
parameter[4] = 0;
FlashGet.InvokeMember(“AddUrlEx”, BindingFlags.InvokeMethod, null, objFlashGet, parameter);
}
}