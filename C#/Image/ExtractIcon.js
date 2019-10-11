/// <summary>
/// Extracts an icon associated with a file
/// </summary>
/// <param name="FileName">File to extract the icon from</param>
/// <returns>Returns the extracted icon</returns>
public static Bitmap ExtractIcon(string FileName)
{
    return System.Drawing.Icon.ExtractAssociatedIcon(FileName).ToBitmap();
}