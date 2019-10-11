        public static string getPercentage(decimal current, decimal total)
        {
            try
            {
                //http://stackoverflow.com/a/4561446
                //http://stackoverflow.com/a/9288913
                //string.Format("{0:N2}%", x);

                return string.Format("{0:N2}", ((current / total) * 100m));
                //return ((current / total) * 100m).ToString("{0:N2}%") ; //(int)Math.Round((double)(100 * complete) / total);
            }
            catch { return "0%"; }
        }