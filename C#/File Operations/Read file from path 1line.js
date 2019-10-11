//http://www.csharp-examples.net/get-files-from-directory/

string[] filePaths = Directory.GetFiles(@"c:\MyDir\", "*.bmp");
// returns:
// "c:\MyDir\my-car.BMP"