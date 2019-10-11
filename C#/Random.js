//proper2013 or use RNGCrypto
        private static readonly Random random = new Random();
        private static readonly object syncLock = new object();
        public static int RandomNumber(int min, int max)
        {
            lock (syncLock)
            { // synchronize
                return random.Next(min, max);
            }
        }



/////////////////////////////////////////////////////////////////////////////////////
int num = new Random(Environment.TickCount).Next(0x2710);


--

//http://stackoverflow.com/questions/767999/random-number-generator-not-working-the-way-i-had-planned-c

Every time you do new Random() it is initialized using the clock. This means that in a
tight loop you get the same value lots of times. You should keep a single Random instance
and keep using Next on thesame instance.

//Function to get random number
private static readonly Random random = new Random();
private static readonly object syncLock = new object();
public static int RandomNumber(int min, int max)
{
    lock(syncLock) { // synchronize
        return random.Next(min, max);
    }
}

-OR-
 	Random random8 = new Random();
    str = str + char.ToString((char) random8.Next(0x41, 0x5b));
    Thread.Sleep(13);
    Random random7 = new Random();
    str = str + char.ToString((char) random7.Next(0x30, 0x3a));
    Thread.Sleep(13);
    Random random6 = new Random();
    str = str + char.ToString((char) random6.Next(0x30, 0x3a));
    Thread.Sleep(13);
    Random random5 = new Random();
    str = str + char.ToString((char) random5.Next(0x41, 0x5b));
    Thread.Sleep(13);
    Random random4 = new Random();
    str = str + char.ToString((char) random4.Next(0x41, 0x5b));
    Thread.Sleep(13);
    Random random3 = new Random();
    str3 = str3 + char.ToString((char) random3.Next(0x30, 0x3a));
    Thread.Sleep(13);
    Random random2 = new Random();
    str3 = str3 + char.ToString((char) random2.Next(0x30, 0x3a));
