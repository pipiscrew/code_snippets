        private void btnWork_Click(object sender, EventArgs e)
        {
            Thread oThread;
            oThread = new Thread(DoConvert);
            oThread.Start();

           // DoConvert();
        }

        private delegate void DoConvertDelegate();
        private void DoConvert()
        {
            if (lstv.InvokeRequired)
            {
                Invoke(new DoConvertDelegate(DoConvert));
                return;
            }

            for (int i = 0; i < lstv.Items.Count; i++)
            {
                ProcessNextFile((VideoItem)lstv.Items[i].Tag);
            }
        }