            // create a writer and open the file
            TextWriter tw = new StreamWriter("date.txt");

            // write a line of text to the file
            tw.WriteLine(DateTime.Now);

            // close the stream
            tw.Close();
            
            
            OR


                using (StreamWriter outfile =
                new StreamWriter(Application.StartupPath + @"\catch.cfg"))
                {
                    outfile.Write(str);
                }
                
                
//append, if doesnt exist will create it
            using (StreamWriter outfile = new StreamWriter(Application.StartupPath + @"\logins.dat",true))
            {
                outfile.WriteLine(txtURL.Text + "|" + txtUser.Text + "|" + txtPass.Text + "|" + txtAPPid.Text);
            }
                