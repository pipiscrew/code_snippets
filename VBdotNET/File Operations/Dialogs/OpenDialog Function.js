    Public Function OpenDialog(ByVal Filename$, ByVal defaultExtension$, ByVal fFilter$) As String
        Dim cdlg As New OpenFileDialog
        Try
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




ex.
OpenDialog("", "db3", "SQLite DBase (*.db3)|*.db3")

OpenDialog("", "jpg;png;gif", "Picture files (*.jpg,*.png,*.gif)|*.jpg;*.png;*.gif")

ex.
"Media Files|*.mpg;*.avi;*.wma;*.mid;*.wav;*.mp2;*.mp3|All Files|*.*"

sto filter bgazei 2options ^