Dim myWebReq As HttpWebRequest
Dim myWebResp As HttpWebResponse
Dim strHTML As String
Dim c As New Cookie()
Dim sr As StreamReader
Dim sw As StreamWriter
Dim cc As New CookieContainer()

myWebReq = WebRequest.Create("http://burak/LoginDeneme/secret.aspx")
c.Name = FormsAuthentication.FormsCookieName()
c.Value = Session("c")
c.Domain = "http://burak/LoginDeneme"
cc.Add(c)
myWebReq.CookieContainer = cc
myWebResp = myWebReq.GetResponse
sr = New StreamReader(myWebResp.GetResponseStream)
strHTML = sr.ReadToEnd
sw = File.CreateText("d:\Downloads\1.htm")
sw.WriteLine(strHTML)
sw.Close()
Response.WriteFile("d:\Downloads\1.htm")
