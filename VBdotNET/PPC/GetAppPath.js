    Private Function GetApplicationExe() As String
        ' Determine the full path to the application executable
        Return Assembly.GetExecutingAssembly().GetName().CodeBase
    End Function

    Private Function GetApplicationPath() As String
        ' Return the full path to the directory our
        ' application is installed within.
        Dim codebase As String = GetApplicationExe()
        Return path.GetDirectoryName(codebase)
    End Function

    Private Function GetPathToApplicationFile(ByVal filename As String) As String

        Dim path__1 As String = GetApplicationPath()
        Return Path.Combine(path__1, filename)
    End Function
    
    
    
    then
    
    ds.ReadXml(GetApplicationPath() & "\test.xml", XmlReadMode.ReadSchema)