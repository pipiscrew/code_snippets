//http://stackoverflow.com/questions/3210393/how-to-remove-all-non-alphanumeric-characters-from-a-string-except-dash

        private string removeNonAlphanumeric(string str)
        {
            char[] arr = str.ToCharArray();

            arr = Array.FindAll<char>(arr, (c => (char.IsLetterOrDigit(c)
                                              || char.IsWhiteSpace(c)
                                              || c == '-'
                                              || c == '.'
                                              || c == ','
                                              || c == '!'
                                              || c == '('
                                              || c == ')'
                                              || c == '&'
                                              || c == '_'
                                              || c == '['
                                              || c == ']'
                                              || c == '+')));
            str = new string(arr);

            return str;
        }
        
        
 //using the compact framework (which doesn't have FindAll)
		 char[] arr = str.Where(c => (char.IsLetterOrDigit(c) || 
		                             char.IsWhiteSpace(c) || 
		                             c == '-')).ToArray(); 
		
		str = new string(arr);