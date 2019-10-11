//http://www.codeproject.com/KB/applications/ClientCall.aspx
//modified to do multiline on EXCEL (should the cell - style s21)
//+ remove unwanted chars
//+ the CrLF is &#10;


using System;
using System.Collections.Generic;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Xml;
using WindowsFormsApplication1;


/// <summary>
/// Summary description for XMLExcelWriter
/// </summary>
public class XMLExcelWriter
{
    public XMLExcelWriter()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    //public static void exportToExcel(DataTable source, [Optional] int nHdnColumnStart, [Optional] int nLookupSrcColStart, [Optional] List<int> lstLookupCounts, [Optional] List<int> lstDestLookupCols)
    /// <summary>
    /// Creates Excel Worksheet for the provided Datatable
    /// </summary>
    /// <param name="source"></param>
    /// <param name="nHdnColumnStart"></param>
    /// <param name="nLookupSrcColStart"></param>
    /// <param name="lstLookupCounts"></param>
    /// <param name="lstDestLookupCols"></param>
    public static void exportToExcel(DataTable source, int? nHdnColumnStart, int? nLookupSrcColStart, List<int> lstLookupCounts, List<int> lstDestLookupCols)
    {
        try
        {
            bool multiLineEnabled = false;
            StringBuilder sb = new StringBuilder();
            const string startExcelXML = "<?xml version=\"1.0\"?>\r\n" +
            "<?mso-application progid=\"Excel.Sheet\"?>\r\n<Workbook xmlns=\"urn:schemas-microsoft-com:office:spreadsheet\"\r\n" +
            "xmlns:o=\"urn:schemas-microsoft-com:office:office\"\r\n xmlns:x=\"urn:schemas-microsoft-com:office:excel\"\r\n" +
            "xmlns:ss=\"urn:schemas-microsoft-com:office:spreadsheet\"\r\n xmlns:html=\"http://www.w3.org/TR/REC-html40\">\"\r\n" +
            "<DocumentProperties xmlns=\"urn:schemas-microsoft-com:office:office\">\r\n<Author>147943</Author>\r\n" +
            "<LastAuthor>151864</LastAuthor> \r\n <Created>2007-12-27T08:49:22Z</Created>\r\n <LastSaved>2008-01-02T10:24:54Z</LastSaved> \r\n <Version>12.00</Version>\r\n </DocumentProperties>" +
            " <ExcelWorkbook xmlns=\"urn:schemas-microsoft-com:office:excel\"> \r\n <WindowHeight>9210</WindowHeight> \r\n <WindowWidth>11355</WindowWidth> \r\n <WindowTopX>480</WindowTopX>\r\n" +
            "<WindowTopY>60</WindowTopY> \r\n <TabRatio>309</TabRatio> \r\n <ProtectStructure>False</ProtectStructure>\r\n <ProtectWindows>False</ProtectWindows>\r\n </ExcelWorkbook>\r\n" +
            "<Styles> \r\n <Style ss:ID=\"Default\" ss:Name=\"Normal\"> \r\n <Alignment ss:Vertical=\"Bottom\"/> \r\n <Borders/> \r\n <Font ss:FontName=\"Arial\" x:Family=\"Swiss\"/>\r\n <Interior/>\r\n" +
            "<NumberFormat/> \r\n <Protection/> \r\n </Style> *multil|ne*\r\n <Style ss:ID=\"s62\"> \r\n <Alignment ss:Vertical=\"Bottom\"/> \r\n <Borders/> \r\n <Font ss:FontName=\"Arial\" x:Family=\"Swiss\" ss:Color=\"#000000\"/>" +
            "</Style> \r\n <Style ss:ID=\"s63\"> \r\n <Alignment ss:Horizontal=\"Left\" ss:Vertical=\"Bottom\"/><Borders/> \r\n <Font ss:FontName=\"Arial\" x:Family=\"Swiss\" ss:Color=\"#FFFFFF\" ss:Bold=\"1\"/>" +
            "<Interior ss:Color=\"#227CC8\" ss:Pattern=\"Solid\"/> \r\n </Style> \r\n</Styles>\r\n";

            const string endExcelXML = "</Workbook>";
            int rowCount = 0;
            int sheetCount = 1;
            //int ColumnStart = 22;
            int ColumnStart = (nHdnColumnStart.HasValue) ? Convert.ToInt32(nHdnColumnStart) : -1;
            sb.Append(startExcelXML);
            sb.Append("<Worksheet ss:Name=\"Sheet" + sheetCount + "\">\r\n");
            sb.Append("<Table x:FullColumns=\"1\" x:FullRows=\"1\">\r\n");

            //To Hide Columns
            if (ColumnStart > 0)
                sb.Append("<Column ss:Index=\"" + ColumnStart + "\" ss:Hidden=\"1\" ss:AutoFitWidth=\"0\" ss:Span=\"" + source.Columns.Count + "\"/>\r\n");

            sb.Append("<Row ss:StyleID=\"s62\">\r\n");

            //To be commented start
            for (int x = 0; x < source.Columns.Count; x++)
            {
                sb.Append("<Cell ss:StyleID=\"s63\"><Data ss:Type=\"String\">");
                sb.Append(source.Columns[x].ColumnName);
                sb.Append("</Data></Cell>\r\n");
            }
            sb.Append("</Row>\r\n");

            foreach (DataRow x in source.Rows)
            {
                rowCount++;
                //if the number of rows is > 64000 create a new page to continue output
                if (rowCount == 64000)
                {
                    rowCount = 0;
                    sheetCount++;
                    sb.Append("</Table>\r\n");
                    sb.Append("</Worksheet>\r\n");
                    sb.Append("<Worksheet ss:Name=\"Sheet" + sheetCount + "\">\r\n");
                    sb.Append("<Table>\r\n");
                }
                sb.Append("<Row>\r\n"); //ID=" + rowCount + "

                for (int nActuals = 0; nActuals < source.Columns.Count; nActuals++)
                {
                    System.Type rowType;
                    rowType = x[nActuals].GetType();
                    string XMLstring = x[nActuals].ToString();
                    XMLstring = XMLstring.Trim();
                    XMLstring = CleanElementValue(XMLstring);

                    if (XMLstring.IndexOf(@"&#10;") > 0)
                    {
                        multiLineEnabled = true;
                        sb.Append(@"<Cell ss:StyleID=""s21"">");
                    }
                    else
                        sb.Append("<Cell>");

                    //XMLstring = XMLstring.Replace("&", "&");
                    //XMLstring = XMLstring.Replace(">", ">");
                    //XMLstring = XMLstring.Replace("<", "<");
                    //XMLstring = XMLstring.Replace(@"""", " ");

                    if (rowType.ToString() == "System.Int16" || rowType.ToString() == "System.Int32" || rowType.ToString() == "System.Int64")
                        sb.Append("<Data ss:Type=\"Number\">");
                    else
                    {
                        sb.Append("<Data ss:Type=\"String\">");
                    }

                    if (nActuals >= ColumnStart - 1)
                    {
                        if (!string.IsNullOrEmpty(XMLstring))
                        {
                            sb.Append(CleanElementValue(XMLstring));
                        }
                    }
                    else
                    {
                        sb.Append(CleanElementValue(XMLstring));
                    }

                    sb.Append("</Data></Cell>\r\n");
                }
                sb.Append("</Row>\r\n");
            }

            sb.Append("</Table>\r\n");
            sb.Append("<WorksheetOptions xmlns=\"urn:schemas-microsoft-com:office:excel\">\r\n");
            sb.Append("<Selected/>\r\n");
            sb.Append("<ProtectObjects>False</ProtectObjects>\r\n");
            sb.Append("<ProtectScenarios>False</ProtectScenarios>\r\n");
            sb.Append("</WorksheetOptions>\r\n");

            //To be commented start

            ColumnStart = (nLookupSrcColStart.HasValue) ? Convert.ToInt32(nLookupSrcColStart) : -1;

            //To Add lookup list Columns
            //int[] nCollection = { Convert.ToInt32(source.Rows[0]["NNAMECOUNT"])+1, Convert.ToInt32(source.Rows[0]["HNAMECOUNT"])+1, Convert.ToInt32(source.Rows[0]["JNAMECOUNT"])+1 };
            if (ColumnStart > 0)
            {
                int nRowPointer = 0;
                for (int nColumnPointer = 1; nColumnPointer < source.Columns.Count + 1; nColumnPointer++)
                {

                    if (lstDestLookupCols.Contains(nColumnPointer))
                    {
                        sb.Append("<DataValidation xmlns=\"urn:schemas-microsoft-com:office:excel\">\r\n");
                        sb.Append("<Range>C" + nColumnPointer + "</Range>\r\n");
                        sb.Append("<Type>List</Type>\r\n");
                        sb.Append("<Value>R2C" + ColumnStart + ":R" + lstLookupCounts[nRowPointer] + "C" + ColumnStart + "</Value>\r\n");
                        sb.Append("</DataValidation>\r\n");
                        ColumnStart = ColumnStart + 1;
                        nRowPointer = nRowPointer + 1;
                    }
                }
            }

            //To be commented end

            sb.Append("</Worksheet>\r\n");
            sb.Append(endExcelXML);

            if (multiLineEnabled)
            {
                sb = sb.Replace("*multil|ne*", " \r\n <Style ss:ID=\"s21\"> \r\n <Alignment ss:Vertical=\"Bottom\" ss:WrapText=\"1\"/> \r\n </Style>");
            }
            else
            {
               sb= sb.Replace("*multil|ne*", " ");
            }
            byte[] data = ASCIIEncoding.ASCII.GetBytes(sb.ToString());

            General.writeByteArrayToFile(data, @"c:\123.xls");
            //string attachment = "attachment; filename=Report.xls";
            //HttpContext.Current.Response.ClearContent();
            //HttpContext.Current.Response.AddHeader("content-disposition", attachment);
            //HttpContext.Current.Response.ContentType = "application/ms-excel";
            //HttpContext.Current.Response.BinaryWrite(data);
            //HttpContext.Current.Response.End();

        }

        catch (Exception) { throw; }

    }

    internal static string CleanElementValue(String value)
    {
        return value.Replace("\r\n",@"&#10;").Replace("<", " ").Replace(">", " ").Replace(@"""", " ").Replace(@"\", " ").Replace("/", " ");//.Replace("&", " ");
            
    }

        //private string CleanElementValue(string val)
        //{

        //}

    
}


#in form
XMLExcelWriter.exportToExcel(dt, null, null, null, null);