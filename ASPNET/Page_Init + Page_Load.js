//design
<%@ Page Language="C#" EnableViewState="false" AutoEventWireup="true" 
CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication3.WebForm1"  %>


//code behind
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

namespace WebApplication3
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Init()
        {
            //init controls
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            HtmlMeta x=new HtmlMeta();
            x.Name = "keywords";
            x.Content = "master page,asp.net,tutorial";
            Page.Header.Controls.Add(x);
            Page.Header.Title = "My old school";

            for (int i = 0; i < 101; i++)
            {
                cmb_test.Items.Add("test"+i.ToString());
            }
            
        }
    }
}