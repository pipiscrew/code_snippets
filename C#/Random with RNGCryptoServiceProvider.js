//http://www.vcskicks.com/code-snippet/rng-int.php

private static int NextInt(int min, int max)
{
    RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
    byte[] buffer = new byte[4];
    
    rng.GetBytes(buffer);
    int result = BitConverter.ToInt32(buffer, 0);

    return new Random(result).Next(min, max);
}