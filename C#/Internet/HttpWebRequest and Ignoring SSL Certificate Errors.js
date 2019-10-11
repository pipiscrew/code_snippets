//http://www.west-wind.com/weblog/posts/48909.aspx
public bool CreateWebRequestObject(string Url) 

{

    try 

    {

        this.WebRequest =  (HttpWebRequest) System.Net.WebRequest.Create(Url);

 

        if (this.IgnoreCertificateErrors)

            ServicePointManager.CertificatePolicy = delegate { return true; };
}


One thing to watch out for is that this an application global setting.
Theres one global ServicePointManager and once you set this value any subsequent requests will inherit this policy as well, which may or may not be what you want. So it's probably a good idea to set the policy when the app starts and leave it be - otherwise you may run into odd behavior in some situations especially in multi-thread situations.

Another way to deal with this is in you application .config file.

<configuration>

  <system.net>

    <settings>

      <servicePointManager

          checkCertificateName="false"

          checkCertificateRevocationList="false"         

      />

    </settings>

  </system.net>

</configuration>

This seems to work most of the time, although I've seen some situations where it doesn't, but where the code implementation works which is frustrating. The .config settings aren't as inclusive as the programmatic code that can ignore any and all cert errors - shrug.