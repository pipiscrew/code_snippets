        '>>>>>>>>>>>>>>>>> ONLY FOR DATE EXPIRED - NO FOR KEYGEN
        'Read REGISTRY VALUE FOR EXPIRED
        Dim readValue As String
        readValue = My.Computer.Registry.GetValue("HKEY_CURRENT_USER\Software\XYZProductions", "wow", "")

        If readValue <> Nothing Then
            Application.Exit()
        End If
        'Read REGISTRY VALUE FOR EXPIRED

        'DATE FOR DEMO
        If Now.Date.Month > 4 Or (Now.Date.Day < 6 Or Now.Date.Day > 10) Then
            'If DEMO EXPIRE WRITE REGISTRY VALUE

            'VISTA UAC - DONT SHOW THE ERROR
            Try
                My.Computer.Registry.SetValue("HKEY_CURRENT_USER\Software\XYZProductions", "wow", "InternetExplorer")
            Catch ex As Exception
            End Try
            'VISTA UAC - DONT SHOW THE ERROR

            Application.Exit()
        End If
        'DATE FOR DEMO
        '>>>>>>>>>>>>>>>>> ONLY FOR DATE EXPIRED - NO FOR KEYGEN
        
        
        OR
        
    My.Computer.Registry.SetValue("HKEY_CURRENT_USER\Software\VB and VBA Program Settings\G00gleTrans", "lng1", ImageComboBox1.SelectedIndex)
    My.Computer.Registry.SetValue("HKEY_CURRENT_USER\Software\VB and VBA Program Settings\G00gleTrans", "lng2", ImageComboBox2.SelectedIndex)
    
    
        Dim readValue As String = ""
        Try
            readValue = My.Computer.Registry.GetValue("HKEY_CURRENT_USER\Software\VB and VBA Program Settings\sRenamerNET", "fontSize", Nothing)
            If Not readValue Is Nothing Then
                TextBox2.Text = readValue
            End If

            readValue = My.Computer.Registry.GetValue("HKEY_CURRENT_USER\Software\VB and VBA Program Settings\sRenamerNET", "wordWrap", Nothing)
            If Not readValue Is Nothing Then
                chkWordWrap.Checked = readValue
            End If

        Catch ex As Exception
        End Try