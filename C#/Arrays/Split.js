string[] output = tmp.Split(new char[] { '|' });


for eNTER only by REGEX

	string value = "cat\r\ndog\r\nanimal\r\nperson";
	//
	// Split the string on line breaks.
	// ... The return value from Split is a string[] array.
	//
	string[] lines = Regex.Split(value, "\r\n");

	foreach (string line in lines)
	{
	    Console.WriteLine(line);
	}
	
	
//tested&working
var code = textBox3.Text.Split(new[] { Environment.NewLine, "\r", "\n" }, StringSplitOptions.None);