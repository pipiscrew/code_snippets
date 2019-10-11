//when we are in class
        delegate void ReportViewer_DocumentLoadedCallback(object sender, EventArgs e);
        void ReportViewer_DocumentLoaded(object sender, EventArgs e)
        {
            if (ReportViewer.InvokeRequired)
            {
                ReportViewer.BeginInvoke(new ReportViewer_DocumentLoadedCallback(this.ReportViewer_DocumentLoaded), new object[] { sender, e });
                return;
            }
            ReportViewer.SetNewZoom(new PerpetuumSoft.Reporting.View.Zoom(PerpetuumSoft.Reporting.View.ZoomMode.Scale, 1));
        }
        

//FORMS
private delegate void iPhoneConnectedHandlerDelegate(object sender, ConnectEventArgs args); 
private void iPhoneConnectedHandler(object sender, ConnectEventArgs args)
{
    if (TR.InvokeRequired)
    {
        BeginInvoke(new iPhoneConnectedHandlerDelegate(iPhoneConnectedHandler), new object[] { sender, args });
        return; 
    }
    
    MessageBox.Show("iPhone Device Connected");
    
    iPhone phone = new iPhone();

    if (!phone.ConnectToPhone(args,true))
    {
        MessageBox.Show("Error!!  Device connected but not initialized!");
    }
    else
    {
        iPhoneIsNowConnectedEventHandler iPhoneIsNowConnectedEvent = this.iPhoneIsNowConnectedEvent;
        string[] directories = phone.GetDirectories("/",phone.currentBundleID);

        for (int i = 0; i < directories.Length; i++)
        {
            TR.Nodes[0].Nodes.Add(directories[i]);
        }
    }
 
 }
 
 //////////////
 
 Since NET 2.0 you can do:

void MyMethod1b(int a, int b){
  if (this.InvokeRequired)    {        
    // Reinvoke the same method if necessary        
    BeginInvoke(new MethodInvoker(delegate(){MyMethod1b(a, b);}));
  } else {
  // Do Whatever you need to do here       ...    
  }
}