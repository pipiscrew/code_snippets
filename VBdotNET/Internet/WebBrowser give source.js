        WebBrowser1.Navigate("about:blank")
        While WebBrowser1.ReadyState = WebBrowserReadyState.Loading
            Application.DoEvents()
        End While


        WebBrowser1.Document.Write(tmp)