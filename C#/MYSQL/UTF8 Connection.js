//http://stackoverflow.com/a/11690583

            MySqlConnectionStringBuilder conn_string = new MySqlConnectionStringBuilder();
            conn_string.Server = "localhost";
            conn_string.UserID = "root";
            conn_string.Password = "";
            conn_string.CharacterSet = "utf8";
            conn_string.Database = "mysql";
            conn = new MySqlConnection(conn_string.ToString());
            conn.Open();
            
//OR

	Server=localhost;Port=3306;Database=xxx;Uid=x xx;Pwd=xxxx;charset=utf8;"