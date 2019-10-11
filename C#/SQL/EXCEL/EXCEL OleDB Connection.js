//http://stackoverflow.com/questions/3232281/oledb-mixed-excel-datatypes-missing-data
//http://stackoverflow.com/questions/965017/datetime-format-mismatch-on-importing-from-excel-sheet

'to get decimal/date cells
'must use the IMEX=1 @ connection string otherwise no value at these cells.

                General.ADOClass = new ADOnet("Provider=Microsoft.Jet.OleDb.4.0;Data Source=" + fl + @";Extended Properties=""Excel 8.0;IMEX=1;"";Mode=Read;");

'to be more specific on date cells you will got a double value
u have to :

  private DateTime ConvertDouble2Date(string Input)
        {
            DateTime parsedDate;

            if (IsNumeric(Input))
            {
                double d = Convert.ToDouble(Input);
                parsedDate = DateTime.FromOADate(d);

                if (DateTime.TryParse(parsedDate.ToString(), out parsedDate))
                    return parsedDate;
            }
            else
            {
                if (ValidateDate(Input))
                    return DateTime.Parse(Input);
            }

            throw new Exception("No valid date");
        }

        private bool ValidateDate(string dateInput)
        {
            DateTime startDate;
            try
            {
                startDate = DateTime.Parse(dateInput);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static Boolean IsNumeric(Object Expression)
        {
            if (Expression == null || Expression is DateTime)
                return false;

            if (Expression is Int16 || Expression is Int32 || Expression is Int64 || Expression is Decimal || Expression is Single || Expression is Double || Expression is Boolean)
                return true;

            try
            {
                if (Expression is string)
                    Double.Parse(Expression as string);
                else
                    Double.Parse(Expression.ToString());
                return true;
            }
            catch { } // just dismiss errors but return false

            return false;
        }


on a cmd button :
MessageBox.Show(ConvertDouble2Date(details.Rows[(int)gridDetailRows.row06StartDatetime][1].ToString()).ToString());
