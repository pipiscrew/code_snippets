Private Declare Function RegOpenKeyEx Lib "advapi32.dll" Alias "RegOpenKeyExA" (ByVal hKey As Long, ByVal lpszSubKey As String, ByRef dwReserved As Long, ByVal samDesired As Long, ByRef phkResult As Long) As Long
Private Declare Function RegQueryValueEx Lib "advapi32.dll" Alias "RegQueryValueExA" (ByVal hKey As Long, ByVal lpszValueName As String, ByRef lpdwReserved As Long, ByRef lpdwType As Long, ByRef lpbData As Byte, ByRef lpcbData As Long) As Long
Private Declare Function RegCloseKey Lib "advapi32.dll" (ByVal hKey As Long) As Long


Private Function GetRegistryString(ByVal strKeyName As String, ByVal strValueName As String) As String
    Dim hKey As Long, dwKeyType As Long, DatabasePath As String, bytKeyValue() As Byte, nValueLength As Long
    Const HKEY_CURRENT_USER As Long = &H80000001
    Const STANDARD_RIGHTS_READ As Long = &H20000
    Const KEY_QUERY_VALUE = &H1
    Const KEY_ENUMERATE_SUB_KEYS = &H8
    Const KEY_NOTIFY = &H10
    Const SYNCHRONIZE As Long = &H100000
    Const KEY_READ = ((STANDARD_RIGHTS_READ Or KEY_QUERY_VALUE Or KEY_ENUMERATE_SUB_KEYS Or KEY_NOTIFY) And (Not SYNCHRONIZE))


    If RegOpenKeyEx(HKEY_CURRENT_USER, strKeyName, ByVal 0&, KEY_READ, hKey) = 0 Then
        nValueLength = 255
        bytKeyValue = Space(nValueLength)


        If RegQueryValueEx(hKey, strValueName, ByVal 0&, dwKeyType, bytKeyValue(0), nValueLength) = 0 Then
            DatabasePath = Left(StrConv(bytKeyValue, vbUnicode), nValueLength)


            If nValueLength Then
                If Asc(Right(DatabasePath, 1)) = 0 Then DatabasePath = Left(DatabasePath, nValueLength - 1)
                GetRegistryString = DatabasePath
            End If
            RegCloseKey (hKey)
        End If
    End If
End Function
