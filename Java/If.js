'**
if(employee.isManager()) {
System.out.println("Is a Manager");
}
else if(employee.isVicePresident()) {
System.out.println("Is a Vice-President");
}
else {
System.out.println("Is a Worker");
}


'**int x = 10; int y = 4; int z = 5;

(x <= 10) && (y > 1) // This expression checks if x is less
// than 10 AND y is greater than 1.
// This expression is TRUE.

(x*y == 41) || (z == 5) // This expression checks if x*y is equal
// to 40 OR if z is equal to 5.
// This expression is FALSE

'**
    public static void main (String args[]) {
    
      /* Now let's say hello */
      System.out.print("Hello ");
      if (args.length == 0) {
        System.out.print("whoever you are");
      }
      else if (args.length == 1) {
        System.out.println(args[0]);
      }
      else if (args.length == 2) {
        System.out.print(args[0]);
        System.out.print(" ");
        System.out.print(args[1]);
      }      
      else if (args.length == 3) {
        System.out.print(args[0]);
        System.out.print(" ");
        System.out.print(args[1]);
        System.out.print(" ");
        System.out.print(args[2]);
      }      
        System.out.println();
  }