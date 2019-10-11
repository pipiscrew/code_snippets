''''''''''''ALSO EXIST A COMPILED LIBRARY
http://nini.sourceforge.net/
''''''''''''ALSO EXIST A COMPILED LIBRARY



Option Strict On
Module INIAccess

    Public INIReadValue As String 'For read validations
    Public INIsPath As String = Application.StartupPath & "\config.dat"

#Region "API Calls"
    ' standard API declarations for INI access
    ' changing only "As Long" to "As Int32" (As Integer would work also)
    Private Declare Unicode Function WritePrivateProfileString Lib "kernel32" _
    Alias "WritePrivateProfileStringW" (ByVal lpApplicationName As String, _
    ByVal lpKeyName As String, ByVal lpString As String, _
    ByVal lpFileName As String) As Int32

    Private Declare Unicode Function GetPrivateProfileString Lib "kernel32" _
    Alias "GetPrivateProfileStringW" (ByVal lpApplicationName As String, _
    ByVal lpKeyName As String, ByVal lpDefault As String, _
    ByVal lpReturnedString As String, ByVal nSize As Int32, _
    ByVal lpFileName As String) As Int32
#End Region

    Private Function INIRead(ByVal INIPath As String, _
    ByVal SectionName As String, ByVal KeyName As String, _
    ByVal DefaultValue As String) As String
        ' primary version of call gets single value given all parameters
        Dim n As Int32
        Dim sData As String
        sData = Space$(1024) ' allocate some room 
        n = GetPrivateProfileString(SectionName, KeyName, DefaultValue, _
        sData, sData.Length, INIPath)
        If n > 0 Then ' return whatever it gave us
            INIRead = sData.Substring(0, n)
        Else
            INIRead = ""
        End If
    End Function

#Region "INIRead "
    Public Function INIRead(ByVal INIPath As String, _
    ByVal SectionName As String, ByVal KeyName As String) As String
        ' overload 1 assumes zero-length default
        Return INIRead(INIPath, SectionName, KeyName, "")
    End Function

    Public Function INIRead(ByVal INIPath As String, _
    ByVal SectionName As String) As String
        ' overload 2 returns all keys in a given section of the given file
        Return INIRead(INIPath, SectionName, Nothing, "")
    End Function

    Public Function INIRead(ByVal INIPath As String) As String
        ' overload 3 returns all section names given just path
        Return INIRead(INIPath, Nothing, Nothing, "")
    End Function
#End Region

    Public Sub INIWrite(ByVal INIPath As String, ByVal SectionName As String, _
    ByVal KeyName As String, ByVal TheValue As String)
        Call WritePrivateProfileString(SectionName, KeyName, TheValue, INIPath)
    End Sub

    Public Sub INIDelete(ByVal INIPath As String, ByVal SectionName As String, _
    ByVal KeyName As String) ' delete single line from section
        Call WritePrivateProfileString(SectionName, KeyName, Nothing, INIPath)
    End Sub

    Public Sub INIDelete(ByVal INIPath As String, ByVal SectionName As String)
        ' delete section from INI file
        Call WritePrivateProfileString(SectionName, Nothing, Nothing, INIPath)
    End Sub

End Module



'example
sPath = "testing.ini"


If File.Exists(sINIpath) = False then
File.Create(sINIpath)
modINIAccess.INIWrite(sINIpath, "sde", "connectstring", "1") 
End If


INIWrite(sPath, "Section1", "Key1-1", "Value1-1") ' build INI file
INIWrite(sPath, "Section1", "Key1-2", "Value1-2")
INIWrite(sPath, "Section1", "Key1-3", "Value1-3")
INIWrite(sPath, "Section2", "Key2-1", "Value2-1")
INIWrite(sPath, "Section2", "Key2-2", "Value2-2")

sValue = INIRead(sPath, "section2", "key2-1", "Unknown") ' specify all
MessageBox.Show(sValue, "section2/key2-1/unknown", MessageBoxButtons.OK)

sValue = INIRead(sPath, "section2", "XYZ", "Unknown") ' specify all
MessageBox.Show(sValue, "section2/xyz/unknown", MessageBoxButtons.OK)

sValue = INIRead(sPath, "section2", "XYZ") ' use zero-length string as default
MessageBox.Show(sValue, "section2/XYZ", MessageBoxButtons.OK)

sValue = INIRead(sPath, "section1") ' get all keys in section
sValue = sValue.Replace(ControlChars.NullChar, "|"c) ' change embedded NULLs to pipe chars
MessageBox.Show(sValue, "section1 pre delete", MessageBoxButtons.OK)

INIDelete(sPath, "section1", "key1-2") ' delete middle entry in section 1
sValue = INIRead(sPath, "section1") ' get all keys in section again
sValue = sValue.Replace(ControlChars.NullChar, "|"c) ' change embedded NULLs to pipe chars
MessageBox.Show(sValue, "section1 post delete", MessageBoxButtons.OK)

sValue = INIRead(sPath) ' get all section names
sValue = sValue.Replace(ControlChars.NullChar, "|"c) ' change embedded NULLs to pipe chars
MessageBox.Show(sValue, "All sections pre delete", MessageBoxButtons.OK)

INIDelete(sPath, "section1") ' delete section
sValue = INIRead(sPath) ' get all section names
sValue = sValue.Replace(ControlChars.NullChar, "|"c) ' change embedded NULLs to pipe chars
MessageBox.Show(sValue, "All sections post delete", MessageBoxButtons.OK)



