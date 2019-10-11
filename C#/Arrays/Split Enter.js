                string tmp = File.ReadAllText(Application.StartupPath + "\\nodes.txt");
                string[] tmpArr = tmp.Split('\n');// Regex.Split(tmp, "\r\n");
                textBox1.Items.AddRange(tmpArr);
                
                
                string[] lines = tmp.Split(new string[] { "\r\n", "\n" }, StringSplitOptions.None);