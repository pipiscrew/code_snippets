//https://stackoverflow.com/a/48572211

List<MyClass> result = myDataTable.AsEnumerable().Select(x=> new MyClass(){
     Property1 = (string)x.Field<string>("ColumnName1"),
     Property2 = (int)x.Field<int>("ColumnName2"),
     Property3 = (bool)x.Field<bool>("ColumnName3"),    
});



//https://stackoverflow.com/a/17836923/1320686

public class CustomerMinInfo
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
    public int? ContactNumber { get; set; }
}


public List<CustomerMinInfo> GetAllCust()
{
    var results = db.Customers.Select(x => new CustomerMinInfo()
    {
        Name = x.CustName,
        Email = x.Email,
        Address = x.Address,
        ContactNumber = x.CustContactNo
    })
    .ToList();

    return results;
}