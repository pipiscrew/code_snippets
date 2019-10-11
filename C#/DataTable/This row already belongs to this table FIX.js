//http://stackoverflow.com/questions/722052/this-row-already-belongs-to-another-table-error-when-trying-to-add-rows

//using 

                TableRows = TBL.NewRow();
                //add the rows!
                foreach (KeyValuePair<string, object> kvp in tmp)
                {
                    
                    TableRows[kvp.Key.ToString()] = kvp.Value;
                    
                }

                TBL.Rows.Add(TableRows);
                
sometimes I got "This row already belongs to this table"


solution
You can also use Add which takes an array of values:

---> myTable.Rows.Add(dr.ItemArray)
Or probably even better:
-no work?
myTable.ImportRow(dr);