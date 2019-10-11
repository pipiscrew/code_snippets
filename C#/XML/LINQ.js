//if you like you can generate XSD from XML via
//http://xmlgrid.net/xml2xsd.html

<root>
	<row product_line="test" product_name="DBManager" ref_no="u3y5v843"/>
</root>

//read xml
XDocument xdoc = XDocument.Load(file2scan);

//query1
var DBManager_recs = from p in xdoc.Root.Element("root").Elements("row")
			where ((string)p.Attribute("product_name") == "DBManager")
			select p;

//create a datatable
DataTable cloneTableC = new DataTable();
cloneTableC.Columns.Add("Line");
cloneTableC.Columns.Add("product");
cloneTableC.Columns.Add("ReferenceNo");

//add it to datatable
foreach (var item in DBManager_recs.ToList())
{
	cloneTableC.Rows.Add(new string[] { (string)item.Attribute("product_line"), (string)item.Attribute("product_name"), (string)item.Attribute("ref_no") });
}

//give dt to datagridview
dg_argos_country.DataSource = cloneTableC;

//query2
var pch_recs = from p in xdoc.Root.Element("root").Elements("row")
				 where ((string)p.Attribute("product_name") == "DBManager" && (string)p.Attribute("product_line") != "Translator")
				 select p;