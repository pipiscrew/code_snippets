There are different commands you can give to shut down the computer. Type thiese in any procedure e.g. Command1.Click() 

To Log off: 
retval=shell("RUNDLL32 SHELL32.DLL,SHExitWindowsEx 0",1) 

To Shut Down: 
retval=shell("RUNDLL32 SHELL32.DLL,SHExitWindowsEx 1",1) 

To Reboot: retval=shell("RUNDLL32 SHELL32.DLL,SHExitWindowsEx 2",1) 

To Force ShutDown: retval=shell("RUNDLL32 SHELL32.DLL,SHExitWindowsEx 4") 

The above code can also be inserted into timer so the computer shutdowns after a period of time. 
However, if you are a complete novice and use Windows Xp, then use the following code: 

retval=shell("SHUTDOWN /L /T:15 /Y /C",1) 

The above code will shutdown in 15 seconds, and close all existing programs without saving. 
If however you wish to stop the shutdown during these 15 seconds, then a simple ccommand: 

retval=shell("shutdown /a",1) 

should suffice. Note that the 15 seconds can be adjusted to seconds of your choice. Insert /n instead of /y for prompt to save exisiting applications and Remove the final parameter /c if you do not want shutdown to be cancelled. Hope the above Article helps you in understanding in different ways to shutdown. 
Please, please, please vote for me! It is my first submission 
