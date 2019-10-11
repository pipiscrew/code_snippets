source : http://www.knowdotnet.com/articles/numerictextboxes.html

accept only 0-9
If Not Char.IsDigit(e.KeyChar) Then e.Handled = True

accept only Letters
If Not Char.IsLetter(e.KeyChar) Then e.Handled = True

accept only 0-9-.-,
If e.KeyChar = "." Or e.KeyChar = "," Then Exit Sub
If Not Char.IsDigit(e.KeyChar) Then e.Handled = True