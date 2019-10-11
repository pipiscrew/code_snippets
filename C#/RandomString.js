        public static string GetRandomString(int length)
        {
            var r = new Random();
            return new String(Enumerable.Range(0, length).Select(n => (Char)(r.Next(65, 90))).ToArray());
        }