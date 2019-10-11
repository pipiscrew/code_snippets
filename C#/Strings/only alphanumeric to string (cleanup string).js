//http://stackoverflow.com/a/15150427/1320686
//linq
string withOutSpecialCharacters=new string(stringWithSpecialCharacters.Where(c =>char.IsLetterOrDigit(c) || char.IsWhiteSpace(c) || c == '-').ToArray());
