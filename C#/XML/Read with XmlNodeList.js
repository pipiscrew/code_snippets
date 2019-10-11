//http://www.csharp-examples.net/xml-nodes-by-name/

<Names>
    <Name>
        <FirstName>John</FirstName>
        <LastName>Smith</LastName>
    </Name>
    <Name>
        <FirstName>James</FirstName>
        <LastName>White</LastName>
    </Name>
</Names>


XmlDocument xml = new XmlDocument();
xml.LoadXml(myXmlString); // suppose that myXmlString contains "<Names>...</Names>"

XmlNodeList xnList = xml.SelectNodes("/Names/Name");
foreach (XmlNode xn in xnList)
{
  string firstName = xn["FirstName"].InnerText;
  string lastName = xn["LastName"].InnerText;
  Console.WriteLine("Name: {0} {1}", firstName, lastName);
}
