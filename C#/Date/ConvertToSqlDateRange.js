        public static DateTime? ConvertToSqlDateRange(DateTime? dt, bool ReturnMax = false)
        {
            if (dt.HasValue)
            {
                if (dt.Value < new DateTime(1753, 1, 2) || dt.Value > new DateTime(9999, 12, 30))
                {
                    dt = ReturnMax ? new DateTime(9999, 12, 30) : new DateTime(1753, 1, 2);
                }
            }
            return dt;
        }