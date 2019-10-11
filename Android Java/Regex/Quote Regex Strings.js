use a backslash: \). Parens must be escaped because they can be used to group parts of the regex.

//needs double \\

String template = ":asd: bravo\\! :\\)";

//or use 
Pattern.quote