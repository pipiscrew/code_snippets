    Private Function SaveDialog(ByVal Filename$, ByVal defaultExtension$, ByVal fFilter$) As String
        Dim cdlg As New SaveFileDialog
        Try
            cdlg.OverwritePrompt = True
            cdlg.FileName = Filename
            cdlg.DefaultExt = defaultExtension
            cdlg.Filter = fFilter
            'cdlg.InitialDirectory = System.Environment.GetFolderPath(System.Environment.SpecialFolder.DesktopDirectory)

            Dim result As DialogResult = cdlg.ShowDialog()

            If (result = DialogResult.OK) Then
                Return cdlg.FileName
            Else
                Return ""
            End If

        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
            Return ""
        Finally
            cdlg.Dispose()
        End Try
    End Function
    
    
    '>>>example
    txtSNK.Text = SaveDialog("veteran", "snk", "StrongName keypair file (*.snk)|*.snk")