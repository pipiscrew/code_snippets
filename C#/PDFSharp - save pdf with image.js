            PdfDocument doc = new PdfDocument();

            //for (int pix = 0; pix <= CheckedListBox1.CheckedItems.Count - 1; pix++)
            //{
            //    try
            //    {
            //string source = CheckedListBox1.Items(pix).ToString();
            PdfPage oPage = new PdfPage();

            doc.Pages.Add(oPage);
            XGraphics xgr = XGraphics.FromPdfPage(oPage);
            XImage img = XImage.FromFile(btnView.Tag.ToString());

            xgr.DrawImage(img, 0, 0);
            //success = true;
            //    }
            //    catch (Exception ex)
            //    {
            //        MessageBox.Show(ex.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            //    }
            //}


            doc.Save("d:\\p.pdf");
            doc.Close();