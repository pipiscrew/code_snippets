//http://neozilon.com/java/java-enum-example
/*
 * Basic example about Enumeration in Java
 *
 */

/**
 *
 * @author neozilon
 */
public class EnumerationExample {

    public enum Cars{
        MERCEDES(1),
        MITSUBISHI(1),
        MAZDA(3),
        TOYOTA(4),
        FERRARI(5);

        private final int id;

        Cars(int id) { this.id = id;}

        public int getValue() { return id; }
    }

    /**
     * prints all Car items and its values
     */
    public void printCarsValues(){

        Cars[] carsArray = Cars.values();
        for (int i=0; i < carsArray.length; i++){
            Cars item = carsArray[i];
            System.out.print(" CAR: " + item.name() );
            System.out.println(" VALUE: " + item.getValue());
        }
    }

    /**
     * shows how to access any item in the enumeration
     */
    public void printOneCar(){

        System.out.println(" ------- \n print just one item \n ");
        System.out.println("Car: " + Cars.MAZDA + " Value: " + Cars.MAZDA.getValue());
    }

    public static void main(String[] args){

        // enum test values
        EnumerationExample example = new EnumerationExample();

        // print all the items
        example.printCarsValues();

        // print just one item
        example.printOneCar();
    }

}

//and here is the output that you will get , if you run this class:
 CAR: MERCEDES VALUE: 1
 CAR: MITSUBISHI VALUE: 1
 CAR: MAZDA VALUE: 3
 CAR: TOYOTA VALUE: 4
 CAR: FERRARI VALUE: 5
 -------
 print just one item 

 Car: MAZDA Value: 3
