Private DC As New DataClasses1DataContext


    Private Sub btnUpdate_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnUpdate.Click
        '--------------------------------
        'Update PATIENT LASTNAME on the selected row
        '--------------------------------

        Dim k As Double
        k = DataGridView1.SelectedRows(0).Cells(0).Value

        Dim rows = (From p In DC.PATIENTs Where p.ID = k Select p).Single

        Dim testPatient As PATIENT = rows

        testPatient.LASTNAME = TextBox1.Text

        DC.SubmitChanges()
    End Sub

    Private Sub btnADDNEW_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnADDNEW.Click
        '--------------------------------
        'AddNEW PATIENT
        '--------------------------------

        Dim pa1 As New PATIENT
        pa1.LASTNAME = TextBox1.Text
        DC.PATIENTs.InsertOnSubmit(pa1)
        DC.SubmitChanges()
    End Sub

    Private Sub btnDELETE_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnDELETE.Click
        '--------------------------------
        'DELETE PATIENT - selected row
        '--------------------------------

        Dim k As Double
        k = DataGridView1.SelectedRows(0).Cells(0).Value

        Dim rows = (From p In DC.PATIENTs Where p.ID = k Select p).Single

        Dim testPatient As PATIENT = rows

        DC.PATIENTs.DeleteOnSubmit(testPatient)
        DC.SubmitChanges()
    End Sub

    Private Sub btnFILLGRID_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnFILLGRID.Click
        '--------------------------------
        'Fill Grid with TABLE data
        '--------------------------------
        DataGridView1.DataSource = DC.PATIENTs.ToList
    End Sub
