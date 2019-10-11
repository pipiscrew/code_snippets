public static bool testInternetConnection()
{
    try
    {
        Ping ping = new Ping();
        return (ping.Send(IPAddress.Parse("2osdfyourdomainIP.231")).Status == IPStatus.Success);
    }
    catch (Exception)
    {
        return false;
    }
}

 

        public static bool IsConnected()
        {
            try
            {
                try
                {
                    using (var client = new WebClient())
                    using (var stream = client.OpenRead("http://www.google.com"))
                    {
                        return true;
                    }
                }
                catch
                {
                    return false;
                }

                //Ping myPing = new Ping();
                //String host = "google.com";
                //byte[] buffer = new byte[32];
                //int timeout = 1000;
                //PingOptions pingOptions = new PingOptions();
                //PingReply reply = myPing.Send(host, timeout, buffer, pingOptions);

                //if (reply.Status == IPStatus.Success)
                //    return true;
                //else
                //    return false;
            }
            catch (Exception)
            {
                return false;
            }
        }