//http://survivingbb.blogspot.com/2011/03/resize-bitmap.html
public static Bitmap resizeBitmap(Bitmap image, int width, int height) {
 int imageWidth = image.getWidth();
 int imageHeight = image.getHeight();

 // Need an array (for RGB, with the size of original image)
 int rgb[] = new int[imageWidth * imageHeight];

 // Get the RGB array of image into "rgb"
 image.getARGB(rgb, 0, imageWidth, 0, 0, imageWidth, imageHeight);

 // Call to our function and obtain rgb2
 int rgb2[] = rescaleArray(rgb, imageWidth, imageHeight, width, height);

 // Create an image with that RGB array
 Bitmap temp2 = new Bitmap(width, height);

 temp2.setARGB(rgb2, 0, width, 0, 0, width, height);

 return temp2;
}

private static int[] rescaleArray(int[] ini, int x, int y, int x2, int y2) {
 int out[] = new int[x2 * y2];
 for (int yy = 0; yy <>
  int dy = yy * y / y2;
  for (int xx = 0; xx <>
   int dx = xx * x / x2;
   out[(x2 * yy) + xx] = ini[(x * dy) + dx];
  }
 }
 return out;
}