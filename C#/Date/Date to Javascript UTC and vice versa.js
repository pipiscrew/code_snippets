//http://chuchuva.com/pavel/2010/10/converting-net-datetime-to-javascript-date/
//http://stackoverflow.com/questions/249760/how-to-convert-unix-timestamp-to-datetime-and-vice-versa


        private void txtTAB4Day_TextChanged(object sender, EventArgs e)
        {
            if (txtTAB4Day.Text.Length > 0 && txtTAB4Month.Text.Length > 0 && txtTAB4Year.Text.Length > 0)
            {
                DateTime date1 = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
                //try
                //{
                int y = 0;
                int m = 0;
                int d = 0;
                int h = 0;
                int hm = 0;
                int hs = 0;

                bool test = int.TryParse(txtTAB4Year.Text, out hs);
                if (!test)
                    y = 0;
                else
                    y = hs;
                try
                {

                    if (y < 2002)
                        throw new ArgumentException("Year should be > 2001");

                    test = int.TryParse(txtTAB4Month.Text, out hs);
                    if (!test)
                        m = 0;
                    else
                        m = hs;

                    test = int.TryParse(txtTAB4Day.Text, out hs);
                    if (!test)
                        d = 0;
                    else
                        d = hs;




                    test = int.TryParse(txtTAB4Hour.Text, out hs);
                    if (!test)
                        h = 0;
                    else
                        h = hs;

                    test = int.TryParse(txtTAB4Minute.Text, out hs);
                    if (!test)
                        hm = 0;
                    else
                        hm = hs;

                    test = int.TryParse(txtTAB4Second.Text, out hs);
                    if (!test)
                        hs = 0;




                    date1 = new DateTime(y, m, d, h, hm, hs, DateTimeKind.Utc);
                }
                catch (Exception ex) { txtTAB4Result.Text = ex.Message; return; }

                String tmp = ToJavaScriptMilliseconds(date1).ToString();

                if (tmp.Length > 10)
                    tmp = tmp.Substring(0, 10);

                txtTAB4Result.Text = tmp;

                Console.WriteLine("**" + UnixTimeStampToDateTime(double.Parse(tmp)));
            }

        }

        private static readonly long DatetimeMinTimeTicks = (new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).Ticks;
        private long ToJavaScriptMilliseconds(DateTime dt)
        {
            return (long)((dt.ToUniversalTime().Ticks - DatetimeMinTimeTicks) / 10000);
        }


        public static DateTime UnixTimeStampToDateTime(double unixTimeStamp)
        {
            // Unix timestamp is seconds past epoch
            System.DateTime dtDateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0, System.DateTimeKind.Utc);
            dtDateTime = dtDateTime.AddSeconds(unixTimeStamp); //.ToLocalTime();
            return dtDateTime;
        }

        private void txtTAB4Result2_TextChanged(object sender, EventArgs e)
        {
            try
            {
                DateTime dt = UnixTimeStampToDateTime(double.Parse(txtTAB4Result2.Text));

                txtTAB4Year2.Text = dt.Year.ToString();
                txtTAB4Month2.Text = dt.Month.ToString();
                txtTAB4Day2.Text = dt.Day.ToString();

                txtTAB4Hour2.Text = dt.Hour.ToString();
                txtTAB4Minute2.Text = dt.Minute.ToString();
                txtTAB4Second2.Text = dt.Second.ToString();
            }
            catch
            {
                txtTAB4Year2.Text = txtTAB4Month2.Text = txtTAB4Day2.Text = txtTAB4Hour2.Text = txtTAB4Minute2.Text = txtTAB4Second2.Text = "ERR";
            }
        }
