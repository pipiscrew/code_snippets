//http://stackoverflow.com/a/4340393
set /p id_folder="Task Name: "

set /p id="Block ID: "

//for folder
if exist %id_folder% (
	echo my lord, folder %id% already exists!
	pause
	exit
	
)

//file
if exist %id%en-dev.txt (
	echo my lord, file %id%en-dev.txt already exists!
	pause
	exit
	
)