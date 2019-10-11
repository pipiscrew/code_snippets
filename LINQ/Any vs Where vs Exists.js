//http://stackoverflow.com/questions/3703256/linq-extension-methods-any-vs-where-vs-exists

Any() - boolean - returns true if any of the elements in a collection meet your predicates criteria.

Where() - collection - returns an enumerable of all elements in a collection that meet your predicates criteria.

Exists() - boolean - does the same thing as 'any' except its just
           an older implementation that was there on the IList back before Linq.
           
//example of any, coz where+select doesnt work aka :
//     where y.ConstructorArguments.Select(p => p.Value.ToString().ToLower().Contains("publick"))
//IDE gives error that returns only 1row
var type_attributes2 = (from t in assembly.MainModule.Types
            from y in t.CustomAttributes
            where t.HasCustomAttributes
            where y.ConstructorArguments.Any(p => p.Value.ToString().ToLower().Contains("publick"))
            select t.MetadataToken.ToInt32().ToString("X8"));