'>>>>>>>> RegEx
    Private Shared Function PathShortener(ByVal path As String) As String
        Const pattern As String = "^(\w+:|\\)(\\[^\\]+\\[^\\]+\\).*(\\[^\\]+\\[^\\]+)$"
        Const replacement As String = "$1$2...$3"
        If Regex.IsMatch(path, pattern) Then
            Return Regex.Replace(path, pattern, replacement)
        Else
            Return path
        End If
    End Function
    
'example :
'C:\Documents and Settings\jatwood\My Documents\Visual Studio 2005\SimpleEncryption\UnitTests\UnitTests.vb
'\\wumpus\public\Hilo Deliverables\Hilo Final\Introduction\Code\Intro\App_Themes\cellphone\photo-small.jpg

'will be :
'C:\Documents and Settings\jatwood\...\UnitTests\UnitTests.vb
'\\wumpus\public\...\cellphone\photo-small.jpg


'>>>>>>>> API + StringBuilder
    <DllImport("shlwapi.dll", CharSet:=CharSet.Auto)> _
    Private Shared Function PathCompactPathEx(<Out()> ByVal pszOut As System.Text.StringBuilder, ByVal szPath As String, ByVal cchMax As Integer, ByVal dwFlags As Integer) As Boolean
    End Function

    Private Shared Function PathShortener(ByVal path As String, ByVal length As Integer) As String
        Dim sb As New System.Text.StringBuilder()
        PathCompactPathEx(sb, path, length, 0)
        Return sb.ToString()
    End Function
    
'will be:
'C:\Documents and Settings\jatwood\...\UnitTests\UnitTests.vb
'\\wumpus\public\...\cellphone\photo-small.jpg

    
'It lets you set an absolute length for the path, and displays as many characters as it can with a "best fit" placement of the ellipsis.
'compactPathEx guarantees that the paths will always be exactly (x) characters while displaying as much as it can, but it may not be able to split cleanly. My regex always splits cleanly, but makes no guarantees on length.
'And obviously, if you're not running Windows, or if you don't care for p/invoke, the API call is clearly out