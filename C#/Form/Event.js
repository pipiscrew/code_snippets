//parent form
        public delegate void POSReturn(int value);
        public event POSReturn POSResponse;
        
        private void lstv_Click(object sender, EventArgs e)
        {
            if (POSResponse != null)
                POSResponse(int.Parse(lstv.SelectedItems[0].Text));
        }
        
//calling form
            frmTimeline frmT = new frmTimeline();
            frmT.POSResponse += new frmTimeline.POSReturn(frmT_POSResponse);
            frmT.ShowDialog();
            frmT.POSResponse -= new frmTimeline.POSReturn(frmT_POSResponse);

		//event raised
        void frmT_POSResponse(int value)
        {
            isonMove = true;
            int newPOS = value;
            panelTimeLine.Position = newPOS;
            FramePositionChange(this, new NewFramePositionEventArgs(newPOS));
            chkDeleteFrame.Checked = delFrames[panelTimeLine.Position] == 1 ? true : false;
            lblVideoPOS.Text = "Video Position : " + value.ToString();
            isonMove = false;
        }