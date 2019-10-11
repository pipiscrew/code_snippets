//needs the minified version of JSON.NET
            JsonReader reader = new JsonReader(new StringReader(File.ReadAllText(@"D:\Untitled2 - Copy.json")));
            JsonSerializer se = new JsonSerializer();
            object parsedData = se.Deserialize(reader);
            Console.WriteLine(parsedData.ToString());

            

            System.Collections.IEnumerable stksEnum = parsedData as System.Collections.IEnumerable;
            
            foreach (KeyValuePair<string, object> item in stksEnum) {
                Console.WriteLine("TABLE" + item.Key);

                if (item.Value.GetType() == typeof(Newtonsoft.Json.JavaScriptArray))
                {
                    Console.WriteLine("isArray!");

                    System.Collections.IEnumerable stksEnum2 = item.Value as System.Collections.IEnumerable;

                    foreach (System.Collections.Generic.Dictionary<string, object> item2 in stksEnum2)
                    {
                    	//is dictionary cant! so the below solution to turn it to KeyValuePair
                    	//Console.WriteLine("key" + item2.Key);
                    	//Console.WriteLine("value" + item2.Value);
                    	//or
                        Console.WriteLine(item2["Name"]); 
                    }
                }
                else 
                 	Console.WriteLine("TABLE value" + item.Value);
            }
            
//read dictionary as KeyValuePair
                    foreach (System.Collections.Generic.Dictionary<string, object> item2 in stksEnum2)
                    {
                        foreach (KeyValuePair<string, object> kvp in item2)
                        {
                            Console.WriteLine(kvp.Value);
                            TableRows[kvp.Key.ToString()] = kvp.Value;
                        }

                        TBL.Rows.Add(TableRows.ItemArray);
                    }
                    
                    
//query dictionary for spefic key or value
                System.Collections.IEnumerable stksEnum = parsedData as System.Collections.IEnumerable;

                foreach (KeyValuePair<string, object> item in stksEnum)
                {
                    if (item.Key.ToLower() != "data")
                    {
                        try
                        {
                            if (item.Key.ToLower() == "error")
                            {

                                Console.WriteLine(item.Value.GetType().ToString());

                                System.Collections.Generic.Dictionary<string, object> o = (System.Collections.Generic.Dictionary<string, object>)item.Value;
                                var keyValuePair = o.FirstOrDefault(c => c.Key == "message");
                                var errCode = o.FirstOrDefault(c => c.Key == "code");

                                if (errCode.Value.ToString() == "190")
                                    e.Result = "loginerror";
                                    //showLoginMessageBox = false; //repeat the message error to user

                                //Console.WriteLine(keyValuePair);
                                setStatusLabel(keyValuePair.Value.ToString());

                            }
                        }
                        catch { }