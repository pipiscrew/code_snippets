
        Dim readValue$ = ""

        TextBox2.Text = My.Computer.Registry.GetValue("HKEY_CURRENT_USER\Software\VB and VBA Program Settings\RARit", "RARpath", "C:\Program Files\WinRAR")
        TextBox1.Text = My.Computer.Registry.GetValue("HKEY_CURRENT_USER\Software\VB and VBA Program Settings\RARit", "Comment", "")

        Try
            ComboBox1.SelectedIndex = My.Computer.Registry.GetValue("HKEY_CURRENT_USER\Software\VB and VBA Program Settings\RARit", "Method", 3)
        Catch
            ComboBox1.SelectedIndex = 3
        End Try



    Private Sub Form1_FormClosing(ByVal sender As Object, ByVal e As System.Windows.Forms.FormClosingEventArgs) Handles Me.FormClosing
        Try
            My.Computer.Registry.SetValue("HKEY_CURRENT_USER\Software\VB and VBA Program Settings\RARit", "RARpath", TextBox2.Text)
            My.Computer.Registry.SetValue("HKEY_CURRENT_USER\Software\VB and VBA Program Settings\RARit", "Comment", TextBox1.Text)
            My.Computer.Registry.SetValue("HKEY_CURRENT_USER\Software\VB and VBA Program Settings\RARit", "Method", ComboBox1.SelectedIndex)
        Catch ex As Exception
        End Try
    End Sub