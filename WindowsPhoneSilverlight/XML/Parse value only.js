private XElement apiXML;

apiXML = XElement.Load(reader);
(string)(apiXML.Descendants("slice").First());

returns "50"

apiXML.Descendants("slice").First().ToString();

returns "<slice>100</slice>"
