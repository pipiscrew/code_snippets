//http://www.dotnetperls.com/recursive-file-list

//method 1
var files = new List<string>(Directory.GetFiles("C:\\folder", "*.*", SearchOption.AllDirectories));

//method 2

	// Call EnumerateFiles in a foreach-loop.
	foreach (string file in Directory.EnumerateFiles(@"c:\files", "*.*", SearchOption.AllDirectories))
	{
	    // Display file path.
	    Console.WriteLine(file);
	}