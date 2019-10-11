//This code will list out all the form variables that are being sent in a POST

string[] keys = Request.Form.AllKeys;
for (int i= 0; i < keys.Length; i++) 
{
   Response.Write(keys[i] + ": " + Request.Form[keys[i]] + "<br>");
}


//http://stackoverflow.com/a/20151828 