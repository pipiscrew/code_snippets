//http://stackoverflow.com/questions/2395438/convert-system-drawing-color-to-rgb-and-hex-value

private static String HexConverter(System.Drawing.Color c)
{
    return "#" + c.R.ToString("X2") + c.G.ToString("X2") + c.B.ToString("X2");
}

private static String RGBConverter(System.Drawing.Color c)
{
    return "RGB(" + c.R.ToString() + "," + c.G.ToString() + "," + c.B.ToString() + ")";
}