Public Function RemoveUnwantedSTRs(str$) As String
    str = Trim(str)
    str = Replace(str, "'", "")
    str = Replace(str, Chr(34), "")
    str = Replace(str, ";", "")
    str = Replace(str, "[", "")
    str = Replace(str, "]", "")
    RemoveUnwantedSTRs = str
End Function