        public static Int16 TryToParseInteger(string value)
        {
            Int16 number;
            bool result = Int16.TryParse(value, out number);
            if (result)
            {
                return number;
            }
            else
            {
                return -1;
            }
        }