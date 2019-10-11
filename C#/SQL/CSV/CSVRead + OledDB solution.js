//http://www.switchonthecode.com/tutorials/csharp-tutorial-using-the-built-in-oledb-csv-parser


//http://stackoverflow.com/questions/3109360/how-to-specify-the-delimiter-when-importing-csv-files-via-oledb-in-c-sharp
WARNING :
be default is for comma seperated, you CANT change the seperator from connectionstring

the solution is :
near csv file to be a file called schema.ini as :

[sample.csv]
Format=Delimited(;)

the oledb automatically read schema.ini and set the delimiter!!!

using System;
using System.Data;
using System.IO; //not used by default
using System.Data.OleDb; //not used by default

namespace CSVParserExample
{
  class CSVParser
  {
    public static DataTable ParseCSV(string path)
    {
      if (!File.Exists(path))
        return null;

      string full = Path.GetFullPath(path);
      string file = Path.GetFileName(full);
      string dir = Path.GetDirectoryName(full);

      //create the "database" connection string 
      string connString = "Provider=Microsoft.Jet.OLEDB.4.0;"
        + "Data Source=\"" + dir + "\\\";"
        + "Extended Properties=\"text;HDR=No;FMT=Delimited\"";

      //create the database query
      string query = "SELECT * FROM " + file;

      //create a DataTable to hold the query results
      DataTable dTable = new DataTable();

      //create an OleDbDataAdapter to execute the query
      OleDbDataAdapter dAdapter = new OleDbDataAdapter(query, connString);

      try
      {
        //fill the DataTable
        dAdapter.Fill(dTable);
      }
      catch (InvalidOperationException /*e*/)
      { }

      dAdapter.Dispose();

      return dTable;
    }
  }
}



--



read to string[]

public void ImportDelimitedFile(string filename, string delimiter)
{
    using (StreamReader file = new StreamReader(filename))
    {
        string line;

        while ((line = file.ReadLine()) != null)
        {
            if (line.Trim().Length > 0)
            {
                string[] columns = line.Split(delimiter, StringSplitOptions.None);
         
                // Add code to process the columns
            }
        }
    }
}


read to datatable ^

        private DataTable ImportDelimitedFile(string filename, string delimiter)
        {
            DataTable dT = new DataTable();
           
            using (StreamReader file = new StreamReader(filename))
            {
                string line;

                while ((line = file.ReadLine()) != null)
                {
                    if (line.Trim().Length > 0)
                    {
                        string[] columns = line.Split(new string[] {delimiter}, StringSplitOptions.None);

                        if (dT.Columns.Count == 0)
                        {
                            for (int i = 0; i < columns.Length; i++)
                            {
                                dT.Columns.Add("col" + i.ToString(), Type.GetType("System.String"));
                            }
                        }

                        dT.Rows.Add(columns);
                        // Add code to process the columns
                    }
                }
            }

            return dT;
        }
