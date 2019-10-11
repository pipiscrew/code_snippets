    Public Function RemoveUnwantedHTMLtxt(ByVal HTMLSTR$) As String
        Dim str$

        str = HTMLSTR
        Str = Replace(Str, "&", "&amp;")
        Str = Replace(Str, """", "&quot;")
        Str = Replace(Str, "<", "&lt;")
        Str = Replace(Str, ">", "&gt;")
        str = Replace(str, ">", "&gt;")

        Return str
    End Function

OR

    Public Function RemoveUnwantedHTMLtxt(ByVal HTMLSTR$) As String
        Dim str$

        str = HTMLSTR
        str = Replace(str, "&", "%26")
        str = Replace(str, "<", "%3C")
        str = Replace(str, ">", "%3E")
        str = Replace(str, ">", "%2B")

        Return str
    End Function

    Public Function ReplaceHTMLtxt(ByVal HTMLSTR$) As String
        Dim str$

        str = HTMLSTR
        str = Replace(str, "&amp;", "&")
        str = Replace(str, "&quot;", """")
        str = Replace(str, "&lt;", "<")
        str = Replace(str, "&gt;", ">")
        str = Replace(str, "&gt;", ">")

        Return str
    End Function