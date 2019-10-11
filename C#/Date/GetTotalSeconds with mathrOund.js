//http://msdn.microsoft.com/en-us/library/75ks3aby.aspx
//http://msdn.microsoft.com/en-us/library/system.timespan.totalseconds(v=vs.71).aspx
        private double GetTotalSeconds(string inputTime)
        {
            int len;
            TimeSpan tmpTime;

            try
            {
                len = inputTime.Split(new Char[] { ':' }).Length - 1;

                if (len == 2)
                {
                    tmpTime = TimeSpan.Parse(inputTime);
                    Console.Write(tmpTime.TotalSeconds);
                    return Math.Round(tmpTime.TotalSeconds, 2);
                }
                else if (len == 1)
                {
                    tmpTime = TimeSpan.Parse("00:" + inputTime);
                    Console.Write(tmpTime.TotalSeconds);
                    return Math.Round(tmpTime.TotalSeconds, 2); ;
                }
                else
                    return 0;
            }
            catch
            {
                return 0;
            }
        }

