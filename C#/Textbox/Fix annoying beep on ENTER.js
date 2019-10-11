        private void textBox1_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == 13)
            {
                e.Handled = true;
                button1.PerformClick();
            }
        }
        
more @:
http://stackoverflow.com/questions/2591259/cancel-key-press-event