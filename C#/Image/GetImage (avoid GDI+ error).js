//http://stackoverflow.com/questions/1053052/a-generic-error-occurred-in-gdi-jpeg-image-to-memorystream

if your code is as follows then also this error occurs

private Image GetImage(byte[] byteArray)
{
   using (var stream = new MemoryStream(byteArray))
   {
       return Image.FromStream(stream);
    }
}
The correct one is

private Image GetImage(byte[] byteArray)
{
   var stream = new MemoryStream(byteArray))
   return Image.FromStream(stream);        
}
This may be because we are returning from the using block







//use of
  Image img = GetImage(File.ReadAllBytes(data[i])); //Image.FromFile(data[i]);