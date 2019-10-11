##	in the class :

        internal class UserArgs
        {
            internal string destFolder { get; set; }
            internal ArrayList sFiles { get; set; }
        }
        
        
##@ call 

        var args = new UserArgs() { destFolder = GetPathFromTreeview(), sFiles = General.CopyFilesList };
		//otherwise if we want only 1parameter , we pass it here
        backgroundWorker1.RunWorkerAsync(args);
        
        
##@dowork
        private void backgroundWorker1_DoWork(object sender, DoWorkEventArgs e)
        {
            //when we have only 1 parameter^^ if is string array  string[] fns = (string[])e.Argument;
            UserArgs args = (UserArgs) e.Argument;
            int cnt;
            string tmp = (string) args.destFolder ;

            for (cnt = 0; cnt < args.sFiles.Count; cnt++)
            {
                CopyFile(phone, args.sFiles[cnt].ToString(), tmp);
            }

            MessageBox.Show("Done");
        }
        
#RunWorkerCompleted (here we update the GUI, there is no Invalid Cross)
        private void backgroundWorker1_RunWorkerCompleted(object sender, RunWorkerCompletedEventArgs e)
        {
            lstv.BeginUpdate();
            lstv.Items.Clear();
        }

#if want to make changes @ GUI on DoWork event
just we call from there the proc (that exists a delegate)

        private delegate void RemoveItemDelegate(int lstvIndex); 
        private void RemoveItem(int lstvIndex)
        {
            if (lstv.InvokeRequired)
            {
                BeginInvoke(new RemoveItemDelegate(RemoveItem), new object[] { lstvIndex });
                return;
            }
            lstv.Items.RemoveAt(lstvIndex);
        }