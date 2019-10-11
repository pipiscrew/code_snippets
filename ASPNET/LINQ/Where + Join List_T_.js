	
	string[] arr = searchTerm.Split(new string[] { " " }, StringSplitOptions.RemoveEmptyEntries);
	List<string> search_txt = arr.ToList().Where(s => s.Length == 1 && s.Any(char.IsDigit)).ToList();
	if (search_txt != null && search_txt.Count > 0)
	{
	    searchTerm = "\"" + string.Join(" ", arr) + "\""; // search_txt[0];
	
	    orQuerySb = andQuerySb = new StringBuilder(searchTerm);
	}
