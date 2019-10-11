            string[] output = textBox2.Text.Split(',').Select(email => email.Trim()).ToArray();

            textBox1.Lines=output;