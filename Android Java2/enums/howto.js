//http://www.codemiles.com/java-examples/java-enum-example-t3860.html

enum LevelsType{
   level1,level2,level3,level4
}

//The following example defines a string Enums values and use switch expression to control decision based on Enum values : - See more at: http://www.codemiles.com/java-examples/java-enum-example-t3860.html#sthash.3Z20zkSd.dpuf
public class Main {
 
    public static void main(String[] args) {
 
         PaymentTypes currentPayType=PaymentTypes.NEW;
 
         switch(currentPayType)
         {
             case PREPAID:
                  System.out.println("This type is prepaid");
                 break;
             case POSTPAID:
                 System.out.println("This type is postpaid");
                 break;
             case NEW:
                 System.out.println("This type is new");
                 break;
             default:
                 System.out.println("This type is not defined!!");
                 break;
         }
       
    }
}
 
 enum PaymentTypes {
    PREPAID, POSTPAID, NEW
}
- See more at: http://www.codemiles.com/java-examples/java-enum-example-t3860.html#sthash.3Z20zkSd.dpuf