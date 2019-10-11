var greek = new CultureInfo("el-GR").DateTimeFormat;
DateTime dt = DateTime.ParseExact(date, "dd/M/yyyy h:mm:ss tt", greek, DateTimeStyles.None);