string[] keys = Request.Form.AllKeys;
for (int i= 0; i < keys.Length; i++) 
{
   Response.Write(keys[i] + ": " + Request.Form[keys[i]] + "<br>");
}


//ashx
//https://gist.github.com/tufanbarisyildirim/6763661
//http://stackoverflow.com/a/6629103