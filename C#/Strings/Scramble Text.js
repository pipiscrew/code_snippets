//http://stackoverflow.com/questions/1540394/scrambling-text-elements-in-xml
LINQ req.
        public static string Scramble(string s)
        {
            var a = s.Select(ch => (char)(ch + 3)).ToArray();
            return new string(a);
        }

        public static string UnScramble(string s)
        {
            var a = s.Select(ch => (char)(ch - 3)).ToArray();
            return new string(a);
        }