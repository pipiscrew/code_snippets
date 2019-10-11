http://stackoverflow.com/questions/5398241/remove-leading-zeros-from-time-to-show-elapsed-time

        public static string TimeSpan2ReadableString(TimeSpan t)
        {
            string shortForm = "";
            if (t.Hours > 0)
            {
                shortForm += string.Format("{0}h", t.Hours.ToString());
            }
            if (t.Minutes > 0)
            {
                shortForm += string.Format("{0}m", t.Minutes.ToString());
            }
            if (t.Seconds > 0)
            {
                shortForm += string.Format("{0}s", t.Seconds.ToString());
            }
            return shortForm;
        }


ex. 55m36s 