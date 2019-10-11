//http://stackoverflow.com/questions/3277503/how-to-read-a-file-line-by-line-into-a-list

//method 1
	lines = tuple(open(filename, 'r'))

//method 2
	//If you want the \n included:
	
	with open(fname) as f:
	    content = f.readlines()
	    
	//If you do not want \n included:
	with open(fname) as f:
	    content = f.read().splitlines()
	//or
	lines = open(filename).read().splitlines()