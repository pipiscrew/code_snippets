//http://www.carlosag.net/Tools/ExcelXmlWriter/
//download the binary libray

//sample
	Workbook book = new Workbook();
	Worksheet sheet = book.Worksheets.Add("Sample");
	WorksheetRow row =  sheet.Table.Rows.Add();
	row.Cells.Add("Hello World");
	book.Save(@"c:\test.xls");




//then use this class to export a datatable to xls (xml)
	DataTable dataTable = conn.GetDATATABLE("select * from products order by categorycaption_title,product_code");
	
	Workbook book = new Workbook();
	ExcelDataTableWriter edtw = new ExcelDataTableWriter();
	
	Worksheet sheet = book.Worksheets.Add("Export" + DateTime.Now.ToString("yyyyMMdd"));
	edtw.PopulateWorksheet(dataTable, sheet);
	
	//WorksheetRow row = sheet.Table.Rows.Add();
	//row.Cells.Add("Hello World");
	string fl;
	fl = Application.StartupPath + "\\export" + DateTime.Now.ToString("yyyyMMdd") + ".xls";
	book.Save(fl);
	
	MessageBox.Show(Application.StartupPath + "\\" + fl + " \r\n\r\nCreated with success!", Application.ProductName, MessageBoxButtons.OK, MessageBoxIcon.Information);

using System.Data;
using CarlosAg.ExcelXmlWriter;
using System;

namespace WWB.ExcelDatasetWriter
{
    //source - http://www.sitepoint.com/making-excel-the-carlosag-way/
    /// <summary>
    /// Writes a datatable to a worksheet using the CarlosAG.ExcelXmlWriter library.
    /// </summary>

    public class ExcelDataTableWriter
    {
        public ExcelDataTableWriter()
        { }

        public void PopulateWorksheet(DataTable dt, Worksheet toPopulate)
        {
            PopulateWorksheet(dt, toPopulate, true);
        }

        public void PopulateWorksheet(DataTable dt, Worksheet toPopulate, bool makeHeader)
        {
            //check valid input
            if (toPopulate == null)
            {
                throw new ArgumentNullException("toPopulate", "Worksheet cannot be null.");
            }
            if (dt == null)
            {
                throw new ArgumentNullException("dt", "DataTable cannot be null");
            }
            //Parse the columns
            ColumnType[] colDesc = parseColumns(dt);
            //Create header row
            if (makeHeader)
            {
                toPopulate.Table.Rows.Insert(0, makeHeaderRow(colDesc));
            }
            //Create rows
            foreach (DataRow row in dt.Rows)
            {
                toPopulate.Table.Rows.Add(makeDataRow(colDesc, row));
            }
        }

        #region row + cell making

        private WorksheetRow makeHeaderRow(ColumnType[] cols)
        {
            WorksheetRow ret = new WorksheetRow();
            foreach (ColumnType ctd in cols)
            {
                ret.Cells.Add(ctd.GetHeaderCell());
            }
            return ret;
        }

        private WorksheetRow makeDataRow(ColumnType[] ctds, DataRow row)
        {
            WorksheetRow ret = new WorksheetRow();
            WorksheetCell tmp = null;
            for (int i = 0; i < row.Table.Columns.Count; i++)
            {
                tmp = ctds[i].GetDataCell(row[i]);
                ret.Cells.Add(tmp);
            }
            return ret;
        }

        #endregion

        #region column parsing
        private ColumnType[] parseColumns(DataTable dt)
        {
            ColumnType[] ret = new ColumnType[dt.Columns.Count];
            ColumnType ctd = null;
            for (int i = 0; i < dt.Columns.Count; i++)
            {
                ctd = new ColumnType();
                ctd.Name = dt.Columns[i].ColumnName;
                getDataType(dt.Columns[i], ctd);
                ret[i] = ctd;
            }
            return ret;
        }

        private void getDataType(DataColumn col, ColumnType desc)
        {
            if (col.DataType == typeof(DateTime))
            {
                desc.ExcelType = DataType.DateTime;
            }
            else if (col.DataType == typeof(string))
            {
                desc.ExcelType = DataType.String;
            }
            else if (col.DataType == typeof(sbyte)
                || col.DataType == typeof(byte)
                || col.DataType == typeof(short)
                || col.DataType == typeof(ushort)
                || col.DataType == typeof(int)
                || col.DataType == typeof(uint)
                || col.DataType == typeof(long)
                || col.DataType == typeof(ulong)
                || col.DataType == typeof(float)
                || col.DataType == typeof(double)
                || col.DataType == typeof(decimal)
                )
            {
                desc.ExcelType = DataType.Number;
            }
            else
            {
                desc.ExcelType = DataType.String;
            }
        }
        #endregion
    }

    /// <summary>
    /// Creates an excel-friendly Xml Document from a dataset using the CarlosAg.ExcelXmlWriter library.
    /// </summary>

    public class ExcelDatasetWriter
    {
        public ExcelDatasetWriter()
        { }


        public Workbook CreateWorkbook(DataSet data)
        {
            //ensure valid data
            if (data == null)
            {
                throw new ArgumentNullException("data", "Data cannot be null.");
            }
            ensureTables(data);

            //Variable declarations
            //our workbook
            Workbook wb = new Workbook();
            //Our worksheet container
            Worksheet ws;
            //Our DataTableWriter
            ExcelDataTableWriter edtw = new ExcelDataTableWriter();
            //Our sheet name
            string wsName;
            //Our counter
            int tCnt = 0;

            //Loop through datatables and create worksheets
            foreach (DataTable dt in data.Tables)
            {
                //set the name of the worksheet
                if (dt.TableName != null && dt.TableName.Length > 0 && dt.TableName != "Table")
                {
                    wsName = dt.TableName;
                }
                else
                {
                    //Go to generic Sheet1 . . . SheetN
                    wsName = "Sheet" + (tCnt + 1).ToString();
                }
                //Instantiate the worksheet
                ws = wb.Worksheets.Add(wsName);
                //Populate the worksheet
                edtw.PopulateWorksheet(dt, ws);
                tCnt++;
            }
            return wb;
        }


        private void ensureTables(DataSet data)
        {
            if (data.Tables.Count == 0)
            {
                throw new ArgumentOutOfRangeException("data", "DataSet does not contain any tables.");
            }
        }
    }

    /// <summary>
    /// Creates a Column for CarlosAg.ExcelXmlWriter
    /// </summary>

    internal class ColumnType
    {
        public ColumnType()
        { }
        private string name;
        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        private DataType excelType;
        public DataType ExcelType
        {
            get { return excelType; }
            set { excelType = value; }
        }

        public WorksheetCell GetHeaderCell()
        {
            WorksheetCell head = new WorksheetCell(Name, DataType.String);
            return head;
        }

        private string getDataTypeFormatString()
        {
            if (ExcelType == DataType.DateTime)
            {
                return "s";
            }
            return null;
        }

        public WorksheetCell GetDataCell(object data)
        {
            WorksheetCell dc = new WorksheetCell();
            dc.Data.Type = ExcelType;
            if (ExcelType == DataType.DateTime && data is DateTime)
            {
                DateTime dt = (DateTime)data;
                dc.Data.Text = dt.ToString("s");
            }
            else
            {
                string dataString = data.ToString();
                if (dataString == null || dataString.Length == 0)
                {
                    dc.Data.Type = DataType.String;
                    dc.Data.Text = string.Empty;
                }
                else
                {
                    dc.Data.Text = dataString;
                }
            }
            return dc;
        }
    }
}