string html = "<html><body><strong>HelloWorld!</strong></body></html>";
Browser.DocumentText = html;

//disable sound!

//at FormLOAD
 WB.Navigate("about:blank");
 
 //at treeview event
         private void treeV1_AfterSelect(object sender, TreeViewEventArgs e)
        {
        	WB.Document.Body.InnerHtml = (dR["html"].ToString());
        	}