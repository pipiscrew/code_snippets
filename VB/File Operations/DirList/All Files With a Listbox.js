Dim strDir As String

strDir = Dir("c:\vb" & "\*.*")
Do While Len(strDir) > 0
    List1.AddItem strDir
    strDir = Dir()
Loop