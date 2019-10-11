//http://stackoverflow.com/a/10097257

//For example in Gson, if you have got a class named Car built in this way:
class Car{
  int wheels;
  String plate;
}
 
//... and you want to parse an array of cars, you can easily inflate your JSON in this way:
Gson gson = new Gson;
List<Car> cars = gson.fromJson(input, new TypeToken<List<Car>>(){}.getType());



Gson vs Jackson: Which to Use for JSON in Java

http://www.doublecloud.org/2015/03/gson-vs-jackson-which-to-use-for-json-in-java/