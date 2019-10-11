sthn 1 forma

    Dim WithEvents frmAddContact As frmCustomersAddContact

    Private Sub frmAddContact_FILLGrid() Handles frmAddContact.FILLGRiD
        FillTABepages()
    End Sub
    
    
    Private Sub UltraButton2_Click() Handles UltraButton2.Click
        frmAddContact = New frmCustomersAddContact
        frmAddContact.ShowDialog()
        frmAddContact.Dispose()

        'FillTABepages()
    End Sub
    

sth 2 forma

Public Event FILLGRiD()


kai sto
    Private Sub Analysis_FormClosing() Handles Me.FormClosing
            
            RaiseEvent FILLfoRM()

        End T