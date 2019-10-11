#when call the bgworker
backgroundWorker1.WorkerReportsProgress = true;
backgroundWorker1.RunWorkerAsync(args);

#@ dowork
backgroundWorker1.ReportProgress(cnt);

#show the process
private void backgroundWorker1_ProgressChanged(object sender, ProgressChangedEventArgs e)
{
    updatePRogressBAR(e.ProgressPercentage );
}