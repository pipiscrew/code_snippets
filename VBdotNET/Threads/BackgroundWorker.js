-bazoyme to control sthn forma

-otan 8eloyme kaloyme
BackgroundWorker1.RunWorkerAsync()

sto event trexoyme :


Private Sub BackgroundWorker1_DoWork(ByVal sender As Object, ByVal e As System.ComponentModel.DoWorkEventArgs) Handles BackgroundWorker1.DoWork

'ayth thn sub poy 8eloyme
RDDParser.MakeRequest 
End Sub


otan teliwsei to work

    Private Sub BackgroundWorker1_RunWorkerCompleted(ByVal sender As Object, ByVal e As System.ComponentModel.RunWorkerCompletedEventArgs) Handles BackgroundWorkerUPD.RunWorkerCompleted
        MsgBox("Updated!", MsgBoxStyle.Information, apTitle)
    End Sub

If you "handle" the exception with a Try-Catch block in the DoWork() handler, the BackgroundWorker won't work
If the operation [that you call from your DoWork() handler] raises an exception that your code does not handle, the BackgroundWorker catches the exception and passes it into the RunWorkerCompleted event handler, where it is exposed as the Error property of 



pws na pername parameters stis sub mesw BG

            Dim BGarguments() As String = {rarPath, arguments}
            BackgroundWorker1.RunWorkerAsync(BGarguments)




    Private Sub BackgroundWorker1_DoWork(ByVal sender As Object, ByVal e As System.ComponentModel.DoWorkEventArgs) Handles BackgroundWorker1.DoWork
        ShellandWait(e.Argument(0), e.Argument(1))
    End Sub