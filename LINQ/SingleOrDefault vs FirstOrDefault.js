
//http://www.dotnetperls.com/singleordefault

SingleOrDefault
	Returns the only element of a sequence, or a default value
	if the sequence is empty; this method throws an exception
	if there is more than one element in the sequence.
	
FirstOrDefault 
	Returns the first element of a sequence
	
// If you try to use SingleOrDefault() and the query results in more than record
//you would get and exception. The only time you can safely use SingleOrDefault()
//is when you are expecting only 1 and only 1 result...

//http://stackoverflow.com/a/1745716
//the FirstOrDefault is working about 10 times faster than SingleOrDefault 

//Consider the code spit for the two with LINQ to SQL - FirstOrDefault uses Top 1.
//SingleOrDefault uses Top 2