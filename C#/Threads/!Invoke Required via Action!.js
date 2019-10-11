        private void UpdateProgressBar(int percentage)
        {
            // If on a worker thread, marshal the call to the UI thread
            if (progressBar1.InvokeRequired)
            {
                progressBar1.Invoke(new Action<int>(UpdateProgressBar), percentage);
            }
            else
            {
                progressBar1.Value = percentage;
            }
        }
        
        
//when there is no params! use MethodInvoker
//http://stackoverflow.com/questions/2367718/automating-the-invokerequired-code-pattern

private void DoGUISwitch() {
    if (object1.InvokeRequired) {
        object1.Invoke(new MethodInvoker(() => { DoGUISwitch(); }));
    } else {
        object1.Visible = true;
        object2.Visible = false;
    }
}