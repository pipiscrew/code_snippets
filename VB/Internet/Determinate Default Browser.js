    Dim Regentry As String
    Dim TheReg As Object
    
    Set TheReg = CreateObject("Wscript.Shell")
    Regentry = TheReg.RegRead("HKEY_CLASSES_ROOT\HTTP\shell\open\command\")
    Regentry = Replace(Regentry, Chr(34), "")
    Regentry = LCase(Mid(Regentry, InStrRev(Regentry, "\") + 1))
    
    If Left(Regentry, 8) = "iexplore" Then IEvalid = 1 Else IEvalid = 2
    
    Set TheReg = Nothing
    GoTo Loopa