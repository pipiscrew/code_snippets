 MsgBox("User's Domain Name:" & Environment.UserDomainName & "\" & Environment.UserName)
 
 'MAC
     Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim theNetworkInterfaces() As System.Net.NetworkInformation.NetworkInterface = System.Net.NetworkInformation.NetworkInterface.GetAllNetworkInterfaces()

        For Each currentInterface As System.Net.NetworkInformation.NetworkInterface In theNetworkInterfaces

            MessageBox.Show(currentInterface.GetPhysicalAddress().ToString())

        Next
    End Sub