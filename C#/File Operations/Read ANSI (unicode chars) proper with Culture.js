http://www.xtremevbtalk.com/showthread.php?t=295890

                CultureInfo culture = new CultureInfo("el-GR");
                int codePage = culture.TextInfo.ANSICodePage;
                Encoding GreekEncoding = Encoding.GetEncoding(codePage);
  				tmp = System.IO.File.ReadAllText(fl, GreekEncoding);
