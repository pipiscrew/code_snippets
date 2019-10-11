     Private Sub WebBrowser1_Navigated(ByVal sender As Object, ByVal e As System.Windows.Forms.WebBrowserNavigatedEventArgs) Handles WebBrowser1.Navigated
        If e.Url.ToString = "about:blank" Then Exit Sub

        Dim URLstr$ = WebBrowser1.DocumentText