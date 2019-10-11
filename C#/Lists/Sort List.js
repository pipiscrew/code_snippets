//http://dotnetslackers.com/community/blogs/simoneb/archive/2007/06/20/How-to-sort-a-generic-List_3C00_T_3E00_.aspx
*1*
class Product
{
    public int ProductID { get; set; }
    public string ProductName { get; set; }
    public decimal UnitPrice { get; set; }
}


List<Product> products = new List<Product>();

products.Sort(delegate(Product p1, Product p2)
              {
                  return p1.ProductName.CompareTo(p2.ProductName);
              });
              

*2*
//http://kiwigis.blogspot.com/search?q=sort+list

//the clASS
public class Person  {
    public string FirstName { get; set; }
    public string LastName { get; set; }
}


// IN FORM - Create a list of people
List<Person> people = new List<Person>();
people.Add(new Person() { FirstName = "Gottfried", LastName = "Leibniz" });
people.Add(new Person() { FirstName = "Marie", LastName = "Curry" });
people.Add(new Person() { FirstName = "Albert", LastName = "Einsten" });
people.Add(new Person() { FirstName = "Isaac", LastName = "Newton" });
people.Add(new Person() { FirstName = "Niels", LastName = "Bohr" });

people.Sort(
    delegate(Person x, Person y) {
        if (x == null) {
            if (y == null) { return 0; }
            return -1;
        }
        if (y == null) { return 0; }
        return x.FirstName.CompareTo(y.FirstName);
    }
);