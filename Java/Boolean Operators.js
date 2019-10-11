A         B             A|B       A&B      A^B      !A
false     false         false     false    false    true
true      false         true      false    true     false
false     true          true      false    true     true
true      true          true      true     false    false

| the OR operator
& the AND operator
^ the XOR operator
! the NOT operator
|| the short-circuit OR operator
&& the short-circuit AND operator
== the EQUAL TO operator
!= the NOT EQUAL TO operator 

Example     

class Bool1{ 
   public static void main(String args[]){

// these are boolean variables     
      boolean A = true;
      boolean B = false; 

      System.out.println("A|B = "+(A|B));
      System.out.println("A&B = "+(A&B));
      System.out.println("!A = "+(!A));
      System.out.println("A^B = "+(A^B));
      System.out.println("(A|B)&A = "+((A|B)&A));
    }
}