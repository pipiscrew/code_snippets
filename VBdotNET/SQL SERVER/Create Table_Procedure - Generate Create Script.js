'**Create 'create script' for a table
'http://davidhayden.com/blog/dave/archive/2006/02/09/2795.aspx
Server server = new Server(".");

Database northwind = server.Databases["Northwind"];

Table categories = northwind.Tables["Categories"];

StringCollection script = categories.Script();

string[] scriptArray = new string[script.Count];

script.CopyTo(scriptArray, 0);


'**Create table
'http://davidhayden.com/blog/dave/archive/2006/01/27/2775.aspx
// Establish the database server
string connectionString = "...";
SqlConnection connection =
     new SqlConnection(connectionString);
Server server =
     new Server(new ServerConnection(connection));

// Create table in my personal database
Database db = server.Databases["davidhayden"];

// Create new table, called TestTable
Table newTable = new Table(db, "TestTable");

// Add "ID" Column, which will be PK
Column idColumn = new Column(newTable, "ID");
idColumn.DataType = DataType.Int;
idColumn.Nullable = false;
idColumn.Identity = true;
idColumn.IdentitySeed = 1;
idColumn.IdentityIncrement = 1;

// Add "Title" Column
Column titleColumn = new Column(newTable, "Title");
titleColumn.DataType = DataType.VarChar(50);
titleColumn.Nullable = false;

// Add Columns to Table Object
newTable.Columns.Add(idColumn);
newTable.Columns.Add(titleColumn);

// Create a PK Index for the table
Index index = new Index(newTable, "PK_TestTable");
index.IndexKeyType = IndexKeyType.DriPrimaryKey;

// The PK index will consist of 1 column, "ID"
index.IndexedColumns.Add(new IndexedColumn(index,"ID"));

// Add the new index to the table.
newTable.Indexes.Add(index);

// Physically create the table in the database
newTable.Create();

'**Create Stored Procedures
'http://davidhayden.com/blog/dave/archive/2006/01/27/2774.aspx
// Create an instance of the server
string connectionString = "...Connection String...";
SqlConnection connection = new SqlConnection(connectionString);
Server server = new Server(new ServerConnection(connection));

// I want to add the stored procedure to the "MyDatabase" Database
Database db = server.Databases["MyDatabase"];

// Create a Stored Procedure called "GetClubByID" in "MyDatabase"
StoredProcedure mySP = new StoredProcedure(db, "GetClubByID");
mySP.TextMode = false;
mySP.AnsiNullsStatus = false;
mySP.QuotedIdentifierStatus = false;

// GetClubByID requires the ID of the Club as an Input Parameter
StoredProcedureParameter idParam =
        new StoredProcedureParameter(mySP, "@ID", DataType.Int);
mySP.Parameters.Add(idParam);

// The SQL Text
mySP.TextBody = "Select [ID], [Title] FROM [Club] WHERE [ID] = @ID";

// Create the stored procedure in the database
mySP.Create();