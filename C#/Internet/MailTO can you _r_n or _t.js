//http://stackoverflow.com/questions/8611108/trying-to-use-mailto-url-schema-to-allow-users-to-send-emails-w-errors-in-th

body = body + ":::::" + Events.JSONToString();
body = System.Web.HttpUtility.HtmlEncode(body).Replace('\n', '^');
System.Diagnostics.Process.Start(
    String.Format(
        "mailto:foo@bar.com?Subject={0}&Body={1}", subject, body
    )
);

"There are too many characters that will throw it off and terminate the body text prematurely."

Because you are making this part of a query string you need to use Uri.EscapeDataString(body) 
instead of System.Web.HttpUtility.HtmlEncode(body).


//user
Uri.EscapeDataString(body) 