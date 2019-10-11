int[] k;
float[] yt;
String[] names;

k = new int[3];
yt = new float[7];
names = new String[50];

Since we started counting at zero there is no k[3], 
and trying to access it will generate an ArrayIndexOutOfBoundsException. 
subscripts indexes k k[0] k[1] k[2] k[3] ArrayIndexOutOfBoundsException

'**
int[] k = new int[3];
float[] yt = new float[7];
String[] names = new String[50];

We can even declare, allocate, and initialize an array at the same time providing a list of the initial values inside brackets like so:
int[] k = {1, 2, 3};
float[] yt = {0.0f, 1.2f, 3.4f, -9.87f, 65.4f, 0.0f, 567.9f};

'**Two Dimensional Arrays
class FillArray {

  public static void main (String args[]) {
  
    int[][] M;
    M = new int[4][5];
  
    for (int row=0; row < 4; row++) {
      for (int col=0; col < 5; col++) {
        M[row][col] = row+col;
      }
    }
    
  }
  
}


'**3dimensional
class Fill3DArray {

  public static void main (String args[]) {
  
    int[][][] M;
    M = new int[4][5][3];
  
    for (int row=0; row < 4; row++) {
      for (int col=0; col < 5; col++) {
        for (int ver=0; ver < 3; ver++) {
          M[row][col][ver] = row+col+ver;
        }
      }
    }
    
  }
  
}

'**Multi
class Arrays3{ 

public static void main(String args[]){

// this declares a 2-dimensional array named x[i][j] of size 4 (4 elements)
// its elements are x[0][0], x[0][1], x[1][0] and x[1][1].
// the first index i indicates the row and the second index indicates the
// column if you think of this array as a matrix.


int x[][] = new int[2][2];

// print out the values of x[i][j] and they are all equal to 0.0.
for(int i=0; i<=1; i++)
for(int j=0; j<=1; j++)
System.out.println("x["+i+","+j+"] = "+x[i][j]);

// assign values to x[i] 
for(int i=0; i<=1; i++)
for(int j=0; j<=1; j++)
x[i][j] = i+j; // for example

// print the assigned values to x[i][j] 
for(int i=0; i<=1; i++)
for(int j=0; j<=1; j++)
System.out.println("x["+i+","+j+"] = "+x[i][j]);

// this declares a 2-dimensional array of type String
// and initializes it
String st[][]={{"row 0 column 0","row 0 column 1"}, // first row 
{"row 1 column 0","row 1 column 1"}}; // second row 

// print out st[i]
for(int i=0; i<=1; i++)
for(int j=0; j<=1; j++)
System.out.println("st["+i+","+j+"] = "+st[i][j]);

}
}