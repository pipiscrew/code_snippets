        public static DateTime ParseDate(string appleDate, bool start2001)
        {
            try
            {
                decimal num = decimal.Parse(appleDate);//, System.Globalization.NumberStyles.Float);
                DateTime time = new DateTime(start2001 ? 0x7d1 : 0x7b2, 1, 1, 0, 0, 0);
                return time.AddSeconds((double)num);
            }
            catch (Exception)
            {
                return DateTime.MinValue;
            }
        }
        

    SQLiteDataReader rd;
    rd = SQLc.GetDATAREADER("select zcreationdate from znote");

    rd.Read();

    MessageBox.Show(ParseDate(rd.GetDecimal(0).ToString(), true).ToString());