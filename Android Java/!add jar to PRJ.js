//http://stackoverflow.com/questions/8228990/where-the-heck-is-the-android-apps-lib-folder

//new
in ur system create a folder 
	libs
put the jar's in and drag'n'drop it to eclipse project

Right-click your project and hit 'Project Properties'.
Choose 'Java Build Path'.
Choose the 'Libraries' tab.
Add jar > select the jar from your project
Goto Order and Export tab check the lib! > Press Ok!

//old before v20
If you use Eclipse do the following:

Right-click your project and hit 'Project Properties'.
Choose 'Java Build Path'.
Choose the 'Libraries' tab.
Hit 'Add External JARs...'.
Navigate to your desired .jar-file and hit 'Open'.
Click 'OK'.
Then you should be able to reference your external library.