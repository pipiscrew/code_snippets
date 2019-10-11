Type	Size	Range
byte	8 bits	-128 to +127
short	16 bits	-32,768 to +32,767
int	32 bits	(about)-2 billion to +2 billion
long	64 bits	(about)-10E18 to +10E18

Floating Point Primitive Data Types
Type	Size	Range
float	32 bits	-3.4E+38 to +3.4E+38
double	64 bits	-1.7E+308 to 1.7E+308

int yr = 2006;
double rats = 8912 ;

    System.out.println("The variable x has: " + x );

int x, y, z; // Three integer variables declared at the same time.

public class MaxDemo {
     public static void main(String args[]) {
     //integers
          byte largestByte = Byte.MAX_VALUE;
          short largestShort = Short.MAX_VALUE;
          int largestInteger = Integer.MAX_VALUE;
          long largestLong = Long.MAX_VALUE;

         //real numbers
         float largestFloat = Float.MAX_VALUE;
         double largestDouble = Double.MAX_VALUE;
 
         //other primitive types
        char aChar = 'S';
        boolean aBoolean = true;

        //Display them all.
        System.out.println("largest byte value is " + largestByte + ".");
        System.out.println("largest short value is " + largestShort + ".");
        System.out.println("largest integer value is " + largestInteger + ".");
        System.out.println("largest long value is " + largestLong + ".");
        System.out.println("largest float value is " + largestFloat + ".");
        System.out.println("largest double value is " + largestDouble + ".");
   }
}