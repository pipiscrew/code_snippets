//http://stackoverflow.com/questions/10070296/c-sharp-how-to-calculate-aspect-ratio

public string AspectRatio(int x, int y)
{
    double value = (double)x / y;
    if (value > 1.7)
        return "16:9";
    else
        return "4:3";
}