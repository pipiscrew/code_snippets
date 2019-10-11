manipulate controls when invoke req

    Private Sub EnableFrame()
        MoviesPanel.Enabled = True
    End Sub


    Private Sub IMDBPars_finalTitle(ByVal title As IMDBTitle) Handles IMDBPars.finalTitle
        If Me.txtIMDBurl.InvokeRequired Then
            If title.URL = "http://www.imdb.com/title//" Then
>>>>>>>>>>>>>>>>>>>> MoviesPanel.Invoke(New MethodInvoker(AddressOf EnableFrame))
                MsgBox("No movie found", MsgBoxStyle.Information, apTitle)
                Exit Sub
            End If

            Dim d As New IMDBPars_finalTitleResponceCallback(AddressOf IMDBPars_finalTitle)

            Me.Invoke(d, New Object() {title})
        Else
            txtIMDBurl.Text = title.URL
        End if