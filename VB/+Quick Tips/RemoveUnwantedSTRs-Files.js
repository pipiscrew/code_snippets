Public Function RemoveUnwantedSTRs4Files(str$, Optional ReturnNoname As Boolean = True) As String
    str = Trim(str)
    str = Replace(str, "/", "")
    str = Replace(str, "\", "")
    str = Replace(str, ":", "")
    str = Replace(str, "*", "")
    str = Replace(str, "?", "")
    str = Replace(str, "<", "")
    str = Replace(str, ">", "")
    str = Replace(str, "|", "")
'    str = Replace(str, Chr(34), "")
    str = Replace(str, ";", "")
    str = Replace(str, ",", "")
'    str = Replace(str, ".", "")

    RemoveUnwantedSTRs4Files = str
End Function