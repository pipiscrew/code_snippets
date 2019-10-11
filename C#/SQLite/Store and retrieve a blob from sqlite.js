//http://stackoverflow.com/questions/625029/how-do-i-store-and-retrieve-a-blob-from-sqlite

class Program
{
    static void Main(string[] args)
    {
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
    }

    static byte[] GetBytes(SQLiteDataReader reader)
    {
        const int CHUNK_SIZE = 2 * 1024;
        byte[] buffer = new byte[CHUNK_SIZE];
        long bytesRead;
        long fieldOffset = 0;
        using (MemoryStream stream = new MemoryStream())
        {
            while ((bytesRead = reader.GetBytes(0, fieldOffset, buffer, 0, buffer.Length)) > 0)
            {
                byte[] actualRead = new byte[bytesRead];
                Buffer.BlockCopy(buffer, 0, actualRead, 0, (int)bytesRead);
                stream.Write(actualRead, 0, actualRead.Length);
                fieldOffset += bytesRead;
            }
            return stream.ToArray();
        }
    }