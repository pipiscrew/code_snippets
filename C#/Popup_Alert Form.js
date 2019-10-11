//http://stackoverflow.com/questions/3644315/show-a-winform-over-the-notification-area

       Form2 tmp;
        private void kryptonButton1_Click(object sender, EventArgs e)
        {
            //right corner
            //tmp = new Form2();
            //tmp.Opacity = 0.0;
            ////tmp.ClientSize = new Size(200, 200);
            //tmp.Location = new Point((this.Location.X + (this.Width))-tmp.Width , (this.Location.Y + (this.Height)) - tmp.Height );


            Rectangle workingArea = Screen.PrimaryScreen.WorkingArea;
            tmp = new Form2();
            tmp.Opacity = 0.0;
            tmp.ClientSize = new Size(200, 200);
            //tmp.Location = new Point(this.Location.X + (this.Width), this.Location.Y + (this.Height));
            int left = workingArea.Width - tmp.Width;
            int top = workingArea.Height - tmp.Height;
            tmp.Location = new Point(left, top);

            tmp.Show();

			
            timer1.Enabled = true;
            //grabbed from DevExpress.XtraBars > AlertForm
            //timer interval 30/60/120
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            tmp.Opacity += 0.1;

            if (tmp.Opacity == 0.8)
                timer1.Enabled = false;
            //kryptonGroupBox1.opacity
            //        if (this.form.Opacity <= 0.0)
            //        {
            //            this.form.Close();
            //            this.form.Dispose();
            //        }
            //        this.form.Opacity -= 0.1;
            //    }
            //    if (this.State == AlertTimerState.Live)
            //    {
            //        this.State = AlertTimerState.Hide;
            //    }
            //    if (this.State == AlertTimerState.Start)
            //    {
            //        this.form.Opacity += 0.1;
            //        if (this.form.Opacity >= this.form.DefaultOpacity)
            //        {
            //            this.form.Opacity = this.form.DefaultOpacity;
            //            this.State = AlertTimerState.Live;
            //        }
            //    }
            //}

        }