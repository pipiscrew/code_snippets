//http://stackoverflow.com/questions/6799631/removing-control-characters-from-a-utf-8-string
//As I read about utf-8, there's not a specific range for control characters and each character set has its own control characters.
//Can I remove control characters ?

        public static string RemoveControlCharacters(string inString)
        {
            if (inString == null) return null;

            StringBuilder newString = new StringBuilder();
            char ch;

            for (int i = 0; i < inString.Length; i++)
            {
                ch = inString[i];

                if (!char.IsControl(ch))
                    newString.Append(ch);
            }
            return newString.ToString();
        }