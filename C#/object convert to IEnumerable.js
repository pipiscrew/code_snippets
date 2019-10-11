//convert object to IEnumerable



object parsedData = se.Deserialize(reader);
System.Collections.IEnumerable stksEnum = parsedData as System.Collections.IEnumerable;
 
//so enable the 
foreach (KeyValuePair<string, object> item in stksEnum) {
//or
foreach (System.Collections.Generic.Dictionary<string, object> item2 in stksEnum2)