        public static string getDateString(DateTime? dt)
        {
            return dt.HasValue ? dt.Value.ToShortDateString() : "";
        }