 public enum StreamFormat {MP3=1, AAC, WMA,};
 
 public enum CarOptions
{
    SunRoof = 0x01,
    Spoiler = 0x02,
    FogLights = 0x04,
    TintedWindows = 0x08,
}

class FlagTest
{
    static void Main()
    {
        CarOptions options = CarOptions.SunRoof | CarOptions.FogLights;
        Console.WriteLine(options);
        Console.WriteLine((int)options);
    }
}


--

        private enum gridAtomikaCols
        {
            col01Katata3h,
            col02ArFanelas,
            col02bArEkkinhshs,
            col03CodeEOX,
            col04PlayerName,
            col05PlayerDOB,
            col06Team,
            col07Boles,
            col08TotalBoles,
            col09Time1stCourse,
            col10Points1stCourse,
            col11Time2ndCourse,
            col12Points2ndCourse,
            col13TelikosXronos,
            col14DiaforaXronoy,
            col15Apotelesma,
            col16Epipedo,
            col17Ba8moi
        }