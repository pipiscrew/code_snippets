            // create reader & open file
            StreamReader tr = new StreamReader("date.txt");

            // read a line of text
            Console.WriteLine(tr.ReadLine());

            // close the stream
            tr.Close();
            
            
-or-


	List<string> list = new List<string>();
	using (StreamReader reader = new StreamReader("file.txt"))
	{
	    string line;
	    while ((line = reader.ReadLine()) != null)
	    {
		list.Add(line); // Add to list.
		Console.WriteLine(line); // Write to console.
	    }
	}