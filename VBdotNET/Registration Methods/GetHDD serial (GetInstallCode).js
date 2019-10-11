'easygen app
Private Function GetInstallCode() As String
    Dim str As String = ""
    Try 
        Dim str2 As String = String.Empty
        Dim class2 As New ManagementClass("Win32_Processor")
        Dim obj2 As ManagementObject
        For Each obj2 In class2.GetInstances
            If (str2 = String.Empty) Then
                str2 = obj2.get_Properties.get_Item("ProcessorId").get_Value.ToString
            End If
        Next
        str = ("EGN2" & str2)
    Catch obj1 As Object
        Try 
            Dim str3 As String = Application.StartupPath.Substring(0, 2)
            Dim obj3 As New ManagementObject(("win32_logicaldisk.deviceid=""" & str3 & """"))
            obj3.Get
            str = ("EGN2PROCF" & obj3.get_Item("VolumeSerialNumber").ToString)
        Catch exception1 As TypeInitializationException
            MessageBox.Show("There is a problem with the WMI configuration on your system.  Please try re-installing WMI from the Microsoft website or contact Microsoft Support and report the problem accessing the Management component.", "WMI error", MessageBoxButtons.OK, MessageBoxIcon.Hand)
            Environment.Exit(0)
        Catch obj4 As Object
            MessageBox.Show("Windows Management Instrumentation (WMI) CORE is not present on your system.  Please download and install this from Microsoft before using easyGen.", "WMI Core", MessageBoxButtons.OK, MessageBoxIcon.Hand)
            Environment.Exit(0)
        End Try
    End Try
    Return str
End Function