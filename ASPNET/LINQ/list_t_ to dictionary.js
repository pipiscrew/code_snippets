//http://stackoverflow.com/questions/4022304/convert-list-of-keyvaluepair-into-idictionary-c

IDictionary<string, string> dictionary =
    list.ToDictionary(pair => pair.Key, pair => pair.Value);