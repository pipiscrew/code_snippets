//WebForm1.aspx
           <form id="form1" method="post" action="WebForm1_save.aspx">
        <% WebApplication1.DataClasses1DataContext db = new WebApplication1.DataClasses1DataContext();
           
            IEnumerable<WebApplication1.customer> customers = from p in db.customers
                                                              select p;
        %>
                <div class="form-group">
                    <label>Name :</label>
                    <input id="cust_name" name="cust_name" type="text" maxlength="50" class="form-control" />
                </div>                 
                <div class="form-group">
                    <label>Address :</label>
                    <input id="cust_address" name="cust_address" type="text" maxlength="50" class="form-control" />
                </div>                 
                <div class="form-group">
                    <label>PO Box :</label>
                    <input id="cust_po" name="cust_po" type="text" maxlength="10" class="form-control" />
                </div>                 

                <div class="form-group">
                    <label>Site :</label>
                    <select id="site_id" name="site_id" class="form-control">
                    <%
                        foreach (var item in customers)
                    {%>
                        <option value="<%= item.cust_id %>"><%= item.cust_name %></option>
                    <%} %>
                    </select>
                </div>

                <button class="btn btn-default" type="submit">Save</button>
            </form>
            
//WebForm1_save.aspx plain(aspx) w/o code-behind
<%@ Page Language="C#" %>

<%

    //Response.Write(Request.RequestType);

//    if (Request.RequestType != System.Net.WebRequestMethods.Http.Post)
//    {
//        Response.Write("Server accept only POST");
//        Response.End();
//        //return;
//    }

    //if (String.IsNullOrEmpty(Request.QueryString["[cust_name]"])) // doesnt work on form?
    
    //Request.Form filled only when POST
    if (Request.Form["cust_name"] == null || Request.Form["cust_address"] == null || Request.Form["cust_po"] == null || Request.Form["site_id"] == null)
    {
            Response.Write("Please fill the textboxes");
    }
    else
    {
        if (String.IsNullOrEmpty(Request.Form.Get("cust_name")))
        {
            Response.Write("cust_name is required");
            return;
        } 
        else         
            Response.Write(Request.Form.Get("cust_name"));
    }  

    
    
%>