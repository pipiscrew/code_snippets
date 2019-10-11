//http://visualcsharptutorials.com/net-framework/serializing-and-deserializing-objects/

    static void Main(string[] args)
     {
         List<Person> persons = new List<Person> { 
                 new Person { FirstName = "John", LastName = "Smith", Age = 30 },
                 new Person { FirstName = "Mark", LastName = "Lawrence", Age = 25 },
                 new Person { FirstName = "Adam", LastName = "Trevor", Age = 22 } };
     
         //Save the object into the file
         FileStream saveStream = new FileStream("sample.bin",FileMode.Create,FileAccess.Write);
         BinaryFormatter serializer = new BinaryFormatter();
         serializer.Serialize(saveStream, persons);
         saveStream.Close();
     
         Console.WriteLine(@"Object is saved to C:\sample.bin" + "\n");
     
         //Load the object from the file
         Console.WriteLine(@"Loading object from C:\sample.bin...");
         FileStream loadStream = new FileStream("persons.bin", FileMode.Open, FileAccess.Read);
         List<Person> loadedObject = (List<Person>)serializer.Deserialize(loadStream);
         loadStream.Close();
     
         Console.WriteLine("Showing loaded object's fields...");
         foreach (Person p in persons) 
         { 
          Console.WriteLine(p); 
         } 
     }

