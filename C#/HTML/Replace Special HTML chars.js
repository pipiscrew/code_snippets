        public static string ReplaceHTMLtxt(string HTMLSTR)
        {
            HTMLSTR = HTMLSTR.Replace("&amp;", "&");
            HTMLSTR = HTMLSTR.Replace("&quot;", "\"");
            HTMLSTR = HTMLSTR.Replace("&lt;", "<");
            HTMLSTR = HTMLSTR.Replace("&gt;", ">");
            HTMLSTR = HTMLSTR.Replace("&nbsp;", " ");
            HTMLSTR = HTMLSTR.Replace("&#39;", "'");   

            return HTMLSTR;
        }