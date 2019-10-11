		Dim inp As InputStream
		inp = File.OpenInput(File.DirRootExternal, "/Android/data/Anima/update.xml")

		'XMLparser.Initialize
		XMLparser.Parse(inp,"ProductsXML")
		
		'Close
		inp.Close()