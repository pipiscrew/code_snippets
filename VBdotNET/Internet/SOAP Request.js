//http://stackoverflow.com/questions/287126/how-to-post-soap-request-from-net


  Dim manualWebClient As New System.Net.WebClient()

            manualWebClient.Headers.Add("Content-Type", "application/soap+xml;  charset=utf-8")

            ' Note: don't put the <?xml... tag in--otherwise it will blow up with a 500 internal error message!
            Dim bytArguments As Byte() = System.Text.Encoding.ASCII.GetBytes("<AgentReservationListRQ Target=""Production"" Version=""1.000"" TimeStamp=""2011-08-01T12:01:35+03:00"" EchoToken=""34863186"" xmlns=""http://www.opentravel.org/OTA/2003/05"">" & _
    "  <agentBusinessID>" & System.Web.HttpUtility.UrlEncode(txtUser.Text.Trim()) & "</agentBusinessID>" & _
    "  <agentPassword>" & System.Web.HttpUtility.UrlEncode(txtPassword.Text.Trim()) & "</agentPassword>" & _
    "  <dateRange startDate=""" & dtp1.Value.ToString("yyyy-MM-dd") & """ endDate=""" & dtp2.Value.ToString("yyyy-MM-dd") & """/>" & _
    "  <reservationType>HotelReservation</reservationType>" & _
    "</AgentReservationListRQ>")
            Dim bytRetData As Byte() = manualWebClient.UploadData("http://entradatest.aheadrm.com/entrada/process", "POST", bytArguments)

            fil = Application.StartupPath & "\" & Date.Now.ToString("HHffffff") & ".xml"
            IO.File.WriteAllText(fil, System.Text.Encoding.ASCII.GetString(bytRetData))
            '        MessageBox.Show()