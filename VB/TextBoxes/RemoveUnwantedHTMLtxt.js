Public Function RemoveUnwantedHTMLtxt(HTMLSTR$) As String
Dim HTMLtxtTMP$
    HTMLtxtTMP = Replace(HTMLSTR, "&amp;", "")
    HTMLtxtTMP = Replace(HTMLtxtTMP, "&gt;", "")
    HTMLtxtTMP = Replace(HTMLtxtTMP, "&quot;", "")
    RemoveUnwantedHTMLtxt = HTMLtxtTMP
End Function