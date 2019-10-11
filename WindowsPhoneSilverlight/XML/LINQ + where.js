//http://www.hookedonlinq.com/LINQtoXML5MinuteOverview.ashx
// Loading from a file, you can also load from a stream
XDocument loaded = XDocument.Load(@"C:\contacts.xml");


// Query the data and write out a subset of contacts
var q = from c in loaded.Descendants("contact")
        where (int)c.Attribute("contactId") < 4
        select (string)c.Element("firstName") + “ “ +
 		   (string)c.Element("lastName");


foreach (string name in q)
    Console.WriteLine("Customer name = {0}", name);