//http://stackoverflow.com/questions/10387382/how-to-convert-array-with-keys-values-to-json-c-sharp

using System.Web.Script.Serialization;
//or
using System.Web.Extensions.dll
var keyValues = new Dictionary<string, string>
               {
                   { "emailSend", textBox1.Text },
                   { "toEmail", textBox2.Text }
               };

JavaScriptSerializer js = new JavaScriptSerializer();
string json = js.Serialize(keyValues);
MessageBox.Show(json);


//JSON.NET needed - tested&working
var obj = new JObject();

obj["One"] = "Value One";
obj["Two"] = "Value Two";
obj["Three"] = "Value Three";

var serialized = JsonConvert.SerializeObject(obj);
gives you

{"One":"Value One","Two":"Value Two","Three":"Value Three"}





//tested&working
//"{\"files\": {\"" + General.SafeJSON(fl) + "\":null}}"

        //http://forums.asp.net/p/1064842/1538141.aspx
        // Make a string safe for JSON
        public static string SafeJSON(string sIn)
        {
            StringBuilder sbOut = new StringBuilder(sIn.Length);
            foreach (char ch in sIn)
            {
                if (Char.IsControl(ch) || ch == '\'')
                {
                    int ich = (int)ch;
                    sbOut.Append(@"\u" + ich.ToString("x4"));
                    continue;
                }
                else if (ch == '\"' || ch == '\\' || ch == '/')
                {
                    sbOut.Append('\\');
                }
                sbOut.Append(ch);
            }
            return sbOut.ToString();
        }
        
//http://json.parser.online.fr/
//or frm4 - add ref to System.Web.Extensions
        public static string ToJSON(object obj)
        {
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            return serializer.Serialize(obj);
        }