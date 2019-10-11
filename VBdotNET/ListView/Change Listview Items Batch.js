'1-one public variable as :
'Public selectedLSTVitems As ListView.SelectedListViewItemCollection

'2-and then we just call the frmBatchReplace form
'        selectedLSTVitems = lstv.SelectedItems

'        Dim frm As New frmBatchReplace
'        frm.ShowDialog()
'        frm.Dispose()
':)


Public Class frmBatchReplace

    Dim sourceItems$ = ""

    Private Sub FilesFolderEditPropertiesMultiple_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        For Each item As ListViewItem In selectedLSTVitems
            sourceItems = sourceItems & item.SubItems(1).Text & vbCrLf
            KryptonTextBox1.Text = KryptonTextBox1.Text & item.SubItems(1).Text & vbCrLf
        Next
    End Sub

	'search textbox
    Private Sub KryptonTextBox3_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonTextBox3.TextChanged
        KryptonTextBox1.Text = Replace(sourceItems, KryptonTextBox3.Text, KryptonTextBox2.Text, , , CompareMethod.Text)
    End Sub

    'replace textbox
    Private Sub KryptonTextBox2_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonTextBox2.TextChanged
        KryptonTextBox1.Text = Replace(sourceItems, KryptonTextBox3.Text, KryptonTextBox2.Text, , , CompareMethod.Text)
    End Sub

	'radio button Show original values
    Private Sub KryptonRadioButton1_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonRadioButton1.CheckedChanged
        If KryptonRadioButton1.Checked Then
            KryptonTextBox1.Text = sourceItems
        End If
    End Sub

	'radio button Preview changes
    Private Sub KryptonRadioButton2_CheckedChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonRadioButton2.CheckedChanged
        If KryptonRadioButton2.Checked Then
            KryptonTextBox1.Text = Replace(sourceItems, KryptonTextBox3.Text, KryptonTextBox2.Text, , , CompareMethod.Text)
        End If
    End Sub

	'Accept button
    Private Sub KryptonButton1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonButton1.Click
        Dim arr() As String
        Dim i%

        arr = Split(KryptonTextBox1.Text, vbCrLf)

        For i = 0 To UBound(arr) - 1
            selectedLSTVitems(i).SubItems(1).Text = arr(i)
        Next

        Me.Close()
    End Sub

    Private Sub KryptonButton2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonButton2.Click
        Me.Close()
    End Sub
End Class