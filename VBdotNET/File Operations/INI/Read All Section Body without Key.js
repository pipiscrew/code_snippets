'http://blogs.technet.com/b/deploymentguys/archive/2010/07/15/reading-and-modifying-ini-files-with-scripts.aspx

    ''' <summary>
    ''' The GetPrivateProfileSection function retrieves the keys and values for the specified section of an initialization file.
    ''' </summary>
    ''' <param name="lpAppName">Pointer to a null-terminated string specifying the name of the section containing the data. This section name is typically the name of the calling application.</param>
    ''' <param name="lpszReturnBuffer">Pointer to a buffer that receives  the key name and value pairs associated with the named section. The buffer is filled with one or more null-terminated strings; the last string is followed by a second null character.</param>
    ''' <param name="nSize">Specifies the size, in TCHARs, of the buffer pointed to by the lpReturnedString parameter.</param>
    ''' <param name="lpFileName">Pointer to a null-terminated string containing the name of the initialization file. If this parameter does not contain a full path for the file, the function searches the Windows directory for the file. If the file does not exist and lpFileName does not contain a full path, the function creates the file in the Windows directory. The function does not create a file if lpFileName contains the full path and file name of a file that does not exist.</param>
    ''' <returns>If the function succeeds, the return value is nonzero.<br>If the function fails, the return value is zero.</br></returns>
    <Runtime.InteropServices.DllImport("KERNEL32.DLL", EntryPoint:="GetPrivateProfileSectionA", CharSet:=Runtime.InteropServices.CharSet.Ansi)> _
    Private Shared Function GetPrivateProfileSection(ByVal lpAppName As String, ByVal lpszReturnBuffer As Byte(), ByVal nSize As Integer, ByVal lpFileName As String) As Integer
    End Function


    Public Function GetSection2ArraList(ByVal section As String) As ArrayList
        Try
            Dim MAX_ENTRY = 999999 'according to ur needs
            Dim buffer As Byte() = New Byte(MAX_ENTRY - 1) {}
            GetPrivateProfileSection(section, buffer, MAX_ENTRY, "C:\a5\97.iss")
            Dim parts As String() = System.Text.Encoding.ASCII.GetString(buffer).Trim(ControlChars.NullChar).Split(ControlChars.NullChar)
            Return New ArrayList(parts)
        Catch ex As Exception
            MsgBox(ex.Message)
        End Try
        Return Nothing
    End Function
    
'optimized to return string
    Public Function GetSection(ByVal section As String) As String
        Try
            Dim MAX_ENTRY = 999999 'according to ur needs default found 9999
            Dim buffer As Byte() = New Byte(MAX_ENTRY - 1) {}
            GetPrivateProfileSection(section, buffer, MAX_ENTRY, "C:\a5\97.iss")
            Dim parts As String() = System.Text.Encoding.ASCII.GetString(buffer).Trim(ControlChars.NullChar).Split(ControlChars.NullChar)

            Dim sTR As String = ""

            For Each s In parts
                sTR = sTR & s.ToString & vbCrLf
            Next s

            Return sTR
        Catch
            Return ""
        End Try
    
''' <summary>Retrieves retrieves the keys for the specified section of an INI file.</summary>
''' <returns>Returns an ArrayList with the key entries.</returns>
Public Function GetSectionKeys(section As String) As ArrayList
	Try
		Dim buffer As Byte() = New Byte(MAX_ENTRY - 1) {}
		GetPrivateProfileSection(section, buffer, MAX_ENTRY, Filename)
		Dim parts As String() = Encoding.ASCII.GetString(buffer).Trim(ControlChars.NullChar).Split(ControlChars.NullChar)
		Dim list As New ArrayList()
		For Each line As String In parts
			Dim lineparts As String() = line.Split("="C)
			list.Add(lineparts(0))
		Next
		Return list
	Catch
	End Try
	Return Nothing
End Function
