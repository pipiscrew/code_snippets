//http://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node
//http://stackoverflow.com/questions/2496710/writing-files-in-nodejs

    var fs = require('fs');
	var log = fs.createWriteStream('log.txt', {'flags': 'a'});
	// use {'flags': 'a'} to append (when is not exists, will be created)
	//and {'flags': 'w'} to erase and write a new file
	log.write("this is a message");
	log.close();