        private void button1_Click(object sender, EventArgs e)
        {
            optMethod(2);
        }

        void optMethod(int first, double second = 0.0, string third = "Hello") 
        {
            MessageBox.Show(third);
        }
        
        
        OR

        public static string Slugify(string phrase, [System.Runtime.InteropServices.Optional, System.Runtime.InteropServices.DefaultParameterValue(50)] int maxLength)
        {
            string str = Regex.Replace(Regex.Replace(RemoveAccents(phrase), @"[^a-zA-Z0-9\s'-]", ""), @"\s+", " ").Trim();
            return str.Substring(0, (str.Length <= maxLength) ? str.Length : maxLength).Trim();
        }