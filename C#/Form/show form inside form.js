//https://www.codeproject.com/Answers/414114/Csharp-Form-inside-a-Panel

        private void btn_vlookup_Click(object sender, EventArgs e)
        {
            show_hide_ctls(false);
            Form2 myForm = new Form2();
            myForm.TopLevel = false;
            myForm.AutoScroll = true;
            this.Controls.Add(myForm);
            myForm.Show();
        }

        private void show_hide_ctls(bool show)
        {
            foreach (Control item in this.Controls)
            {
                item.Visible = show;
            }
        }
        
        //the back button Form2
        private void btn_back_Click(object sender, EventArgs e)
        {
            Type type = typeof(Form1);
            MethodInfo info = type.GetMethod("show_hide_ctls");
            info.Invoke(this.Parent, new object[] { true });
            this.Close();
        }
        
        //the call to Form2
        public void show_hide_ctls(bool show)
        {
            foreach (Control item in this.Controls)
            {
                item.Visible = show;
            }
        }
        