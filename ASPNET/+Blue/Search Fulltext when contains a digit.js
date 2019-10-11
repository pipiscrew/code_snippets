//http://www.pipiscrew.com/2015/11/sql-full-text-search-on-sql-excludes-single-digits/

            //csp - fix fulltext search when searchterm contains a digit
            string[] arr = searchTerm.Split(new string[] { " " }, StringSplitOptions.RemoveEmptyEntries);
            List<string> search_txt = arr.ToList().Where(s => s.Length == 1 && s.Any(char.IsDigit)).ToList();
            if (search_txt != null && search_txt.Count > 0)
            {
                searchTerm = "\"" + string.Join(" ", arr) + "\"";

                orQuerySb = andQuerySb = new StringBuilder(searchTerm);
            }
            else 
                SearchHelper.BuildSearchTerm(searchTerm, out andQuerySb, out orQuerySb);