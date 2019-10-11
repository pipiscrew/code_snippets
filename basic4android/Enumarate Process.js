//http://www.basic4ppc.com/forum/basic4android-updates-questions/18595-process-running.html

Sub KillProgram (Package As String)
    Dim sb As StringBuilder
    sb.Initialize
    Phone.Shell("ps", Null, sb, Null)
    Dim m As Matcher
    m = Regex.Matcher2("^[^ ]*\s+(\d+) .*" & package, Regex.MULTILINE, sb.ToString)
    If m.Find Then
        Log("Package found: " & package)
        'Kill here
    End If
End Sub