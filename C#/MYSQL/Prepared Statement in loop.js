//http://cdn.mysql.com/archives/mysql-connector-net-6.9/mysql-connector-net-6.9.7.msi
//http://downloads.mysql.com/archives/c-net/ 
//use MySql.Data.dll only

            MySqlCommand command = new MySqlCommand("insert into zip_codes (distrinct, postal_code, postal_code_descr) VALUES (@distrinct, @postal_code, @postal_code_descr)",conn);


            MySqlParameter parameter = null;

            int res;
            foreach (RootObject item in obj)
            {
                command.Parameters.Clear();

                parameter = command.CreateParameter();
                parameter.ParameterName = "@distrinct";
                parameter.Value = item.administrativeDistrict;
                command.Parameters.Add(parameter);

                parameter = command.CreateParameter();
                parameter.ParameterName = "@postal_code_descr";

                if (item.area == null)
                    parameter.Value = item.postalCodeDescription; //area
                else
                    parameter.Value = item.area; //area

                command.Parameters.Add(parameter);

                parameter = command.CreateParameter();
                parameter.ParameterName = "@postal_code";
                parameter.Value = item.postalCode;
                command.Parameters.Add(parameter);

                res = command.ExecuteNonQuery();

                if (res != 1)
                    Console.WriteLine(item.postalCode);
            }
