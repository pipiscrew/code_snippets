//http://weblogs.thinktecture.com/cweyer/2010/12/sending-json-push-notification-messages-to-urban-airship-service-with-c.html
[DataContract(Name = "apsNotification")]
public class APSNotification
{
    [DataMember(Name = "aps")]
    public APSBody APS { get; set; }

    [DataContract(Name = "apsBody")]
    public class APSBody
    {
        [DataMember(Name = "badge")]
        public int Badge { get; set; }

        [DataMember(Name = "alert")]
        public string Alert { get; set; }

        [DataMember(Name = "sound")]
        public string Sound { get; set; }
    }

    [DataMember(Name = "aliases")]
    public List<string> Aliases { get; set; }

    public string ToJsonString()
    {
        var ms = new MemoryStream();
        var ser = new DataContractJsonSerializer(typeof(APSNotification));
        ser.WriteObject(ms, this);
        ms.Seek(0, SeekOrigin.Begin);
        var sr = new StreamReader(ms);
        var result = sr.ReadToEnd();
        ms.Close();
        ms.Dispose();

        return result;
    }
}

With the help of a little helper class called PushNotifications we can now send out push notifications (given that we have an account with Urban Airship and set up all necessary application-specific thing) – exception handling omitted:

public static class PushNotifications
{
    public static void SendNotificationMessage(
        string alertText, int badge, string sound,
        string alias, string username, string password)
    {
        var aps = new APSNotification
        {
            APS = new APSNotification.APSBody
            {
                Badge = badge,
                Alert = alertText,
                Sound = sound
            },
            Aliases = new List<string>
            {
                alias
            }
        };
        var json = aps.ToJsonString();

        var uri = new Uri("https://go.urbanairship.com/api/push/");
        var encoding = new UTF8Encoding();
        var request = (HttpWebRequest)WebRequest.Create(uri);
        request.Method = "POST";
        request.Credentials = new NetworkCredential(username, password);
        request.ContentType = "application/json";
        request.ContentLength = encoding.GetByteCount(json);

        using (var stream = request.GetRequestStream())
        {
            stream.Write(encoding.GetBytes(json), 0, encoding.GetByteCount(json));
            stream.Close();
            var response = request.GetResponse();
            response.Close();
        }
    }
}