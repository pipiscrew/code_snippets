//timer interval =1 on startl

        int frame = 0;
        bool status = false;
        private void timer1_Tick(object sender, EventArgs e)
        {
            frame++; 
            if(frame % 2 == 0) 
            {
                //red - error
                if (status)
                {
                    pictureBox1.CreateGraphics().DrawString("patch success", new Font(MF.Families[0], 12f, FontStyle.Regular), new SolidBrush(Color.FromArgb(34, 136, 47)), SuccessPOS);
                }
                else
                {
                    pictureBox1.CreateGraphics().DrawString("patch failed" + (PatchFailDetail ? "\r\n" + errorSTR : ""), new Font(MF.Families[0], 12f, FontStyle.Regular), new SolidBrush(Color.FromArgb(189, 16, 0)), FailPOS);                      
                }
                //green - SUCCESS

                timer1.Interval = 400;
            }
            else
                pictureBox1.Refresh();
        }