//http://stackoverflow.com/questions/6017778/c-sharp-regex-checking-for-a-z-and-a-z
//working is only for a-zA-z
        private static bool isValidAZ(String str)
        {
            return Regex.IsMatch(str, @"^[a-zA-Z]+$");
        }



**no working**
//http://stackoverflow.com/questions/1046740/how-can-i-validate-a-string-to-only-allow-alphanumeric-characters-in-it

            if (!Regex.IsMatch(txtID.Text, "^[a-zA-Z0-9]*$"))
              {
                  Mes("Please enter element name");
                  txtID.Focus();
                  return;
              }