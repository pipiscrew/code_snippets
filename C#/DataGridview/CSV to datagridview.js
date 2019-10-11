            using (StreamReader reader = new StreamReader(@"D:\a3\Meltemi_Setup\{sd}\Meltemi\Database\db.ron"))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    String[] fileDataField = line.Replace(",", "\r").Split('\r');
                    dg.Rows.Add(fileDataField);
                }
            }