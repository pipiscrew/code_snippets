//http://stackoverflow.com/questions/2267002/json-net-to-c-objects
Lets take the example of the Taxonomy path as an example. Using your above class definition JSON.net is looking for Json data in this format:

{"taxonomies": {"taxonomies":[{"taxonomy": {"Topics": {1212, "foo"}}}]}

This looks nothing at all like your input data.

When youre creating your objects think of it this way.

1) A base object creates a {} in the json code. 
2) A dictionary creates a {} in the json code. 
3) A List creates a [] in the json code 
4) every member of a class creates a entry in the {} of the json code

What might help to debug this for you is to create your structure, 
fill in some temp data then use JsonConvert.Serialize(myobj) to show you what JSON thinks
the structure will look like.

I think your exception comes from having way to many classes.

This is probably what you want the taxominies portion of your code to look like:

class SMSearchCriteria
{
        public SMKeywords keywords { get; set; }
        public SMDates dates { get; set; }
        public SMClusters clusters { get; set; }
        public SMTaxominies taxonomies { get; set; }
        public SMSort sort { get; set; }
}

class SMTaxominies
{
    public Dictionary<string, string> Topics;
    public Keywords<string, string> Keywords;
}
