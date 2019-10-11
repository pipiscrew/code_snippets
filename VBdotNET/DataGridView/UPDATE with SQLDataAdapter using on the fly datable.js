'http://dotnetperls.com/sqlcommandbuilder

static void Main()
{
    //
    // Make sure table is prepared. (You won't need this.)
    //
    Prepare();

    //
    // Create a DataTable with 5 columns.
    //
    DataTable table = new DataTable();
    table.Columns.Add("Weight", typeof(int));
    table.Columns.Add("Name", typeof(string));
    table.Columns.Add("Breed", typeof(string));
    table.Columns.Add("Size", typeof(char));
    table.Columns.Add("Date", typeof(DateTime));

    //
    // Add data to the DataTable. [This will be dyanmically generated from your app.]
    //
    AddDogRow(table, 57, "Koko", "Shar Pei");
    AddDogRow(table, 130, "Fido", "Bullmastiff");
    AddDogRow(table, 92, "Alex", "Anatolian Shepherd Dog");
    AddDogRow(table, 25, "Charles", "Cavalier King Charles Spaniel");
    AddDogRow(table, 7, "Candy", "Yorkshire Terrier");

    //
    // Create new SqlConnection, SqlDataAdapter, and builder.
    // 
    using (var con = new SqlConnection(ConsoleApplication354.Properties.Settings.Default.masterConnectionString))
    using (var adapter = new SqlDataAdapter("SELECT * FROM Dogs2", con))
    using (new SqlCommandBuilder(adapter))
    {
        //
        // Fill the DataAdapter with the values in the DataTable.
        //
        adapter.Fill(table);
        //
        // Open the connection to the SQL database.
        //
        con.Open();
        //
        // Insert the data table into the SQL database.
        //
        adapter.Update(table);
    }
}