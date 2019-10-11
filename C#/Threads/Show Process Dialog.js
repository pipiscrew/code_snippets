//http://stackoverflow.com/questions/698498/is-there-a-stock-idle-wait-dialog
        
        //Update to true when finished loading or processing
        bool FinishedProcessing = false;
        private void button5_Click(object sender, EventArgs e)
        {
           System.Threading.AutoResetEvent DialogLoadedFlag = new System.Threading.AutoResetEvent(false);


            (new System.Threading.Thread(() =>
            {

                Form StockWaitForm = new Form()
                {
                    Name = "StockWaitForm",
                    Text = "Please Wait...",
                    ControlBox = false,
                    FormBorderStyle = FormBorderStyle.FixedDialog,
                    StartPosition = FormStartPosition.CenterParent,
                    Width = 240,
                    Height = 80,
                    Enabled = true
                };

                ProgressBar ScrollingBar = new ProgressBar()
                {
                    Style = ProgressBarStyle.Marquee,
                    Parent = StockWaitForm,
                    Dock = DockStyle.Fill,
                    Enabled = true
                };

                StockWaitForm.Load += new EventHandler((x, y) =>
                {
                    DialogLoadedFlag.Set();
                    (new System.Threading.Thread(() =>
                    {
                        while (FinishedProcessing == false) Application.DoEvents();
                        StockWaitForm.Invoke((MethodInvoker)(() => StockWaitForm.Close()));
                    })).Start();

                });


                this.Invoke((MethodInvoker)(() => StockWaitForm.ShowDialog(this)));


            })).Start(); 
        }

        private void button6_Click(object sender, EventArgs e)
        {
            FinishedProcessing = true;
        }