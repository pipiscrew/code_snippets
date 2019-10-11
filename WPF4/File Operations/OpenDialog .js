           OpenFileDialog openFileDialog1 = new OpenFileDialog();
            openFileDialog1.Filter = "XLS or CSV File (*.xls,*.csv)|*.xls;*.csv";

            if (openFileDialog1.ShowDialog(this) == true)
            {
                lblXLS.Content = "Import file : " + openFileDialog1.FileName;

            } 