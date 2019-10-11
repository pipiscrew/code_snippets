                System.Collections.IEnumerable stksEnum = parsedData as System.Collections.IEnumerable;

                foreach (KeyValuePair<string, object> item in stksEnum)
                {
                    System.Collections.Generic.Dictionary<string, object> o = (System.Collections.Generic.Dictionary<string, object>)item.Value;
                    var keyValuePair = o.FirstOrDefault(c => c.Key == "message");
                    var errCode = o.FirstOrDefault(c => c.Key == "code");

                    //Console.WriteLine(keyValuePair);
                    setStatusLabel(keyValuePair.Value.ToString());
                 }
                        