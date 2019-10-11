//http://stackoverflow.com/q/4495961

Response.StatusCode = 500;
Response.ContentType = "text/plain";
Response.Write("Unable to connect to database");
Response.End();

//Context.Response.TrySkipIisCustomErrors = true