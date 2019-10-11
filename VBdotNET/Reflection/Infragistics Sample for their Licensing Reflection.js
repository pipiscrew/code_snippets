'apo to Infragistics.NetAdvantage_WPFDV_2010
'this proc @: InfragisticsWPF4.v10.2.dll
'reflection filename : Infragistics.License.dll

Private Sub LoadAllNewerProductInfo()
    If (Me.allNewerProducts Is Nothing) Then
        Dim licenseAssemblyInfo As String = UltraProductInfo.GetLicenseAssemblyInfo
        Dim list As New ArrayList(3)
        Dim list2 As New ArrayList(3)
        Try 
            Dim obj2 As Object = Activator.CreateInstance(licenseAssemblyInfo, "Infragistics.License.LicenseValidator").Unwrap
            Dim method As MethodInfo = obj2.GetType.GetMethod("GetNewerVersions")
            Dim parameters As Object() = New Object() { Me.regKeyProductName, Me.majorVersion, Me.minorVersion, list, list2 }
            method.Invoke(obj2, parameters)
            Dim buffer As Byte() = TryCast(list.ToArray(GetType(Byte)),Byte())
            Dim buffer2 As Byte() = TryCast(list2.ToArray(GetType(Byte)),Byte())
            If (((Not buffer Is Nothing) AndAlso (Not buffer2 Is Nothing)) AndAlso (buffer.Length = buffer2.Length)) Then
                Me.allNewerProducts = New UltraProductInfo(buffer.Length  - 1) {}
                Dim i As Integer
                For i = 0 To buffer.Length - 1
                    Dim majorVersion As Byte = buffer(i)
                    Dim minorVersion As Byte = buffer2(i)
                    Me.allNewerProducts(i) = New UltraProductInfo(MyBase.ProductName, Me.regKeyProductName, Me.codePrefix, Me.id, Me.requiresActivation, MyBase.Type, majorVersion, minorVersion)
                Next i
            Else
                Me.allNewerProducts = New UltraProductInfo(0  - 1) {}
            End If
        Catch obj1 As Object
        End Try
    End If
End Sub

Private Shared Function GetLicenseAssemblyInfo() As String
    Dim key As RegistryKey
    Dim str3 As String
    Dim format As String = "Infragistics.License, Culture="""", Version={0}, PublicKeyToken=7dd5c3163f2cd0cb"
    Dim key2 As RegistryKey = DirectCast(key = Nothing, RegistryKey)
    Try 
        key = Registry.ClassesRoot.OpenSubKey("Infragistics.License")
        key2 = key.OpenSubKey("Version1")
        Dim str2 As String = TryCast(key2.GetValue(Nothing),String)
        str3 = String.Format(format, str2)
    Catch exception1 As Exception
        str3 = "Infragistics.License, Culture="""", PublicKeyToken=7dd5c3163f2cd0cb"
    Finally
        If (Not key2 Is Nothing) Then
            key2.Close
        End If
        If (Not key Is Nothing) Then
            key.Close
        End If
    End Try
    Return str3
End Function

 

 


