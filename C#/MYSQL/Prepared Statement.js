               MySqlCommand command = new MySqlCommand("UPDATE PARTS SET description=@part_descr," +
                "category=@category,brand_name=@brand_name,warehoused_country=@warehoused_country,img_url=@img_url" +
                ",price_retail=@price_retail,price_dealer=@price_dealer,vendor_part_code=@vendor_part_code,part_name=@part_name WHERE part_id=@id", m.GetConnection());

                

                MySqlParameter parameter = command.CreateParameter();


				//when done in loop needed
				//command.Parameters.Clear();
                parameter.ParameterName = "@id";
                parameter.Value = id;
                command.Parameters.Add(parameter);

                parameter = command.CreateParameter();
                parameter.ParameterName = "@part_descr";
                parameter.Value =  HttpUtility.HtmlDecode(x.Parts[0].productDescription);
                command.Parameters.Add(parameter);

                parameter = command.CreateParameter();
                parameter.ParameterName = "@part_name";
                parameter.Value = HttpUtility.HtmlDecode(x.Parts[0].partDescr);
                command.Parameters.Add(parameter);

                parameter = command.CreateParameter();
                parameter.ParameterName = "@category";
                parameter.Value =HttpUtility.HtmlDecode( x.Parts[0].productName);
                command.Parameters.Add(parameter);

                parameter = command.CreateParameter();
                parameter.ParameterName = "@brand_name";
                parameter.Value = x.Parts[0].brandName;
                command.Parameters.Add(parameter);

                parameter = command.CreateParameter();
                parameter.ParameterName = "@warehoused_country";
                parameter.Value = x.Parts[0].warehousedCountry;
                command.Parameters.Add(parameter);

                parameter = command.CreateParameter();
                parameter.ParameterName = "@img_url";
                parameter.Value = x.Parts[0].mediaUrl;
                command.Parameters.Add(parameter);

                parameter = command.CreateParameter();
                parameter.ParameterName = "@vendor_part_code";
                parameter.Value = x.Parts[0].vendorPartNumber;
                command.Parameters.Add(parameter);
                 

                Double retail_price ;
                Double.TryParse(x.Parts[0].partRegionDetails.retailPrice.ToString(), out retail_price);

                parameter = command.CreateParameter();
                parameter.ParameterName = "@price_retail";
                parameter.Value = retail_price;
                command.Parameters.Add(parameter);


                Double yourDealerPrice;
                Double.TryParse(x.Parts[0].partRegionDetails.yourDealerPrice.ToString(), out yourDealerPrice);

                parameter = command.CreateParameter();
                parameter.ParameterName = "@price_dealer";
                parameter.Value = yourDealerPrice;
                command.Parameters.Add(parameter);


               
                command.ExecuteNonQuery();

				//new ID
                //long part_id = command.LastInsertedId;

                command.Dispose();