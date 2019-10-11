//http://stackoverflow.com/questions/698498/is-there-a-stock-idle-wait-dialog

        //used by dynamic loading form - when true loading form close
        bool FinishedProcessing = false;

        internal void ShowLoading()
        {

            System.Threading.AutoResetEvent DialogLoadedFlag = new System.Threading.AutoResetEvent(false);

            (new System.Threading.Thread(() =>
            {

                Form StockWaitForm = new Form()
                {
                    Name = "ReportWaitForm",
                    Text = "Preparing Report...",
                    ControlBox = false,
                    FormBorderStyle = FormBorderStyle.FixedDialog,
                    StartPosition = FormStartPosition.CenterParent,
                    Width = 240,
                    Height = 60,
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

				this.Invoke((MethodInvoker)(()=>StockWaitForm.ShowDialog(this)));  

				//in class
                //ReportViewer.BeginInvoke((MethodInvoker)(() => StockWaitForm.ShowDialog(ReportViewer)));


            })).Start();
        }