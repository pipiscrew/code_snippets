        int frame;
        private void timer1_Tick(object sender, EventArgs e)
        {
             frame++;
             if (frame % 2 == 0)
             {
                 this.Left -= 10;
             }
             else
             {
                 this.Left += 10;
             }

             if (frame == 5)
             {
                  timer1.Enabled = false;
                 textBox1.Text = Convert.ToBase64String(Encrypt(textBox1.Text, bbyte_1[int_0], bbyte_2[int_0]));
              
             }
        }
        
        
        timer interval 200