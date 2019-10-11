//http://stackoverflow.com/questions/625029/how-do-i-store-and-retrieve-a-blob-from-sqlite

        if (File.Exists("test.db3"))
        {
            File.Delete("test.db3");
        }
        using (var connection = new SQLiteConnection("Data Source=test.db3;Version=3"))
        using (var command = new SQLiteCommand("CREATE TABLE PHOTOS(ID INTEGER PRIMARY KEY AUTOINCREMENT, PHOTO BLOB)", connection))
        {
            connection.Open();
            command.ExecuteNonQuery();

            byte[] photo = new byte[] { 1, 2, 3, 4, 5 };

            command.CommandText = "INSERT INTO PHOTOS (PHOTO) VALUES (@photo)";
            command.Parameters.Add("@photo", DbType.Binary, 20).Value = photo;
            command.ExecuteNonQuery();

            command.CommandText = "SELECT PHOTO FROM PHOTOS WHERE ID = 1";
            using (var reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    byte[] buffer = GetBytes(reader);
                }
            }

        }