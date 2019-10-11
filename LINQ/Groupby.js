//https://code.msdn.microsoft.com/101-LINQ-Samples-3fb9811b

DataTable table = new DataTable("Products");
table.Columns.Add("ProductID", typeof(int));
table.Columns.Add("ProductName", typeof(string));
table.Columns.Add("Category", typeof(string));
table.Columns.Add("UnitPrice", typeof(decimal));
table.Columns.Add("UnitsInStock", typeof(int));

testDS.Tables.Add(table);
			
[Category("Grouping Operators")]
[Description("This sample uses group by to partition a list of products by category.")]
public void DataSetLinq42()
{

    var products = testDS.Tables["Products"].AsEnumerable();

    var productGroups =
        from p in products
        group p by p.Field<string>("Category") into g
        select new { Category = g.Key, Products = g };

//g.key is by enumerable^ in this situation is the 'Category' field because we use it for groupby
//this produces a list<T> with string<Category>,List<Products>
 

    foreach (var g in productGroups)
    {
        Console.WriteLine("Category: {0}", g.Category);
        foreach (var w in g.Products)
        {
            Console.WriteLine("\t" + w.Field<string>("ProductName"));
        }
    }
}

//produces :
Category: Beverages
        Chai
        Chang
Category: Condiments
        Aniseed Syrup
        Chef Anton's Cajun Seasoning
        Chef Anton's Gumbo Mix