DateTime dTRunning = dtp1.Value;

dTRunning = dTRunning.AddDays(1);
day = dTRunning.ToString("dddd");

if (dTRunning.DayOfWeek == DayOfWeek.Saturday || dTRunning.DayOfWeek == DayOfWeek.Sunday)
    weekend = true;