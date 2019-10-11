'http://social.msdn.microsoft.com/Forums/en/winformsdatacontrols/thread/6161f927-2885-4991-99da-912588ea2c8c
  Private Sub frmAbility_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
    Try
      CType(DataGridView1, System.ComponentModel.ISupportInitialize).BeginInit()
      DataGridView1.SuspendLayout()
      'load rows here
      DataGridView1.ResumeLayout()
      CType(DataGridView1, System.ComponentModel.ISupportInitialize).EndInit()
    Catch ex As Exception
      MsgBox(ex.Message)
    End Try
  End Sub
