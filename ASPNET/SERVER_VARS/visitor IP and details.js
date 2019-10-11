//http://www.hakimshabir.blogspot.com/2016/01/how-to-retrieve-visitors-ip-address.html

Any user coming to your website/web application has an IP address. If  you want to keep track of user ip address along with other details. I 
The issue  is when they're behind a proxy . So, here are the code snippets in ASP and .Net that first check for an IP addresses that's forwarded from behind a proxy, and if there's none then just get the IP address.

public string IpAddress() {
 string strIpAddress;
 strIpAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
 if (strIpAddress == null) {
  strIpAddress = Request.ServerVariables["REMOTE_ADDR"];
 }
 return strIpAddress;
}


//Now question is how you retieve all the details like counry, region, region code, latitite and logitute
//Here is the complete code
//for getting all details about user

private string GetVisitor() {
 //client connecting to a web server through an HTTP proxy or load balancer
 String ip = HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
 if (string.IsNullOrEmpty(ip)) {
  ip = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"];
 }
 return ip;
}
private DataTable GetLocation(string strIPAddress) {
 WebRequest rssReq = WebRequest.Create("http://freegeoip.net/xml/" +
  strIPAddress);
 WebProxy px = new WebProxy("http://freegeoip.net/xml/" + strIPAddress, true);
 rssReq.Proxy = px;
 rssReq.Timeout = 2000;
 try {
  WebResponse rep = rssReq.GetResponse();
  XmlTextReader xtr = new XmlTextReader(rep.GetResponseStream());
  DataSet ds = new DataSet();
  ds.ReadXml(xtr);
  return ds.Tables[0];
 } catch {
  return null;
 }
}
protected void btnGetIpaddress_Click(object sender, EventArgs e) {
 try {
  DataTable dt = new DataTable();
  dt = GetLocation(GetVisitor());
  if (dt.Rows.Count > 0) {
   dvIpaddressdetail.DataSource = dt;
   dvIpaddressdetail.DataBind();
  }
  string ipaddress = dt.Rows[0].Field < string > (0);
 } catch (Exception ex) {
  throw ex;
 }
}