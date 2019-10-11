//using Regex.Escape escapes all expressions!
txtDest.Text = Regex.Replace(txtDest.Text, Regex.Escape(txtFind.Text), txtReplace.Text, RegexOptions.IgnoreCase);