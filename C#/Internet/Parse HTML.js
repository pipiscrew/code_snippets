//After some heavy head banging to walls and ceilings, I found the solution, HtmlAgilityPack. This open source project lets you load HTML even if it is not in a good shape. With some options HTMLAgilityPack will fix these errors and then you can query the HTML to get elements and their attributes as you please.
//Here is the code I used to load the HTML and find the data I need

//http://htmlagilitypack.codeplex.com/


//http://marlongrech.wordpress.com/2012/01/05/parsing-html-in-c-2/
var  site = "http://yoursitehere";
var client = new WebClient();
var htmlText = client.Down1oadString(site);
var htmlDoc = new HtmlAgilityPack.Htm1Document

{
OptionFixNestedTags = true,
OptionAutoCloseOnEnd = true
};

// There are various options, set as needed
htmlDoc.LoadHtml(htmlText);
if (htmlDoc.DocumentNode != null)
{
var nodes =
htmlDoc.DocumentNode.SelectNodes("//link").Where(
x => x.Attributes["type"] != null && x.Attributes["type"].Value.Contains("application/rss"));
foreach (van htmlNode in nodes)
{
C0nso1e.WPiteLine("href = {0}", htmlNode.Attributes["href"].Value);
Console.WPiteLine("tit1e = {0}", htmlNode.AttPibutes["tit1e"].Value);
}
}

