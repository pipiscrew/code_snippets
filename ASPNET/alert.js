           ClientScript.RegisterStartupScript(this.GetType(), "myalert", "alert('saved');", true);
           or
           System.Web.HttpContext.Current.Response.Write("<SCRIPT LANGUAGE=\"JavaScript\">alert(\"saved\")</SCRIPT>");