//http://forum.codecall.net/topic/48863-extracting-icon-from-exe/
Declare Function ExtractIcon Lib "shell32.dll" Alias "ExtractIconExA" (ByVal lpszFile As String, ByVal nIconIndex As Integer, ByRef phiconLarge As Integer, ByRef phiconSmall As Integer, ByVal nIcons As Integer) As Integer
Private Sub btnMiscApps_Click(sender As Object, e As EventArgs) Handles btnMiscApps.Click
    If (MiscStrip.Items.Count = 0) Then
        Dim m_dir As String = Application.StartupPath + "\\+misc"

        If (Directory.Exists(m_dir)) Then
            Dim bigIcon As Integer
            Dim smallIcon As Integer

            For Each fl In Directory.GetFiles(m_dir, "*.exe")

                ExtractIcon(fl, 0, bigIcon, smallIcon, 1)

                If (smallIcon > 0) Then
                    MiscStrip.Items.Add(Path.GetFileNameWithoutExtension(fl), Icon.FromHandle(smallIcon).ToBitmap, AddressOf misc_app_run)
                Else
                    MiscStrip.Items.Add(Path.GetFileNameWithoutExtension(fl), StrongNameHelper.My.Resources.Resources.SND, AddressOf misc_app_run)
                End If

            Next

        End If
    End If

    MiscStrip.Show(Windows.Forms.Cursor.Position.X, Windows.Forms.Cursor.Position.Y)
End Sub

Private Sub misc_app_run(sender As Object, e As EventArgs)
    Dim item As ToolStripMenuItem = TryCast(sender, ToolStripMenuItem)
    Dim m_dir As String = Application.StartupPath + "\\+misc"

    If item IsNot Nothing Then
        If (File.Exists(m_dir & "\\" & item.Text & ".exe")) Then
            Try
                Process.Start(m_dir & "\\" & item.Text & ".exe")
            Catch ex As Exception
                MessageBox.Show(ex.Message & vbCrLf & "Operation aborted!", apTitle, MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
            End Try
        Else
            MessageBox.Show("The file doesnt exist!", apTitle, MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
        End If
    End If
End Sub