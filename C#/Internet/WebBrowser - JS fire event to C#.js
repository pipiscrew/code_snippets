using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Security.Permissions;


namespace web_js_communicate
{
    [PermissionSet(SecurityAction.Demand, Name = "FullTrust")]
    [System.Runtime.InteropServices.ComVisibleAttribute(true)]
    public partial class Form1 : Form
    {
        //https://stackoverflow.com/a/3694080
        public Form1()
        {
            InitializeComponent();
            wb.AllowWebBrowserDrop = false;
            wb.IsWebBrowserContextMenuEnabled = false;
            wb.WebBrowserShortcutsEnabled = false;
            wb.ObjectForScripting = this;
            // Uncomment the following line when you are finished debugging.
            //webBrowser1.ScriptErrorsSuppressed = true;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            wb.Navigate("https://www.bet365.com/?&cb=103265379#/IP/");
        }

        //https://stackoverflow.com/a/6222430
        private void button2_Click(object sender, EventArgs e)
        {
            HtmlDocument doc = wb.Document;
            HtmlElement head = doc.GetElementsByTagName("head")[0];
            HtmlElement s = doc.CreateElement("script");
            s.SetAttribute("text", "function sayHello() { window.external.Test('called from script code');  }"); //alert('hello');
            head.AppendChild(s);
            wb.Document.InvokeScript("sayHello");
        }

        public void Test(String message)
        {
            MessageBox.Show(message, "client code");
        }
    }
}
