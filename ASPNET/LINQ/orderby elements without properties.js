//https://github.com/endjin/Samples/blob/master/TwilioWebApi/Solutions/TwilioWebApiSample/Attributes/ValidateTwilioRequestAttribute.cs

var keys = context.Request.Form.AllKeys.OrderBy(k => k, StringComparer.Ordinal).ToList();
foreach (var key in keys)
{
    Response.Write(key + ": " + Request.Form[key] + "</br>");
}