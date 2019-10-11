//http://weblogs.asp.net/gunnarpeipman/archive/2009/10/25/net-framework-4-0-string-isnullorwhitespace-method.aspx


public static class StringHelper

{

    public static bool IsNullOrWhiteSpace(string s)

    {

        if (s == null)

            return true;

 

        return (s.Trim() == string.Empty);

    }

}