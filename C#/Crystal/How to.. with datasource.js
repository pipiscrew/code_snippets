
            //this is the report on VS Explorer ((VS Explorer) > Add new item > ) (already we have design something)
            CrystalReport1 crReportDocument = new CrystalReport1();
 
            //a dataset structure (VS Explorer) > Add new item > Dataset
            //now on Crystal Report file > right click > database expert > Project Data > Ado.NET Datasets > Dataset1 is there!
            //so we can drag drop the fields to report
            DataSet1 ds = new DataSet1();

            DataRow row = null;

            //add lines to
            for (int i = no1; i < no2; i++)
            {
                row = ds.Tables[0].NewRow();

                //already we have set the columns from VS Dataset Designer
                row["Column1"] = txtDescr.Text;
                row["Column2"] = txtParast.Text + " " + i.ToString();
                ds.Tables[0].Rows.Add(row);
            }


            //load no needed we use it internally
            //crReportDocument.Load(@"C:\Kostas\!NET\PrintParastatika\PrintParastatika\CrystalReport1.rpt");

            //give the dataset1 clone to report
            crReportDocument.SetDataSource(ds);

//this needed if we like to set a textbox value on report manual (ex. header)
            //CrystalDecisions.CrystalReports.Engine.TextObject crTXT = (CrystalDecisions.CrystalReports.Engine.TextObject)crReportDocument.ReportDefinition.Sections[1].ReportObjects["txtParastatikoType"];
            //crTXT.Text = "test";

            //already we have add a CrystalReport Viewer on our form
            //give the constructed report to viewer
            crystalReportViewer1.ReportSource = crReportDocument;

//if we like 1page per record
Please following the following steps: 

1. Go to Report menu>. Section Expert. 
2. Select Details from the section list. 
3. Check the check box "New page After". Click X^2 and write the following code in the formula workshop: 
not OnLastRecord 
4. Click OK. 
5. Preview the report. You will see one record per page.

//warning on dot matrix printers we have to select every we go for print (from properties) that the papersize is 9x8 Pitenhs (aka Width:22.86 + Height:20.32)
