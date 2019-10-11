Imports System.Data.Sql
Private Sub ConneProperties_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
Cursor = System.Windows.Forms.Cursors.WaitCursor
Dim instance As SqlDataSourceEnumerator = SqlDataSourceEnumerator.Instance
Dim table As System.Data.DataTable = instance.GetDataSources()
For Each row As DataRow In table.Rows
TextBox1.Items.Add(row(0) & IIf(row(1).ToString.Length > 0, "\" & row(1), ""))
Next
TextBox1.Text = "(local)"
Cursor = System.Windows.Forms.Cursors.Default
End Sub
