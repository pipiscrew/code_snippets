//http://www.codewrecks.com/blog/index.php/2011/04/12/use-a-webbrowser-to-login-into-a-site-that-use-httponly-cookie/

        [DllImport("wininet.dll", SetLastError = true)]
        public static extern bool InternetGetCookieEx(
            string url,
            string cookieName,
            StringBuilder cookieData,
            ref int size,
            Int32 dwFlags,
            IntPtr lpReserved);

        private const Int32 InternetCookieHttponly = 0x2000;

        /// <summary>
        /// Gets the URI cookie container.
        /// </summary>
        /// <param name="uri">The URI.</param>
        /// <returns></returns>
        public static CookieContainer GetUriCookieContainer(Uri uri)
        {
            CookieContainer cookies = null;
            // Determine the size of the cookie
            int datasize = 8192 * 16;
            StringBuilder cookieData = new StringBuilder(datasize);
            if (!InternetGetCookieEx(uri.ToString(), null, cookieData, ref datasize, InternetCookieHttponly, IntPtr.Zero))
            {
                if (datasize < 0)
                    return null;
                // Allocate stringbuilder large enough to hold the cookie
                cookieData = new StringBuilder(datasize);
                if (!InternetGetCookieEx(
                    uri.ToString(),
                    null, cookieData,
                    ref datasize,
                    InternetCookieHttponly,
                    IntPtr.Zero))
                    return null;
            }
                if (cookieData.Length > 0)
            {
                cookies = new CookieContainer();
                cookies.SetCookies(uri, cookieData.ToString().Replace(';', ','));
            }
            return cookies;
        }

     
        private void button5_Click(object sender, EventArgs e)
        {
            var theBrowser = (WebBrowser)wb;
            HtmlElement inputElementByName = GetInputElementByName("j_username", theBrowser);
            if (inputElementByName == null) return;
            inputElementByName.SetAttribute("value", "nekgasetas@yahoo.gr");
            HtmlElement elementByName = GetInputElementByName("j_password", theBrowser);
            elementByName.SetAttribute("value", "nek@YAHOO.GR");
            
            HtmlElement htmlElement =  GetInputElementByName("Submit", theBrowser,"button");
            htmlElement.InvokeMember("click");
        }

        private HtmlElement GetInputElementByName(string fieldName, WebBrowser webBrowser,string ctl = "input")
        {
            HtmlElementCollection allInput = webBrowser.Document.GetElementsByTagName(ctl);
            foreach (HtmlElement htmlElement in allInput)
            {
                if (htmlElement.Name.Equals(fieldName, StringComparison.InvariantCultureIgnoreCase))
                {
                    return htmlElement;
                }
            }
            return null;
        }

        private void button6_Click(object sender, EventArgs e)
        {
            String hostName = wb.Url.Scheme + Uri.SchemeDelimiter + wb.Url.Host;
            Uri hostUri = new Uri(hostName);
            CookieContainer container = GetUriCookieContainer(hostUri);
            CookieCollection cookieCollection = container.GetCookies(hostUri);
            container.Add(cookieCollection);

            WebClientEx x = new WebClientEx(container);
            MessageBox.Show( x.DownloadString("https://partseurope.eu/cms/catalogs/__system/lib/php/ba-simple-proxy.php?partNo=MEM4111&lang=en_GB"));
        }
        
  
//http://stackoverflow.com/a/11523836
//WebClientEx
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;

namespace WindowsFormsApplication1
{
    public class WebClientEx : WebClient
    {
        private CookieContainer CookieContainer { get; set; }

        public WebClientEx(CookieContainer container)
        {
            this.container = container;
        }

        

        private readonly CookieContainer container = new CookieContainer();

        protected override WebRequest GetWebRequest(Uri address)
        {
            WebRequest r = base.GetWebRequest(address);
            var request = r as HttpWebRequest;
            if (request != null)
            {
                request.CookieContainer = container;
            }
            return r;
        }

        protected override WebResponse GetWebResponse(WebRequest request, IAsyncResult result)
        {
            WebResponse response = base.GetWebResponse(request, result);
            ReadCookies(response);
            return response;
        }

        protected override WebResponse GetWebResponse(WebRequest request)
        {
            WebResponse response = base.GetWebResponse(request);
            ReadCookies(response);
            return response;
        }

        private void ReadCookies(WebResponse r)
        {
            var response = r as HttpWebResponse;
            if (response != null)
            {
                CookieCollection cookies = response.Cookies;
                container.Add(cookies);
            }
        }
    }
}

