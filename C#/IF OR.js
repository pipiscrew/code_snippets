if ((textBox1.Text.Length == 0) || (textBox2.Text.Length == 0))
            {
                label3.Text = "Please fill your details!";
                label3.ForeColor = Color.Red;
            }
            
            //if this is false
            if (!thisiPhone.Exists(targetOnPhone, bundle))
            {
                return false;
            }